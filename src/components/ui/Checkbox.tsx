import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '../../lib/utils';

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
  isChecked: boolean;
  onToggle: () => void;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  isChecked,
  onToggle,
  ...props
}: CheckboxProps) {
  return (
    <View className={cn('flex flex-row items-center gap-2', className)} {...props}>
      <TouchableOpacity onPress={onToggle}>
        <View
          className={cn(
            'bg-background flex h-4 w-4 items-center justify-center rounded border border-gray-700',
            {
              'bg-foreground': isChecked,
            },
            checkboxClasses
          )}>
          {isChecked && <Text className="text-background text-lg">✓</Text>}
        </View>
      </TouchableOpacity>
      {label && <Text className={cn('text-primary', labelClasses)}>{label}</Text>}
    </View>
  );
}

export { Checkbox };
