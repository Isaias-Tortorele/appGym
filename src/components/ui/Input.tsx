import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';

import { cn } from '../../lib/utils';

export interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn('flex flex-col gap-1.5 ', className)}>
      {label && <Text className={cn('text-base color-text-600', labelClasses)}>{label}</Text>}
      <TextInput
        className={cn(
          inputClasses,
          'rounded-lg border border-border-800 px-6 py-3 text-xl font-medium text-slate-600 placeholder:color-slate-300'
        )}
        {...props}
      />
    </View>
  )
);

export { Input };
