import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Container from '~/components/ui/Container';
import ExerciseList from '~/components/ExerciseList';
import CustomModal from '~/components/Modal';
import GoBack from '../components/GoBack';
import { Input } from '~/components/ui/Input';

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
  const [inputText, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <GoBack />
      <View className="flex pb-5 ">
        <Input placeholder="Busca exercícios" value={inputText} onChangeText={onChangeText}/>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExerciseList data={item} />}
      />
      <Button title="Open Modal" onPress={openModal} />
      <CustomModal visible={modalVisible} onClose={closeModal}>
        <Text>This is a custom modal!</Text>
      </CustomModal>
    </Container>
  );
}
