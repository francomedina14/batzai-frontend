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
    width: Dimensions.get('screen').width *0.3,
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

function Client({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.title}>¡Bem-vindo!</Text>
      <View>
        <Text style={style.label}>Codigo de cliente</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>Telefone</Text>
        <TextInput style={style.textInput}/>
      </View>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('purchases') }>
          <Text style={style.okText}>Aceder</Text>
      </TouchableOpacity>
  </View>
  )}
export default Client;