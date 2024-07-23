import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '@/assets/styles/globalStyle';

export default function settings() {
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
