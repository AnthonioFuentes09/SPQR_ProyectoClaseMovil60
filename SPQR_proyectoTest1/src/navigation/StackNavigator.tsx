
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import TabsNavigator from './TabsNavigator';
import { useLanguage } from '../contexts/LanguageContext';

export type RootStackParamList = {
    Login: undefined;
    // Home: {email: string};
    Tab: {email: string};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    
    return (
        <Stack.Navigator initialRouteName={"Login"} >
            <Stack.Screen name= {"Login"} component={LoginScreen} 
            options={{
                title: "Inicio de sesión",
            }}/>
            {/* <Stack.Screen name= {"Home"} component={HomeScreen} /> */}
            <Stack.Screen 
                name= {"Tab"} 
                component={TabsNavigator}
                // options={{
                //     headerShown: false,
                // }} 
            />
        </Stack.Navigator>
    );
}