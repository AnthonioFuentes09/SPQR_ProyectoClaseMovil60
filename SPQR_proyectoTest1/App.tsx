import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButtom';
import { useState } from 'react';
import CustomInput from './src/components/CustomInput';


export default function App() {
  const [newTitle, setNewTitle] = useState("Initial Title");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
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
    console.log("prueba login desde app");
    alert("Alerta login desde app");
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
        <Text>Inicio de Sesion</Text>
        <View style={styles.inputWrapper}>

          <CustomInput 
              placeholder={"Correo Electronico"}
              onChangeText={setEmail}
              isRequired = {true}
              type={"email-address"}
              leftIconName={"mail-outline"} />
          <CustomInput
              placeholder={"Contraseña"}
              onChangeText={setPassword}
              isRequired={true}
              type={"password"}
              leftIconName={"lock-outline"} />
        </View>
       

        <StatusBar style="auto" />
        <View style={styles.buttonsWrapper}>
          <CustomButton 
              title={'Ingresar'} 
              onClick={handleOnLogin} />
          <CustomButton 
              title={'Salir'}
              onClick={handleOnLogout}
              variant={'secondary'} />
          <CustomButton 
              title={'Restaurar Contraseña'}
              onClick={handleOnRestorePassword}
              variant={'terciary'} />
        </View>
      </View>
    </View>
  );
}

/*
  <View style={styles.container}>
      <Text>Open up App.tsx to start workin2g on your app!</Text>
      <StatusBar style="auto" />
      <View style={buttonRowStyle.buttonRow}>
        <CustomButton  title={"Click me!"} color="blue" onClick={ handleOnClick} />
        <CustomButton  title={"unClick me!"} color="red" onClick={ unHandleOnClick} />
        <CustomButton  title={"Reset me!"} color="orange" onClick={ resetHandleOnClick} />
      </View>
      <Text>{newTitle}</Text>
    </View>
*/

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
    borderRadius:50,
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
    marginTop: 15,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
