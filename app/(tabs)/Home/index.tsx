import { globalStyles } from '@/assets/styles/globalStyle';
import { View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font';

export default function Tab() {

  const [fontsLoaded] = useFonts({
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'Quicksand-VariableFont_wght': require('../../../assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });
  return (
    <ScrollView>
      <SafeAreaView style={globalStyles.container}>
        <View>
          <Text style={globalStyles.TITULO1}>FISHBOLW CO</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}


