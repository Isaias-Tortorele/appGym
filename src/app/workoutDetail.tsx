import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Avatar, AvatarImage } from '~/components/ui/Avatar';
import Container from '~/components/ui/Container';
import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from '~/components/ui/Checkbox';

type Exercise = {
  id: string;
  name: string;
  type: string;
  url_gif: string;
  series: number;
  repetition: string;
  member: string;
};

export default function WorkoutDetail() {
  const [isReady, setIsReady] = useState<{ [key: string]: boolean }>({});

  const params = useLocalSearchParams();
  const routine = params.routine ? JSON.parse(params.routine as string) : null;

  const handleReady = (exerciseId: string, seriesIndex: number) => {
    const key = `${exerciseId}-${seriesIndex}`;

    setIsReady((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

    console.log(key);
  };

  return (
    <ScrollView>
      <Container>
        <View className="pt-10">
          <Text className="text-sm font-medium text-text-600">Ficha: {routine.name}</Text>
          <Text className="mb-5 text-xl font-semibold">Tempo de treino: </Text>
          {routine.exercises.map((exercise: Exercise) => (
            <View key={exercise.id} className="my-5 rounded-xl border-2 px-5">
              <View className="flex-row items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage source={{ uri: exercise.url_gif }} />
                </Avatar>
                <Text className="text-xl font-semibold">{exercise.name}</Text>
              </View>
              <Text>Tempo de descanso: 1:30s</Text>

              {Array.from({ length: exercise.series }).map((_, index) => {
                const key = `${exercise.id}-${index}`;
                return (
                  <View key={index} className="mx-1 flex-row items-center justify-between py-1.5">
                    <Text className="text-lg font-semibold">Série {index + 1}</Text>
                    <Text className="text-lg font-semibold">-</Text>
                    <Text className="text-lg font-semibold">{exercise.repetition} reps </Text>
                    <Text className="text-lg font-normal">x</Text>
                    <Text className="text-lg font-semibold">20 Kg</Text>

                    <Checkbox
                      checkboxClasses="w-7 h-7"
                      isChecked={isReady[key]}
                      onToggle={() => handleReady(exercise.id, index)}
                    />
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </Container>
    </ScrollView>
  );
}
