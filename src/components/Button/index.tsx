import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title?: string;
  titleButton: string;
  className?: string;
  borderColor?: string;
}

export function Button({ onPress, title, titleButton, className, borderColor }: ButtonProps) {
  return (
    <View className={`${className}`}>
      <Text className="text-xl font-semibold color-text-900">{title}</Text>
      <TouchableOpacity
        className={`h-14 items-center justify-center rounded-md border-2 ${borderColor ? borderColor : 'border-border-400'}`}
        onPress={onPress}>
        <Text className="text-lg font-semibold color-text-600">{titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
