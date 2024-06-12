import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Container from '~/components/ui/Container';

export default function RegisterTo() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <View className="pt-10">
        <TouchableOpacity className="pt-1" onPress={goBack}>
          <FontAwesome6 name="arrow-left" size={30} />
        </TouchableOpacity>
        <Text>registerTo</Text>
      </View>
    </Container>
  );
}
