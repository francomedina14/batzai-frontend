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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ED604C',
    marginVertical: 40,
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

function NewClient({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.title}>Adicionar Cliente</Text>
      <View>
        <Text style={style.label}>ESCREVA O NOME DO NEGOCIO</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA O NOME DO MERCEARIA *</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA O TELEFONE DO CLIENTE *</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA UM TELEFONE ALTERNATIVO</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA A LOCALIZACAO DO CLIENTE *</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>ESCREVA O NUIT DO CLIENTE</Text>
        <TextInput style={style.textInput}/>
      </View>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('menu') }>
          <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default NewClient;