import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Container from '~/components/ui/Container';
import Button from '~/components/Button';
import { ScrollView, Text, View } from 'react-native';
import { Avatar, AvatarImage } from '~/components/ui/Avatar';
import { useExercise } from '~/contexts/ExerciseContext';
import { useRoutines } from '~/contexts/RoutinesContext';

export default function WorkoutPlan() {
  const { selectedExercises } = useExercise();
  const { routines, addRoutine, updateRoutine } = useRoutines(); // Adicione o método updateRoutine

  const params = useLocalSearchParams();
  const namePlan = Array.isArray(params.namePlan) ? params.namePlan[0] : params.namePlan;
  const exercises = params.exercises ? JSON.parse(params.exercises as string) : [];

  const handleStartWorkout = () => {
    if (namePlan) {
      const existingRoutine = routines.find((routine) => routine.name === namePlan);

      if (existingRoutine) {
        // Treino já existe, atualize os exercícios
        updateRoutine(existingRoutine.name, selectedExercises);
      } else {
        // Treino não existe, adicione um novo
        addRoutine(namePlan, selectedExercises);
      }

      router.push('/home');
    } else {
      console.error('Name plan is undefined');
    }
  };
  const handleEditWorkout = () => {
    router.push({
      pathname: '/exercises',
      params: { routine: JSON.stringify({ name: namePlan, exercises }) },
    });
  };

  return (
    <Container>
      <View className="mt-20">
        <Text className="mb-4 text-xl font-semibold">Ficha: {namePlan}</Text>
        <ScrollView className="max-h-[70%] min-h-[70%]">
          {selectedExercises.map((exercise) => (
            <View
              className="mb-4 rounded-3xl border-x-2 border-b-2 border-slate-300 bg-slate-100 px-4 shadow-sm shadow-slate-400"
              key={exercise.id}>
              <View className="h-16 flex-row items-center justify-between">
                <View className="flex flex-row items-center justify-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage source={{ uri: exercise.url_gif }} resizeMode="cover" />
                  </Avatar>
                  <Text className="text-lg font-semibold">{exercise.name}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <Button
          titleButton="Editar treino"
          touchableStyle="border-2"
          textStyle="text-text-600"
          onPress={handleEditWorkout}
        />
        <Button
          titleButton="Salvar treino"
          touchableStyle="bg-cyan-400 border-none"
          textStyle="text-white"
          onPress={handleStartWorkout}
        />
      </View>
    </Container>
  );
}
