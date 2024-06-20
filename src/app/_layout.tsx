import '../../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ExerciseProvider } from '~/contexts/ExerciseContext';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExerciseProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ExerciseProvider>
    </GestureHandlerRootView>
  );
}
