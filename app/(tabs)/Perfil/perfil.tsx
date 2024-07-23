import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { globalStyles } from '@/assets/styles/globalStyle';
import { EvilIcons } from '@expo/vector-icons';
export default function perfil() {
  return (
    <ScrollView>
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.titulo}>Perfil</Text>
        <View style={globalStyles.inputContainer}>
          <EvilIcons
            name='user'
            size={35}
            color="#00086a"
            style={globalStyles.icon}
          />
          <Text style={globalStyles.textlabel}>Nombre</Text>
          
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
