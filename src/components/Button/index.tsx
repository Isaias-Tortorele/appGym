import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title?: string;
  titleButton: string;
  className?: string;
  touchableStyle?: string;
  textStyle?: string;
  borderColor?: string;
}

export default function Button({
  onPress,
  title,
  titleButton,
  className,
  borderColor,
  touchableStyle,
  textStyle,
}: ButtonProps) {
  return (
    <>
      <Text className="text-xl font-semibold color-text-900">{title}</Text>
      <TouchableOpacity
        className={`h-14 items-center justify-center rounded-md  
          ${borderColor ? borderColor : 'border-border-400'} ${touchableStyle ? touchableStyle : 'border-2'} ${className}`}
        onPress={onPress}>
        <Text className={`text-lg font-semibold  ${textStyle ? textStyle : 'color-text-600'}`}>
          {titleButton}
        </Text>
      </TouchableOpacity>
    </>
  );
}
