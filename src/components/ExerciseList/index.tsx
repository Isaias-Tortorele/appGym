import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, AvatarImage } from '../ui/Avatar';

type DataProps = {
  id: string;
  name: string;
  type: string;
  url_gif: string;
  url_photo: string;
  series: number;
  repetition: string;
  member: string;
};

type ExerciseListProps = {
  data: DataProps;
  selectedExercises: DataProps[];
  toggleExerciseSelection: (exercise: DataProps) => void;
};

export default function ExerciseList({
  data,
  selectedExercises,
  toggleExerciseSelection,
}: ExerciseListProps) {
  const isSelected = selectedExercises.some((exercise) => exercise.id === data.id);

  return (
    <View
      className="m-1 mb-4 rounded-3xl border-x-2 border-b-2 border-slate-300 bg-slate-100 px-4 shadow-sm shadow-slate-400"
      key={data.id}>
      <View className="h-16 flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              source={{ uri: data.url_photo ? data.url_photo : 'vazio' }}
              resizeMode="cover"
            />
          </Avatar>
          <Text className="w-60 text-lg font-semibold" numberOfLines={1} ellipsizeMode="tail">
            {data.name}
          </Text>
        </View>
        <TouchableOpacity onPress={() => toggleExerciseSelection(data)}>
          <MaterialIcons
            name={isSelected ? 'check-circle-outline' : 'radio-button-unchecked'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
});
