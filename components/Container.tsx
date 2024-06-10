import { View } from 'react-native';

export default function ({ children }: { children: React.ReactNode }) {
  return <View className={styles.container}>{children}</View>;
}

const styles = {
  container: 'flex mr-6 ml-6',
};
