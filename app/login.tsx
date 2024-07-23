import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable
} from "react-native";
import { loginStyle } from "../assets/styles/loginStyle";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function login() {
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
            placeholder="Usuario"
            placeholderTextColor="#00086a"
            style={loginStyle.input}
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
          />
        </View>

        <Pressable
          style={loginStyle.btnSesion}
          onPress={() => router.push('(tabs)/Home') }
        >
          <Text style={loginStyle.textBtn}>Iniciar Sesion</Text>
        </Pressable>

        <Pressable
          style={loginStyle.btnRegistro}
          onPress={() => router.push('registro') }
        >
          <Text style={loginStyle.textBtn}>Registrarse</Text>
        </Pressable>


      </SafeAreaView>
    </ScrollView>
  );
}
