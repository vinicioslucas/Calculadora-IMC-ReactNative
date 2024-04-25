import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from "../components/Camera/Index"; // Importe seu componente de câmera
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            
            <Stack.Screen 
                name="Home"
                component={Camera} // Adicione seu componente de câmera aqui
                options={{ headerShown: false }} // Oculte o cabeçalho se necessário
            />
            <Stack.Screen 
                name="home"
                component={Profile}
            />
        </Stack.Navigator>
    )
}
