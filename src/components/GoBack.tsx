import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

export default function GoBack() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity className="py-10" onPress={goBack}>
      <FontAwesome6 name="arrow-left" size={30} />
    </TouchableOpacity>
  );
}
