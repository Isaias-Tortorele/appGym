import { View, TouchableOpacity } from 'react-native';

import { useNavigation, DrawerActions } from '@react-navigation/native';

import Container from '../ui/Container';
import { Ionicons } from '@expo/vector-icons';

export function Menu() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <>
      <View className=" rounded-b-3xl bg-[#0F172A] pb-5 pt-5">
        <Container>
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="menu" size={40} color={'white'} />
          </TouchableOpacity>
        </Container>
      </View>
    </>
  );
}
