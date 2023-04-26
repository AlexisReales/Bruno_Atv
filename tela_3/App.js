import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Informe sua música favorita</Text>
      <TextInput  placeholder='insira o nome aqui' placeholderTextColor="#fff"  style={styles.input}/>
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
    backgroundColor: '#333',
  },
  text: {
    color: '#00FF00',
    fontSize: 30,
    padding: 10,
    textShadow: '2px 3px black',
  },
  input: {
    width: '50%',
    backgroundColor: '#222',
    boxShadow: '4px 3px black',
    borderRadius: 8,
    padding: 10,
    outline: 'none',
    margin: 8,
    color: '#fff'
  },
  button:{
    padding: 5,
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    width: '20%'
  },
  tbutton: {
    color: '#fff'
  }
});