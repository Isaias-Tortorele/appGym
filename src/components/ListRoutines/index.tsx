import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';

export function ListRoutines() {
  return (
    <>
      <View className="mb-3 rounded-md border-2 border-slate-300 p-3">
        <View>
          <Text className="text-lg font-bold">Perna</Text>
          <Text className="color-slate-700">
            Agachamento, Hack, Leg Press 45, bulgáro, Cadeira extensora...
          </Text>
        </View>
        <Button titleButton="Iniciar treino" className="-mt-5" borderColor="border-cyan-500" />
      </View>
    </>
  );
}
