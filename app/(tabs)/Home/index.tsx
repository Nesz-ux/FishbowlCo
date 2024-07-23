import { globalStyles } from '@/assets/styles/globalStyle';
import { View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';


export default function Tab() {
  return (
    <ScrollView>
      <SafeAreaView style={globalStyles.container}>
        <View style={globalStyles.titulo}>
          <Text>FISHBOLW CO</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
