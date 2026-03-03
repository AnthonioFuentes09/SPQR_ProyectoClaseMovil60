import { useState } from "react";
import { Alert, AlertType, Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtom";
import { useAuth } from "../contexts/AuthContext";
import { i18n, useLanguage } from "../contexts/LanguageContext";
import CustomLenguagesBtn from "../components/CustomLenguagesBtn";


export default function LoginScreen({navigation}: any) {
  const [newTitle, setNewTitle] = useState("Initial Title");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [baseName, setBaseName] = useState("");

  const {login, isAllowed} = useAuth();
  const alertType: AlertType = 'default' ;
  
  
  const handleOnClick = () => {
    setNewTitle("Button clicked!");
    alert("Button was clicked!");
  }

  const unHandleOnClick = () => {
    setNewTitle("Button unclicked!");
    alert("Button was unclicked!");
  }

  const resetHandleOnClick = () => {
    setNewTitle("Initial Title");
    alert("Button was reset!");
  }

  const handleOnLogin = () => {
    // navigation.navigate("Home", {email: email});

    try {
      const allowed = login(email,password);
      
      if (allowed) {
        navigation.navigate("Tab", {screen: "Home"})
      }
      else{
        Alert.alert(
          "Inicio de Sesion"
          ,"Credenciales incorrectas, favor ingresar un correo valido"
          ,[
            {
              text: "Aceptar",
              style: 'default' 
            },
            {
              text: "chingaTumare",
              style: 'destructive'
            }
          ]
        )
      }

    } catch (error: any) {
      Alert.alert("Inicio de Sesion",error.message,
        [
          {
            text: "Aceptar",
            style: 'default' 
          }
        ]
      )
    }


   
  }
  
  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

  const handleOnRestorePassword = () => {
    alert("Alerta restore password desde app");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Text>Inicio de Sesion</Text> */}
        <View style={styles.inputWrapper}>

          <CustomInput 
              placeholder={i18n.t('inptEmail')}
              onChangeText={setEmail}
              isRequired = {true}
              type={"email-address"}
              value={email}
              leftIconName={"mail-outline"} />
          <CustomInput
              placeholder={i18n.t('inptPassword')}
              onChangeText={setPassword}
              isRequired={true}
              type={"password"}
              value={password}
              leftIconName={"lock-outline"} />
          {/* <CustomInput
              placeholder={"Nombre"}
              onChangeText={setBaseName}
              isRequired={false}
              type={"text"}
              value={baseName}
              leftIconName={"book"} /> */}
        </View>
       

        <StatusBar style="auto" />
        <View style={styles.buttonsWrapper}>
          <CustomButton 
              title={i18n.t('btnSignIn')} 
              onClick={handleOnLogin} />
          <CustomButton 
              title={i18n.t('btnExit')}
              onClick={handleOnLogout}
              variant={'secondary'} />
          <CustomButton 
              title={i18n.t('btnRestorePassword')}
              onClick={handleOnRestorePassword}
              variant={'terciary'} />
        </View>
      </View>
      <CustomLenguagesBtn />
    </View>
  );
}



const buttonRowStyle = StyleSheet.create({
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    gap: 10
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b70808',
  },
  card: {
    width: "85%",
    height: "80%",
    borderRadius:30,
    backgroundColor: '#ffffff',
  },
  inputWrapper: {
    marginTop: 20,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsWrapper: {
    marginTop: 75,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
