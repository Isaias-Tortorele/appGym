import { Button } from '~/components/Button';
import Container from '~/components/ui/Container';
import { Menu } from '~/components/Menu';
import LastWorkout from '~/components/LastWorkout';
import { ListRoutines } from '~/components/ListRoutines';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <>
      <Menu />
      <Container>
        <Button className="mt-10 mb-6" titleButton="Montar meu treino" title="Criar rotina" />
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
