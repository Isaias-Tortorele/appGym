import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

export default function GoBack() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View className="py-10">
      <TouchableOpacity className="h-10 w-10 justify-center items-center" onPress={goBack}>
        <FontAwesome6 name="arrow-left" size={30} />
      </TouchableOpacity>
    </View>
  );
}
