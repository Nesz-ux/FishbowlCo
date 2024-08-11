import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Stack } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00086a",
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={35} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pecera/pecera"
        options={{
          headerShown: false,
          title: "Pecera",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={35} name="fishbowl" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Perfil/perfil"
        options={{
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={35} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
