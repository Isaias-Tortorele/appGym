import { Button } from '~/components/Button';
import Container from '~/components/ui/Container';
import { Menu } from '~/components/Menu';
import LastWorkout from '~/components/LastWorkout';
import { ListRoutines } from '~/components/ListRoutines';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Menu />
      <Container>
        <Button
          className="mb-6 mt-10"
          titleButton="Montar meu treino"
          title="Criar rotina"
          onPress={() => router.push('/register')}
        />

        <LastWorkout titleButton="Perna" title="Último treino" />

        <View>
          <Text className="color-text-900 mt-5 text-lg font-bold">Minhas rotinas</Text>
          <ListRoutines />
          <ListRoutines />
        </View>
      </Container>
    </>
  );
}
