import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert
} from "react-native";
import {API_BASE_URL} from '../config.js';
import { loginStyle } from "../assets/styles/loginStyle";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams,useRouter } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try{
      const response = await axios.post(`${API_BASE_URL}/login`, {email, password});
      const token = response.data.token;
      await AsyncStorage.setItem('token', token)
      router.push("/(tabs)/Home");
    }catch(error){
      Alert.alert('Error al Iniciar sesion',
        'Correo o contraseña incorrectos. Por favor, intenta nuevamente',
      )
      console.log(error)
    }
  };


  return (
    <ScrollView>
      <SafeAreaView style={loginStyle.container}>
        <Text style={loginStyle.titulo}>FishBowl Co</Text>

        <View style={loginStyle.logo}>
          <Image source={require("../assets/images/logoPecera.png")} />
        </View>

        <View style={loginStyle.inputContainer}>
          <AntDesign
            name="user"
            size={35}
            color="#00086a"
            style={loginStyle.icon}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#00086a"
            style={loginStyle.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={loginStyle.inputContainer}>
          <AntDesign
            name="lock"
            size={35}
            color="#00086a"
            style={loginStyle.icon}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#00086a"
            style={loginStyle.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable
          style={loginStyle.btnSesion}
          onPress={ handleLogin }
          //onPress={() => router.push('(tabs)/Home')}
        >
          <Text style={loginStyle.textBtn}>Iniciar Sesion</Text>
        </Pressable>

        <Pressable
          style={loginStyle.btnRegistro}
          onPress={() => router.push('/registro') }
        >
          <Text style={loginStyle.textBtn}>Registrarse</Text>
        </Pressable>


      </SafeAreaView>
    </ScrollView>
  );
}
