import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Container from '~/components/ui/Container';
import ExerciseList from '~/components/ExerciseList';
import CustomModal from '~/components/Modal';
import GoBack from '../components/GoBack';
import Button from '~/components/Button';
import { Input } from '~/components/ui/Input';
import { useRouter } from 'expo-router';
import { useExercise } from '~/contexts/ExerciseContext';

type Exercise = {
  id: string;
  title: string;
  url_gif: string;
};

const DATA: Exercise[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url_gif:
      'https://firebasestorage.googleapis.com/v0/b/appgym-b2902.appspot.com/o/abdomen%2FAbdominal%20bicicleta.gif?alt=media&token=4a760c47-679d-4326-bf7e-b613c59b1ae3',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    url_gif:
      'https://firebasestorage.googleapis.com/v0/b/appgym-b2902.appspot.com/o/abdomen%2FAbdominal%20calcanhar.gif?alt=media&token=af355b17-60ab-46b5-b1fd-eadb54821dda',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145a571e29d72',
    title: 'Third Item',
    url_gif:
      'https://firebasestorage.googleapis.com/v0/b/appgym-b2902.appspot.com/o/abdomen%2FAbdominal%20Canivete.gif?alt=media&token=9d708e8d-9092-46d9-88ec-8ddb2f74d5eb',
  },
];

export default function Exercises() {
  const router = useRouter();

  const [exerciseSearch, setExerciseSearch] = useState('');
  const [namePlan, setNamePlan] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { selectedExercises, toggleExerciseSelection } = useExercise();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleAddExercises = () => router.push('/workoutPlan');

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
        data={DATA}
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
