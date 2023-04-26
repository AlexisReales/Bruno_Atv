import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Informe seu cantor favorito</Text>
      <TextInput style={styles.input} placeholder='insira o nome aqui' placeholderTextColor="#fff"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tbutton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alingItens: 'center',
    textAlign: 'center',
    backgroundColor: '#333',
  },
  text:{
    color: '#00FF00',
    fontSize: 30,
    textShadow: '2px 3px black',
    margin: 15
  },
  input: {
    border: '1px solid black',
    width: '50%',
    borderRadius: 8,
    backgroundColor: '#222',
    boxShadow: '3px 2px black',
    outline: 'none',
    color: '#fff',
    padding: 10,
    position: 'relative',
    left: 85
  },
  button: {
    margin: 15,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 5,
    width: '20%',
    position: 'relative',
    left: 120
  },
  tbutton:{
    color: '#fff'
  }
});
