import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import ExerciseList from '~/components/ExerciseList';
import CustomModal from '~/components/Modal';
import GoBack from '~/components/GoBack';
import { Container } from '~/components/ui/Container';
import { Button } from '~/components/Button';
import { Input } from '~/components/ui/Input';
import { useRouter } from 'expo-router';
import { useExercise } from '~/contexts/ExerciseContext';

import { getAllExercises, getExercisesByMuscleGroup } from '~/utils/api';

type Exercise = {
  id: string;
  name: string;
  type: string;
  url_gif: string;
  url_photo: string;
  series: number;
  repetition: string;
  member: string;
};

export default function Exercises() {
  const router = useRouter();

  const [exerciseSearch, setExerciseSearch] = useState('');
  const [namePlan, setNamePlan] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState<string[]>([]);

  const { selectedExercises, toggleExerciseSelection } = useExercise();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleAddExercises = () => {
    router.push({
      pathname: '/workoutPlan',
      params: { namePlan, exercises: JSON.stringify(selectedExercises) },
    });
  };

  const fetchExercises = async () => {
    setLoading(true);
    try {
      let exercisesData: Exercise[] = [];
      if (selectedMuscleGroups.length > 0) {
        for (const muscleGroup of selectedMuscleGroups) {
          const data = await getExercisesByMuscleGroup(muscleGroup);
          exercisesData = [...exercisesData, ...data];
        }
      } else {
        exercisesData = await getAllExercises();
      }
      if (exercisesData.length > 0) {
        setExercises((prevExercises) => [...prevExercises, ...exercisesData]);
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [selectedMuscleGroups]);

  const handleFilter = (filters: string[]) => {
    setSelectedMuscleGroups(filters);
    setExercises([]);
  };

  return (
    <Container>
      <GoBack />

      <Input
        placeholder="Nome da ficha"
        value={namePlan}
        onChangeText={setNamePlan}
        inputClasses="px-6"
        className="pb-3"
      />
      <Input
        placeholder="Busca exercícios"
        value={exerciseSearch}
        onChangeText={setExerciseSearch}
        label="Busque algum exercício"
        className="pb-3"
        inputClasses="px-6 py-3"
      />

      <View className="items-center justify-center pb-3">
        <TouchableOpacity
          className="w-3/5 items-center justify-center rounded-md border border-border-400"
          onPress={openModal}>
          <Text className="text-md color-text-600">Painel muscular</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" className="border-border-800" />
      ) : (
        <FlatList
          className="h-4/6"
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ExerciseList
              data={item}
              selectedExercises={selectedExercises}
              toggleExerciseSelection={toggleExerciseSelection}
            />
          )}
        />
      )}

      {selectedExercises.length != 0 && (
        <View className="absolute bottom-0 w-full items-center pb-5">
          <Button
            titleButton="Adicionar exercícios"
            className="w-4/5"
            touchableStyle="bg-cyan-400 border-none"
            textStyle="text-white"
            onPress={handleAddExercises}
          />
        </View>
      )}

      <CustomModal visible={modalVisible} onClose={closeModal} onFilter={handleFilter} />
    </Container>
  );
}
