import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons'
import Feed from '../screens/Feed';
import CalculadoraIMC from '../screens/CalculadoraIMC';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
            name="Feed"
            component={Feed}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel: 'Início'
            }}
            />

            <Tab.Screen
            name="Calculadora"
            component={CalculadoraIMC}
            options={{
                tabBarIcon: ({color, size}) => <AntDesign name="calculator" color={color} size={size} />,
                tabBarLabel: 'Calculadora IMC'
            }}
            />
        </Tab.Navigator>
    )
}