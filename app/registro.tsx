import { SafeAreaView, ScrollView, Text, TextInput, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons'
import { registroStyle } from '@/assets/styles/registroStyle'
import { router } from 'expo-router'

export default class registro extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={registroStyle.container}>
        <View style={registroStyle.backContainer}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={35}
          color="#00086a"
          onPress={() => router.push("login")}
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
          />
        </View>

        <Pressable
          style={registroStyle.btnSesion}
          onPress={() => router.push('login') }
        >
          <Text style={registroStyle.textBtn}>Registrar</Text>
        </Pressable>

        </SafeAreaView>
      </ScrollView>
    )
  }
}