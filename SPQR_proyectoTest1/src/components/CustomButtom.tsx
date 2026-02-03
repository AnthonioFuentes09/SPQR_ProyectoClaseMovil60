
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonColor = 'blue' | 'red' | 'green' | 'orange';

type ButtonVariant = 'primary' | 'secondary' | 'terciary';

interface CustomButtonProps {
    title: string;
    // color: ButtonColor;
    onClick: () => void;
    variant?: ButtonVariant;
}



export default function CustomButton({title, onClick, variant = "primary"} : CustomButtonProps){
    const styles = getStyles(variant);
    return(
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
                <Text
                style={styles.text}>
                    {title}
                </Text>
        </TouchableOpacity>  
    );

    
};


const getStyles = (variant: ButtonVariant) => 
    StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center',
        width: "80%",
        backgroundColor: getBgColorByVariant(variant),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#f3f4f6",
    },
    text: {
        color: getColorByVariant(variant),
        fontSize: 18,
        fontWeight: "500"
    }
});

const getBgColorByVariant = (variant: ButtonVariant) => {
    switch(variant){
        case "primary":
            return "#2e4566";
        case "secondary":
            return "#d1d5db";
        case "terciary":
            return "#f3f4f6";
    }
}


const getColorByVariant = (variant: ButtonVariant) => {
    switch(variant){
        case "primary":
            return "white";
        case "secondary":
            return "black";
        case "terciary":
            return "black";
    }
}