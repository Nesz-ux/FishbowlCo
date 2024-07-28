// app/_layout.js
import { Tabs, Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name='(tabs)'/>
        <Stack.Screen name='login'/>
        <Stack.Screen name='registro'/>
        

    </Stack>
  );
}
