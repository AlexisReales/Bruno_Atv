import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Insira seu gênero musical favorito</Text>
      <TextInput placeholder='insura o gênero aqui' placeholderTextColor="#fff" style={styles.input}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tbutton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '#00FF00',
    fontSize: 30,
    padding: 10,
    textShadow: '2px 2px black',
  },
  input:{
    border: '1px 1px solid',
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 10,
    boxShadow: '2px 3px black',
    margin: 10
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 8,
    width: '20%'
  },
  tbutton:{
    color: '#fff'
  }
});
