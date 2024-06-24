import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import { useRoutines } from '~/contexts/RoutinesContext';

type Exercise = {
  id: string;
  name: string;
  url_gif: string;
};

type Routine = {
  name: string;
  exercises: Exercise[];
};

export default function ListRoutines() {
  const { routines } = useRoutines();

  return (
    <>
      {routines.map((routine) => (
        <View key={routine.name} className="mb-3.5 rounded-md border-2 border-border-50 p-4">
          <View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-bold color-text-900">{routine.name}</Text>
            </View>
            <Text className="mr-6 color-text-600" numberOfLines={2} ellipsizeMode="tail">
              {routine.exercises.map((exercise) => exercise.name).join(', ')}
            </Text>
          </View>
          <Button titleButton="Iniciar treino" className="-mt-5" borderColor="border-border-800" />
        </View>
      ))}
    </>
  );
}
