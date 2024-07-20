import { View, Text, StyleSheet } from 'react-native';

export default function perfil() {
  return (
    <View style={styles.container}>
      <Text>Tab [Perfil]</Text>
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
