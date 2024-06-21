import '../../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CombinedProvider } from '~/contexts/CombinedProvider';
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CombinedProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </CombinedProvider>
    </GestureHandlerRootView>
  );
}
