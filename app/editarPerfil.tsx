import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  Pressable,
  TextInput,
} from "react-native";
import { AntDesign, EvilIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { editarPerfilStyle } from "@/assets/styles/editarPerfilStyle";
import {API_BASE_URL} from "@/config";

export default function editarPerfil() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(`${API_BASE_URL}/profile`, {
          headers: {
            Authorization: token,
          },
        });
        setUser(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        console.log(token)
      } catch (error) {
        Alert.alert("Error al obtener el perfil",
          "Error de conexión"
        );
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.put(
        `${API_BASE_URL}/profile`,
        { username, email, password },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(token);
      setUser(response.data);
      Alert.alert("Perfil Actualizado con exito",
        "Tu información ha sido actualizada correctamente"
      );
      router.replace("(tabs)/Home");
    } catch (error) {
      Alert.alert("Error al Actualizar Perfil",
        "Hubo un problema al actualizar tu información. Por favor, intenta nuevamente"
      );
      console.log(error);
    }
  };
  

  return (
    <ScrollView>
      <SafeAreaView style={editarPerfilStyle.container}>
        <View style={editarPerfilStyle.backContainer}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={35}
            color="#00086a"
            onPress={() => router.replace("(tabs)/Home")}
          />
        </View>

        <Text style={editarPerfilStyle.titulo}>Editar Perfil</Text>

        <View style={editarPerfilStyle.inputContainer}>
          <EvilIcons
            name="user"
            size={45}
            color="#00086a"
            style={editarPerfilStyle.icon}
          />
          <View style={editarPerfilStyle.datosContenedor}>
            <Text style={editarPerfilStyle.label}>Nombre de Usuario</Text>
            <TextInput
              placeholderTextColor="#00086a"
              style={editarPerfilStyle.input}
              value={username}
              onChangeText={setUsername}
            />
          </View>
        </View>

        <View style={editarPerfilStyle.inputContainer}>
          <Fontisto
            name="email"
            size={30}
            color="#00086a"
            style={editarPerfilStyle.icon}
          />
          <View style={editarPerfilStyle.datosContenedor}>
            <Text style={editarPerfilStyle.label}>Correo Electronico</Text>
          <TextInput
            placeholderTextColor="#00086a"
            style={editarPerfilStyle.input}
            value={email}
            onChangeText={setEmail}
          />
          </View>
        </View>

        <View style={editarPerfilStyle.inputContainer}>
          <AntDesign
            name="lock"
            size={35}
            color="#00086a"
            style={editarPerfilStyle.icon}
          />
          <View style={editarPerfilStyle.datosContenedor}>
          <Text style={editarPerfilStyle.label}>Contraseña</Text>
          <TextInput
            placeholderTextColor="#00086a"
            style={editarPerfilStyle.input}
            onChangeText={setPassword}
            secureTextEntry
          />
          </View>
        </View>

        <Pressable
          style={editarPerfilStyle.btnActualizar}
          onPress={handleUpdateProfile}
        >
          <Text style={editarPerfilStyle.textBtn}>Actualizar</Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
}
