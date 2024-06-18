import Button from '~/components/Button';
import Container from '~/components/ui/Container';
import Menu from '~/components/Menu';
import LastWorkout from '~/components/LastWorkout';
import ListRoutines from '~/components/ListRoutines';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Menu />
      <Container>
        <View className="pb-6 pt-10">
          <Button
            titleButton="Montar meu treino"
            title="Criar rotina"
            onPress={() => router.push('/register')}
          />
        </View>

        <LastWorkout titleButton="Perna" title="Último treino" />

        <View>
          <Text className="mt-5 text-lg font-bold color-text-900">Minhas rotinas</Text>
          <ListRoutines />
          <ListRoutines />
        </View>
      </Container>
    </>
  );
}
