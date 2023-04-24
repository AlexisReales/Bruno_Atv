import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Youtube</Text>
      <TextInput placeholder='Email' style={styles.input}/>
      <TextInput placeholder='Senha'style={styles.input}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tbutton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20vh',
    borderRadius: '10px',
  },
  logo: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: 'red',
    textShadow: '2px 2px #222'
  },
  input: {
    border: '1px solid #333',
    boxShadow: '2px 3px black',
    borderRadius: '5px',
    margin: '5px',
    padding: '2px',
    backgroundColor: '#777'
  },
  button: {
    backgroundColor: '#222',
    width: '80px',
    borderRadius: '5px',
    padding: '5px',
    margin: '10px',
  },
  tbutton: {
    color: '#fff',
    textAlign: 'center'
  }
});
