import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';

export function ListRoutines() {
  return (
    <>
      <View className="border-border-50 mb-3.5 rounded-md border-2 p-4">
        <View>
          <Text className="text-lg font-bold color-text-900">Perna</Text>
          <Text className="color-text-600">
            Agachamento, Hack, Leg Press 45, bulgáro, Cadeira extensora...
          </Text>
        </View>
        <Button titleButton="Iniciar treino" className="-mt-5" borderColor="border-border-800" />
      </View>
    </>
  );
}
