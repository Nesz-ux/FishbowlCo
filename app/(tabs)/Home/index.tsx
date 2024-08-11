import React, { useState } from 'react';
import { globalStyles } from '@/assets/styles/globalStyle';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function Tab() {
  const [fontsLoaded] = useFonts({
    'ConcertOne-Regular': require('../../../assets/fonts/ConcertOne-Regular.ttf'),
    'Quicksand-VariableFont_wght': require('../../../assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });
  const [expanded, setExpanded] = useState(false);
  const [heightAnim] = useState(new Animated.Value(0)); // Valor inicial de la animación de altura

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(heightAnim, {
      toValue: expanded ? 0 : 100, // Ajusta la altura de la expansión
      duration: 300,
      useNativeDriver: false, // Cambia a `true` para optimizar animaciones de transformaciones
    }).start();
  };

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={globalStyles.scrollViewContent}>
        <View style={globalStyles.contentContainer}>
          <Text style={globalStyles.TITULO1}>FISHBOWL CO</Text>
          <Text style={globalStyles.textlabel}>
            ¡Bienvenidos a Fishbowl! Tu compañero ideal para mantener tu pecera en perfecto estado.
          </Text>
          <TouchableOpacity style={globalStyles.margen} onPress={toggleExpand}>
            <Text style={globalStyles.textlabel2}>
              {expanded ? 'Cerrar información' : 'Descubre las especies'}
            </Text>
          </TouchableOpacity>
          <Animated.View style={[globalStyles.expandedContainer,{ height: heightAnim },]}>
            <Text style={globalStyles.additionalInfo}>
              Tipos de peces
            </Text>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
