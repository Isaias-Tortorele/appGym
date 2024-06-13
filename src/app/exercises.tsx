import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import Container from '~/components/ui/Container';
import ExerciseList from '~/components/ExerciseList';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url_gif:
      'https://firebasestorage.googleapis.com/v0/b/appgym-b2902.appspot.com/o/abdomen%2FAbdominal%20bicicleta.gif?alt=media&token=4a760c47-679d-4326-bf7e-b613c59b1ae3',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    url_gif:
      'https://firebasestorage.googleapis.com/v0/b/appgym-b2902.appspot.com/o/abdomen%2FAbdominal%20bicicleta.gif?alt=media&token=4a760c47-679d-4326-bf7e-b613c59b1ae3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    url_gif:
      'https://firebasestorage.googleapis.com/v0/b/appgym-b2902.appspot.com/o/abdomen%2FAbdominal%20bicicleta.gif?alt=media&token=4a760c47-679d-4326-bf7e-b613c59b1ae3',
  },
];

export default function Exercises() {
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
        <Text>Exercises</Text>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExerciseList data={item} />}
        />
      </View>
    </Container>
  );
}
