import { View, Text } from 'react-native';
import React from 'react';
import Container from '~/components/ui/Container';
import Menu from '~/components/Menu';
import Button from '~/components/Button';
import { FontAwesome6 } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <Container>
        <View className="pt-10">
          <TouchableOpacity className="pt-1" onPress={goBack}>
            <FontAwesome6 name="arrow-left" size={30} />
          </TouchableOpacity>
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
