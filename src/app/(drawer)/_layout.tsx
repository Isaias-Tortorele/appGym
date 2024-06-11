import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Início',
            title: 'Início',
          }}
        />

        <Drawer.Screen
          name="frequency"
          options={{
            drawerLabel: 'Frequência',
            title: 'Frequência',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}