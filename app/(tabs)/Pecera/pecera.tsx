import React from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import axios from "axios";
import { esp32Ip } from "../../../config.js";
import { peceraStyle } from "../../../assets/styles/peceraStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Pecera() {
  const handleLEDOn = async () => {
    try {
      await axios.get(`${esp32Ip}/led/on`);
      alert("LED encendido");
    } catch (error) {
      console.error(error);
      alert("Error encendiendo el LED");
    }
  };

  const handleLEDOff = async () => {
    try {
      await axios.get(`${esp32Ip}/led/off`);
      alert("LED apagado");
    } catch (error) {
      console.error(error);
      alert("Error apagando el LED");
    }
  };

  return (
    <View style={peceraStyle.container}>
      <View style={peceraStyle.titlecontainer}>
        <Text style={peceraStyle.titulo}>Mi Pecera </Text>
        <MaterialCommunityIcons 
          name="fishbowl-outline" 
          size={35} 
          color="#00086a"
        />
      </View>

      <View style={peceraStyle.buttonContainer}>
        <Image
          source={require("../../../assets/images/comida-para-pez.png")}
          style={peceraStyle.image}
        />
        <Pressable 
          style={peceraStyle.button}
          onPress={handleLEDOn}
        >
        <Text style={peceraStyle.textButton}>Alimentar</Text>
        </Pressable>
      </View>
      <Button title="Encender LED" onPress={handleLEDOn} />
      <Button title="Apagar LED" onPress={handleLEDOff} />
    </View>
  );
}

//icon: <a href="https://www.flaticon.es/iconos-gratis/comida-para-pez" title="comida-para-pez iconos">Comida-para-pez iconos creados por Freepik - Flaticon</a>
