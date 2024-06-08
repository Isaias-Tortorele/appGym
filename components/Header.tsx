import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import Container from './Container';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <>
      <View className=" rounded-b-3xl bg-[#0F172A] pb-5 pt-5">
      <StatusBar barStyle={'light-content'} backgroundColor={'#0F172A'} translucent={false} />
        <Container>
          <TouchableOpacity onPress={openDrawer}>
            <MaterialIcons name="menu" size={40} color={'white'} />
          </TouchableOpacity>
        </Container>
      </View>
    </>
  );
}
