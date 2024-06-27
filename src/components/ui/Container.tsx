import { View } from 'react-native';

export function Container({ children }: { children: React.ReactNode }) {
  return <View className={styles.container}>{children}</View>;
}

const styles = {
  container: 'mr-6 ml-6',
};
