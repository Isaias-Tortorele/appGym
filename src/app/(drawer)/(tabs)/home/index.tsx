import { Button } from '~/components/Button';
import { Container } from '~/components/ui/Container';
import Menu from '~/components/Menu';
import LastWorkout from '~/components/LastWorkout';
import ListRoutines from '~/components/ListRoutines';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Menu />
      <Container>
        <View className="pb-5 pt-10">
          <Button
            titleButton="Montar ficha de treino"
            title="Criar rotina"
            onPress={() => router.push('/exercises')}
          />
        </View>

        <LastWorkout titleButton="Perna" title="Último treino" />

        <View>
          <Text className="mt-5 text-lg font-bold color-text-900">Minhas rotinas</Text>
          <ListRoutines />
        </View>
      </Container>
    </>
  );
}
