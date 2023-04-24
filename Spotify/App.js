import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Spotify</Text>
      <TextInput style={styles.text} placeholder='Email'/>
      <TextInput style={styles.text2} placeholder='Senha'/>
      <Text style={styles.senha}>Esqueceu sua senha?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tbutton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20vh',
    borderRadius: '10px',
  },
  name: {
    color: '#00FF00',
    fontSize: '35px',
    fontWeight: 'bold',
    textShadow: '3px 4px black',
  },
  text: {
    border: '1px solid black',
    backgroundColor: '#222',
    borderRadius: '8px',
    padding: '2px',
    margin: '10px',
    outline: 'none',
    color: '#fff',
    boxShadow: '2px 2px black',
  },
  text2: {
    border: '1px solid black',
    backgroundColor: '#222',
    padding: '2px',
    borderRadius: '8px',
    outline: 'none',
    color: '#fff',
    boxShadow: '2px 2px black',
  },
  senha: {
    marginLeft: 'auto',
    marginRight: '85px',
    color: '#fff',
    fontSize: '12px',
    padding: '5px'
  },
  button: {
    backgroundColor: 'green',
    width: '100px',
    borderRadius: '5px',
    margin: '10px'
  },
  tbutton: {
    alignItems: 'center',
    textAlign: 'center',
    padding: '4px',
    color: '#fff',
  }
});