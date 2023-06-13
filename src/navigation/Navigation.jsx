import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoriteScreen from '../screens/FavoriteScreen';
import PokedexScreen from '../screens/PokedexScreen';
import AccountScreen from '../screens/AccountScreen';

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='favorite' component={FavoriteScreen} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='heart' color={color} size={size} />
                ),
            }} />

            <Tab.Screen name='pokedex' component={PokedexScreen} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
            }} />
            <Tab.Screen name='account' component={AccountScreen} options={{
                tabBarLabel: "Account",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='user' color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>

    )
}

//Renderizando la pokebola del menú tab
const renderPokeball = () => {
    return (
        <Image
            style={{ width: 45, height: 45 }}
            source={require("../assets/pokeball.png")}
        />
    )
}
