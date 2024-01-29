import React from 'react';
import {
View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image
} from 'react-native';

const style= StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    margin: 100,
  },
  title: {
    fontSize: 20,
    margin: 60,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.8,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 13,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'gray',
    width: Dimensions.get('screen').width *0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  }
});

function NewProvider({navigation}) {
  return(
  <View style={style.container}>
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
      <Text style={style.title}>Nuevo proveedor</Text>
      <View>
        <Text style={style.label}>ESCREVA NOMBRE DO *</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA TELEFONO DO FORNECEDOR *</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA NUIT DO FORNECEDOR</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA MORADA DO FORNECEDOR</Text>
        <TextInput style={style.textInput}/>
      </View>
      <TouchableOpacity style={style.loginButton} onPress= {() =>
            navigation.navigate('provider') }>
          <Text style={style.loginText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default NewProvider;