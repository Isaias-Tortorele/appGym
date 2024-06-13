import { View, Text } from 'react-native';
import React from 'react';
import Container from '~/components/ui/Container';
import Button from '~/components/Button';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import GoBack from '../components/GoBack';

export default function Register() {
  return (
    <>
      <Container>
        <View className="pt-10">
          <GoBack />
          <View className="mt-24 rounded-md border-2 border-border-50 p-4">
            <View className="items-center justify-center">
              <FontAwesome6 name="dumbbell" size={40} color="black" />
              <Text className="text-center text-lg font-bold color-text-900">exercícios</Text>
              <Text className="color-text-600">Adicione um exercícios para comecar seu treino</Text>
            </View>
            <Button
              titleButton="Adicionar exercícios"
              borderColor="border-border-800"
              onPress={() => router.push('/exercises')}
            />
          </View>
        </View>
      </Container>
    </>
  );
}
