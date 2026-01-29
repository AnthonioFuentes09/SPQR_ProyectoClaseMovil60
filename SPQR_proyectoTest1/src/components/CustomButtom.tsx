
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CustomButtonProps {
    title: string;
    color: ButtonColor;
    onClick: () => void;
}

type ButtonColor = 'blue' | 'red' | 'green' | 'orange';

export default function CustomButton({title, color, onClick} : CustomButtonProps){
    
    return(
        <View>
            <TouchableOpacity 
                onPress={onClick} 
                style={[styles.button, { backgroundColor: color }]}>
            <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    
};


const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5
  },
  text: {
    color: "white",
    fontSize: 20
  }
});