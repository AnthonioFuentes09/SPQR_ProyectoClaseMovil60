import { Button, View, StyleSheet, TouchableOpacity } from "react-native";
import { useLanguage } from "../contexts/LanguageContext";
import CustomButton from "./CustomButtom";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomLenguagesBtn() {
    const {changeLanguage, language} = useLanguage();
    
    return (
        <View style={style.floatBtn}>
            <View style={{flexDirection: 'column', gap: 10}}>
                <TouchableOpacity style={getStylesBtn('es').container} onPress={() => changeLanguage('es')}>
                    <MaterialIcons  name="language" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={getStylesBtn('en').container} onPress={() => changeLanguage('en')}>
                    <MaterialIcons name="language" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={getStylesBtn('de').container} onPress={() => changeLanguage('de')}>
                    <MaterialIcons name="language" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const getStylesBtn = (lenguage: string) => StyleSheet.create({
    wrapper: {
        padding: 5,
        width: "100%",
    },
    container: {
         padding: 10,
        // paddingHorizontal: 10,
        alignItems: 'center',
        width: "100%",
        backgroundColor: getBgColorByVariant(lenguage),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#f3f4f6",
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: "500"
    }
});

const getBgColorByVariant = (lenguage: string) => {
    switch(lenguage){
        case "es":
            return "#f6a83b";
        case "en":
            return "#1201c7";
        case "de":
            return "#98052e";
    }
}


const style = StyleSheet.create({
  floatBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    zIndex: 1,
  }
});