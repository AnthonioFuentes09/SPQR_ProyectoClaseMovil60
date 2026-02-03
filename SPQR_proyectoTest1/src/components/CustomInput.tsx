import { TextInput, View, Text,StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export interface CustomInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    type?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'password';
    errorMessage?: string;
}

export default function CustomInput(
    props: CustomInputProps
) {
    return (
        <View style={styles.container}>
            <View style={styles.form_field}>  
                <MaterialIcons
                    style={{marginRight: 5}}
                    name={"email"}
                    size={20}
                    color={"#00000"}
                />

                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType={props.type === 'password' ? 'default' : props.type}
                    secureTextEntry={props.type === 'password'}
                />

                <Ionicons
                    style={{marginRight: 5}}
                    name={"eye-off"}
                    size={20}
                    color={"#00000"}
                />
            </View>
            <Text style={styles.errorText}>{"Campo requerido"}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'baseline',
        padding: 5,
    },
    form_field: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
    },
});