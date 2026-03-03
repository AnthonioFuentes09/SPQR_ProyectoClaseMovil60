

import { View, Text,StyleSheet } from "react-native";


const AboutYouScreen = () => {

    return (
       <View style={styles.container}>
            <Text>Bienvenido a la pantalla Acerca de ti</Text>
        </View>
    );
}

export default AboutYouScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
