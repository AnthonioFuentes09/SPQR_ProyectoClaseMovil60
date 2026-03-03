import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettignsScreen from "../screens/SettingsScreen";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type TabsParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    AboutYou: undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={
                    {
                        
                        headerShown: true,
                        headerTitle: "Inicio",
                        tabBarIcon: () => <MaterialIcons name={"home"} size={20} color={"#00000"} />,
                    }
                }
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={
                    {
                        headerShown: true,
                        headerTitle: "Perfil",
                        tabBarIcon: () => <MaterialIcons name={"person"} size={20} color={"#00000"} />,
                    }
                }
            />
            <Tab.Screen 
                name="Settings" 
                component={SettignsScreen} 
                options={
                    {
                        headerShown: true,
                        headerTitle: "Configuración",
                        tabBarIcon: () => <MaterialIcons name={"settings"} size={20} color={"#00000"} />,
                    }
                }
            />
           
        </Tab.Navigator>
    );
}
