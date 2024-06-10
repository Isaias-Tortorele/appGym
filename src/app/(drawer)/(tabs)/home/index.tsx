import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import LastWorkout from 'components/LastWorkout';
import { View } from 'react-native';

export default function Page() {
  return (
    <>
      <Header />
      <Container>
        <Button className="mt-10" titleButton="Montar meu treino" title="Criar rotina" />
        <LastWorkout titleButton="Perna" title="Último treino" />
      </Container>
    </>
  );
}
