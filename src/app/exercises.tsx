import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Container from '~/components/ui/Container';
import ExerciseList from '~/components/ExerciseList';
import CustomModal from '~/components/Modal';
import GoBack from '../components/GoBack';
import Button from '~/components/Button';
import { Input } from '~/components/ui/Input';
import { useRouter } from 'expo-router';
import { useExercise } from '~/contexts/ExerciseContext';

import { getAllExercises, getExercises } from '~/utils/api';

type Exercise = {
  id: string;
  name: string;
  url_gif: string;
};

export default function Exercises() {
  const router = useRouter();

  const [exerciseSearch, setExerciseSearch] = useState('');
  const [namePlan, setNamePlan] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const { selectedExercises, toggleExerciseSelection } = useExercise();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleAddExercises = () =>
    router.push({
      pathname: '/workoutPlan',
      params: { namePlan },
    });

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const exercisesData = await getAllExercises();
        setExercises(exercisesData);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

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

      <View className="absolute bottom-0 w-full items-center pb-5">
        <Button
          titleButton="Adicionar exercícios"
          className="w-4/5"
          touchableStyle="bg-cyan-400 border-none"
          textStyle="text-white"
          onPress={handleAddExercises}
        />
      </View>

      <CustomModal visible={modalVisible} onClose={closeModal} />
    </Container>
  );
}
