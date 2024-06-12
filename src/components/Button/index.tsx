import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title?: string;
  titleButton: string;
  className?: string;
  borderColor?: string;
}

export default function Button({ onPress, title, titleButton, className, borderColor }: ButtonProps) {
  return (
    <View className={`${className}`}>
      <Text className="color-text-900 text-xl font-semibold">{title}</Text>
      <TouchableOpacity
        className={`h-14 items-center justify-center rounded-md border-2 ${borderColor ? borderColor : 'border-border-400'}`}
        onPress={onPress}>
        <Text className="color-text-600 text-lg font-semibold">{titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
