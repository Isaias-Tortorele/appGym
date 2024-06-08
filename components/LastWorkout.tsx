import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title?: string;
  titleButton: string;
  className?: string;
}

export default function LastWorkout({ onPress, title, titleButton, className }: ButtonProps) {
  return (
    <View className={`${className}`}>
      <Text className="text-xl font-semibold">{title}</Text>
      <TouchableOpacity
        className="px-6 h-14 w-full flex-row items-center justify-between rounded-md border-2 border-slate-400"
        onPress={onPress}>
        <Text className="text-lg font-semibold color-slate-700">{titleButton}</Text>
        <MaterialIcons name="remove-red-eye" size={30} />
      </TouchableOpacity>
    </View>
  );
}
