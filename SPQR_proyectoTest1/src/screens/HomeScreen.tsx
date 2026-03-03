import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View ,Text, StyleSheet, Button} from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabsNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettignsScreen from "./SettingsScreen";
import AboutYouScreen from "./AboutYouScreen";
import { i18n, useLanguage } from "../contexts/LanguageContext";
import CustomLenguagesBtn from "../components/CustomLenguagesBtn";

type Props = NativeStackScreenProps<TabsParamList, 'Home'>;
const Tab = createBottomTabNavigator<TabsParamList>();

export default function HomeScreen() {
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    // const {email} = route.params
    const {changeLanguage, language} = useLanguage();


    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Bienvenido a la pantalla de Inicio</Text>
                <Text>Idioma actual: {language}</Text>
                <Text>{i18n.t('welcome')}</Text>
                
            </View>

            <CustomLenguagesBtn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
