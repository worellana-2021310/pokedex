import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native';
import AccountNavigation from './AccountNavigation';
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='favorite' component={FavoritesNavigation} options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color, size }) => (
                    <Icon name='heart' color={color} size={size} />
                ),
            }} />

            <Tab.Screen name='pokedex' component={PokedexNavigation} options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball(),
            }} />
            <Tab.Screen name='account' component={AccountNavigation} options={{
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
