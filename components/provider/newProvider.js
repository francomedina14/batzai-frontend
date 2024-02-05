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
    marginBottom: 30,
    textAlign: 'center',
    backgroundColor: '#ED604C',
    color: 'white',
    width: Dimensions.get('screen').width,
    paddingTop: 200,
    paddingBottom: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
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
  okButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  okText: {
    color: 'white',
    fontSize: 20,
  }
});

function NewProvider({navigation}) {
  return(
  <View style={style.container}>
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
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('provider') }>
          <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default NewProvider;