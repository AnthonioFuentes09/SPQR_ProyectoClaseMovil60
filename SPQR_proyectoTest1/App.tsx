import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButtom';
import { useState } from 'react';
import CustomInput from './src/components/CustomInput';


export default function App() {
  const [newTitle, setNewTitle] = useState("Initial Title");
  
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
        <CustomInput 
            placeholder={"Correo Electronico"}
            type={"email-address"} />
        <CustomInput
            placeholder={"Contraseña"}
            type={"password"} />
       

        <StatusBar style="auto" />
        <View style={styles.buttonsWrapper}>
          <CustomButton 
              title={'Login'} 
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
  },
  card: {
    width: "80%",
    height: "80%",
    borderRadius:15,
    backgroundColor: '#f3f4f6',
  },
  buttonsWrapper: {
    backgroundColor: "#e5e7eb",
    marginTop: 15,
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
