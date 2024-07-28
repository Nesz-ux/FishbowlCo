import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Stack } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ tabBarActiveTintColor: "blue" }
      
    }
      
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          headerShown:false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pecera/pecera"
        options={{
          headerShown:false,
          title: "Pecera",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-circle" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Perfil/perfil"
        options={{
          headerShown:false,
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>

    
  );
}
