import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Avatar, AvatarImage } from '~/components/ui/Avatar';
import { Container } from '~/components/ui/Container';
import { Checkbox } from '~/components/ui/Checkbox';
import { Separator } from '~/components/ui/Separator';
import { Button } from '~/components/Button';

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
          <Text className="mb-5 text-xl font-semibold">Tempo de treino: 36:59</Text>
          {routine.exercises.map((exercise: Exercise) => (
            <View key={exercise.id}>
              <View className="flex-row items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage source={{ uri: exercise.url_gif }} />
                </Avatar>
                <Text className="text-xl font-semibold">{exercise.name}</Text>
              </View>

              <View className="flex-row items-center justify-between px-5 py-2">
                <Text className=" font-semibold">Tempo de descanso: </Text>
                <Text>1:30s</Text>
              </View>

              {Array.from({ length: exercise.series }).map((_, index) => {
                const key = `${exercise.id}-${index}`;
                return (
                  <View
                    key={index}
                    className={`flex-row items-center justify-between py-2 ${index % 2 === 1 ? 'bg-slate-200 px-5' : 'bg-white px-5'}`}>
                    <Text className="text-lg font-semibold">Série {index + 1}</Text>
                    <Text className="text-lg">-</Text>

                    <View className="flex-row items-center justify-center">
                      <TextInput
                        placeholder="0"
                        className="font-semibold placeholder:rounded-md placeholder:bg-slate-300 placeholder:p-0.5 placeholder:text-center"
                      />

                      <Text> reps</Text>
                      <Text className="px-8 text-lg"> x </Text>

                      <TextInput
                        placeholder="0"
                        className="font-semibold placeholder:rounded-md placeholder:bg-slate-300 placeholder:p-0.5 placeholder:text-center"
                      />
                      <Text> Kg</Text>
                    </View>

                    <Checkbox
                      checkboxClasses="w-7 h-7"
                      isChecked={isReady[key]}
                      onToggle={() => handleReady(exercise.id, index)}
                    />
                  </View>
                );
              })}
              <Separator />
            </View>
          ))}
        </View>
        <Button
          titleButton="Finalizar Treino"
          className="mb-10 bg-buttonColor-500"
          touchableStyle="border-0"
          textStyle="text-white"
        />
      </Container>
    </ScrollView>
  );
}
