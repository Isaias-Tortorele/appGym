import { Ionicons } from '@expo/vector-icons';
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
        className="h-14 w-full flex-row items-center justify-between rounded-md border-2 border-slate-400 px-6"
        onPress={onPress}>
        <Text className="text-lg font-semibold color-slate-700">{titleButton}</Text>
        <Ionicons name="eye-outline" size={28} color={'#334155'} />
      </TouchableOpacity>
    </View>
  );
}
