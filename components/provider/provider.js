import React, {useState} from 'react';
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
  title: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
    backgroundColor: '#ED604C',
    color: 'white',
    fontWeight: 'bold',
    width: Dimensions.get('screen').width,
    paddingTop: 200,
    paddingBottom: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  inputContainer: {
    margin: 40,
  },
  textInput: {
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.7,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 50,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
  },
  okButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  okText: {
    color: 'white',
    fontSize: 20,
  },
  newButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ED604C',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  newText: {
    color: '#ED604C',
    fontSize: 20,
  }
});

function Provider({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.title}>¡Ben-vindo!</Text>
      <View style={style.inputContainer}>
        <Text style={style.label}>Proveedor</Text>
        <TextInput style={style.textInput}/>
      </View>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('purchases') }>
          <Text style={style.okText}>Aceder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.newButton} onPress= {() =>
            navigation.navigate('newProvider') }>
          <Text style={style.newText}>Nuevo Proveedor</Text>
      </TouchableOpacity>
  </View>
  )}
export default Provider;