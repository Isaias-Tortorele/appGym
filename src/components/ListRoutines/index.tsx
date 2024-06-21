import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../Button';
import { Ionicons } from '@expo/vector-icons';
import { useRoutines } from '~/contexts/RoutinesContext';

export default function ListRoutines() {
  const { routines } = useRoutines();

  return (
    <>
      {routines.map((routine) => (
        <View key={routine.name} className="mb-3.5 rounded-md border-2 border-border-50 p-4">
          <View>
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-bold color-text-900">{routine.name}</Text>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text className="color-text-600">
              {routine.exercises.map((exercise) => exercise.title).join(', ')}
            </Text>
          </View>
          <Button titleButton="Iniciar treino" className="-mt-5" borderColor="border-border-800" />
        </View>
      ))}
    </>
  );
}
