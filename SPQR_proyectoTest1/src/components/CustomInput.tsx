import { TextInput, View, Text,StyleSheet, TouchableOpacity, KeyboardTypeOptions } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";


export interface CustomInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    type?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'password';
    leftIconName?: string | any;
    isRequired? : boolean;
}

export default function CustomInput(
    props: CustomInputProps
) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordField, setIsPasswordField] = useState(props.type === 'password');

    const keyBoardType: KeyboardTypeOptions = 
        props.type === 'email-address' ? 'email-address' :
        props.type === 'numeric' ? 'numeric' :
        props.type === 'phone-pad' ? 'phone-pad' : 'default';

    const getError = ()  => {
        if(props.type === 'email-address' && !props.value?.includes('@'))
            return 'Correo invalido'
        if(props.type === 'password' && props.value  && props.value?.length < 6)
            return 'La contraseña debe ser más fuerte';
      
        return ''
    }

    const error = getError();

    return (
        <View style={styles.container}>
            <View style={styles.form_field}>  
                <MaterialIcons
                    style={{marginRight: 5}}
                    name={props.leftIconName}
                    size={20}
                    color={"#00000"}
                />

                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType={ keyBoardType}
                    secureTextEntry={isPasswordField && !isPasswordVisible}
                />
                

                { props.type === 'password' && <TouchableOpacity
                    onPress={() => {
                        setIsPasswordVisible(!isPasswordVisible);
                    }}
                >    
                    <Ionicons
                        style={{marginRight: 5}}
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={20}
                        color={"#00000"}
                    />
                </TouchableOpacity>}
            </View>
            { props.isRequired  && error
            && <Text style={styles.errorText}>{error}</Text>}
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
        backgroundColor: '#fff',
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
        fontSize: 16,
        color: '#000',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
    },
});