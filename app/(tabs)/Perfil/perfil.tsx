import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  Pressable,
} from "react-native";
import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { perfilStyle } from "../../../assets/styles/perfilStyle";
import { router } from "expo-router";
import {API_BASE_URL} from "@/config";


export default function Perfil() {
  const [user, setUser] = useState(null); // Inicializa como null para manejar el estado de carga
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga

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
        setLoading(false); // Marcar como cargado
      } catch (error) {
        Alert.alert("Error al obtener el perfil");
        console.log(error);
        setLoading(false); // Marcar como cargado incluso si hubo error
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Token antes de Cerrar', token)
      
      await AsyncStorage.removeItem('token');
      await AsyncStorage.clear();
      setUser(null); // Limpiar el estado del usuario
      router.replace('login'); // Redirigir a la pantalla de login
      console.log('Token Eliminado')
    } catch (error) {
      console.error("Error al limpiar el cache:", error);
      console.log(error);
    }
  };

  if (loading) {
    return <Text>Cargando...</Text>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  return (
    <ScrollView>
      <SafeAreaView style={perfilStyle.container}>
        {user ? (
          <>
            <Text style={perfilStyle.titulo}>Perfil</Text>

            <View style={perfilStyle.contenido}>
              <Text style={perfilStyle.subtitulo}>Información básica</Text>

              <View style={perfilStyle.inputContainer}>
                <EvilIcons
                  name="user"
                  size={45}
                  color="#00086a"
                  style={perfilStyle.icon}
                />
                <View style={perfilStyle.datos}>
                  <Text style={perfilStyle.label}>Nombre de Usuario</Text>
                  <Text style={perfilStyle.textlabel}>{user.username || "Nombre de usuario no disponible"}</Text>
                </View>
              </View>

              <View style={perfilStyle.inputContainer}>
                <Fontisto
                  name="email"
                  size={30}
                  color="#00086a"
                  style={perfilStyle.icon}
                />
                <View style={perfilStyle.datos}>
                  <Text style={perfilStyle.label}>Correo Electronico</Text>
                  <Text style={perfilStyle.textlabel}>{user.email || "Correo electrónico no disponible"}</Text>
                </View>
              </View>

              <View>
                <Pressable
                  style={perfilStyle.btnEditar}
                  onPress={() => router.navigate("editarPerfil")}
                >
                  <Text style={perfilStyle.textBtn}>Editar Perfil</Text>
                </Pressable>

                <Pressable
                  style={perfilStyle.btnCerrar}
                  onPress={handleLogout}
                >
                  <Text style={perfilStyle.textBtn}>Cerrar Sesion</Text>
                </Pressable>
              </View>
            </View>
          </>
        ) : (
          <Text>No se pudo obtener el perfil</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}