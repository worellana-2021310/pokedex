import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createStackNavigator();

export default function FavoritesNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="favorites"
                component={FavoriteScreen}
                options={{ title: 'Favoritos' }}
            />
        </Stack.Navigator>
    )
}