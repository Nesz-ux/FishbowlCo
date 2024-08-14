import { SafeAreaView, ScrollView, Text, TextInput, View, Pressable, Alert } from 'react-native'
import React, { Component, useState } from 'react'
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons'
import { registroStyle } from '@/assets/styles/registroStyle'
import { router } from 'expo-router'
import axios from 'axios'
import {API_BASE_URL} from '../config.js' 


export default function registro (){
 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleRegister = async () => {
      if (!validateEmail(email)) {
        Alert.alert('Error', 'Correo electrónico inválido');
        return;
      }
  
      try {
        const response = await axios.post(`${API_BASE_URL}/register`, { username, email, password });
        Alert.alert('Registro Exitoso', response.data);
        router.push("/login");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Error de Axios, puedes acceder a error.response.data
          if (error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const errorMessages = errors.map((err: any) => err.msg).join('\n');
            Alert.alert('Error', errorMessages);
          } else {
            Alert.alert('Error', 'Ocurrió un error al registrar el usuario.');
          }
        } else {
          // Otro tipo de error
          Alert.alert('Error', 'Ocurrió un error inesperado.');
        }
      }
    };

    return (
      <ScrollView>
        <SafeAreaView style={registroStyle.container}>
        <View style={registroStyle.backContainer}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={35}
          color="#00086a"
          onPress={() => router.push("/login")}
        />
      </View>
          <Text style={registroStyle.titulo}>Registro</Text>

          <View style={registroStyle.inputContainer}>
          <AntDesign
            name="user"
            size={35}
            color="#00086a"
            style={registroStyle.icon}
          />
          <TextInput
            placeholder="Nombre de Usuario"
            placeholderTextColor="#00086a"
            style={registroStyle.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={registroStyle.inputContainer}>
          <Fontisto
            name="email"
            size={35}
            color="#00086a"
            style={registroStyle.icon}
          />
          <TextInput
            placeholder="Correo Electronico"
            placeholderTextColor="#00086a"
            style={registroStyle.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={registroStyle.inputContainer}>
          <AntDesign
            name="lock"
            size={35}
            color="#00086a"
            style={registroStyle.icon}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#00086a"
            style={registroStyle.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <Pressable
          style={registroStyle.btnSesion}
          onPress={handleRegister}
        >
          <Text style={registroStyle.textBtn}>Registrar</Text>
        </Pressable>

        </SafeAreaView>
      </ScrollView>
    )
  
}