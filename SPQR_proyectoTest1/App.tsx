import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButtom';
import { useState } from 'react';


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

  return (
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
