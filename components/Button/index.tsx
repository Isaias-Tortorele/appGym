import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title?: string;
  titleButton: string;
  className?: string;
}

export function Button({ onPress, title, titleButton, className }: ButtonProps) {
  return (
    <View className={`mb-6 ${className}`}>
      <Text className="text-xl font-semibold">{title}</Text>
      <TouchableOpacity
        className="h-14 items-center justify-center rounded-md border-2 border-slate-400"
        onPress={onPress}>
        <Text className="text-lg font-semibold color-slate-700">{titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
