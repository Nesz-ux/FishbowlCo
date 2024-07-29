import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

const esp32Ip = 'http://192.168.100.172'; // Reemplaza con la IP del ESP32

export default function Pecera() {
  const handleLEDOn = async () => {
    try {
      await axios.get(`${esp32Ip}/led/on`);
      alert('LED encendido');
    } catch (error) {
      console.error(error);
      alert('Error encendiendo el LED');
    }
  };

  const handleLEDOff = async () => {
    try {
      await axios.get(`${esp32Ip}/led/off`);
      alert('LED apagado');
    } catch (error) {
      console.error(error);
      alert('Error apagando el LED');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Control del ESP32</Text>
      <Button title="Encender LED" onPress={handleLEDOn} />
      <Button title="Apagar LED" onPress={handleLEDOff} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

