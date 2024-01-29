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
    backgroundColor: 'gray',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
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
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  newText: {
    color: 'black',
    fontSize: 20,
  }
});

function Provider({navigation}) {
  return(
  <View style={style.container}>
      <Image source={require('../../assets/logo.png')} style={style.image}/>
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