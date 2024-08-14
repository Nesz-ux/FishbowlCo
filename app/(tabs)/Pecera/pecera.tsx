import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { esp32Ip, API_BASE_URL } from "../../../config.js";
import { peceraStyle } from "../../../assets/styles/peceraStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Pecera() {
  const [isLEDon, setIsLEDon] = useState(false);
  const [servoOn, setServoOn] = useState(false);
  const [bubblesOn, setBubblesOn] = useState(false); 
  const [temperature, setTemperature] = useState<number | null>(null);

  const toggleFood = async () => {
    try {
      await axios.get(`${esp32Ip}/comida`);
      setServoOn(!servoOn); // Cambiar el estado
    } catch (error) {
      console.error(error);
      alert("Error activando el servo para alimentar");
    }
  };

  const toggleLED = async () => {
    try {
      if (isLEDon) {
        await axios.get(`${esp32Ip}/led/off`);
      } else {
        await axios.get(`${esp32Ip}/led/on`);
      }
      setIsLEDon(!isLEDon); // Cambiar el estado
    } catch (error) {
      console.error(error);
      alert("Error cambiando el estado del LED");
    }
  };

  const toggleBubbles = async () => {
    try {
      if (bubblesOn) {
        await axios.get(`${esp32Ip}/relay/off`); // Cambiar la URL a la correcta para el relé
      } else {
        await axios.get(`${esp32Ip}/relay/on`); // Cambiar la URL a la correcta para el relé
      }
      setBubblesOn(!bubblesOn); // Cambiar el estado
    } catch (error) {
      console.error(error);
      alert("Error cambiando el estado de las burbujas");
    }
  };

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/ultimo-valor`);
        const roundedTemperature = Math.floor(response.data.temperatura);
        setTemperature(roundedTemperature);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    fetchTemperature(); // Llamar a la función para obtener la temperatura al cargar el componente
  }, []);

  return (
    <View style={peceraStyle.container}>
      <View style={peceraStyle.titlecontainer}>
        <Text style={peceraStyle.titulo}>My Fishbowl</Text>
        <MaterialCommunityIcons
          name="fishbowl-outline"
          size={35}
          color="#00086a"
        />
      </View>

      <View style={peceraStyle.cardsContainer}>
        <TouchableOpacity style={peceraStyle.card} onPress={toggleFood}>
          <Image
            source={
              servoOn
                ? require("../../../assets/images/comida-off.png") // Imagen cuando el servo está activado
                : require("../../../assets/images/comida-on.png") // Imagen cuando el servo está desactivado
            }
            style={peceraStyle.image}
          />
          <Text style={peceraStyle.cardText}>
            {servoOn ? "Detener" : "Alimentar"} {/* Mostrar estado */}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={peceraStyle.card} onPress={toggleLED}>
          <Image
            source={
              isLEDon
                ? require("../../../assets/images/luz-on.png") // Imagen cuando el LED está encendido
                : require("../../../assets/images/luz-off.png") // Imagen cuando el LED está apagado
            }
            style={peceraStyle.image}
          />
          <Text style={peceraStyle.cardText}>
            {isLEDon ? "Apagar" : "Encender"} {/* Mostrar estado */}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={peceraStyle.cardsContainer}>

      <TouchableOpacity style={peceraStyle.card}>
          <Text style={peceraStyle.temperatura}>
            {temperature !== null ? `${temperature}°` : "Cargando..."}
          </Text>
          <Text style={peceraStyle.cardText}>
            Temperatura °C
          </Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={peceraStyle.card} onPress={toggleBubbles}>
          <Image
            source={
              bubblesOn
                ? require("../../../assets/images/burbujas-on.png") // Imagen cuando el relé está encendido
                : require("../../../assets/images/burbujas-off.png") // Imagen cuando el relé está apagado
            }
            style={peceraStyle.image}
          />
          <Text style={peceraStyle.cardText}>
            {bubblesOn ? "Apagar" : "Encender"} {/* Mostrar estado */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
