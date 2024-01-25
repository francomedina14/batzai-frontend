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
    width: Dimensions.get('screen').width *0.3,
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
  }
});

function Client({navigation}) {
  return(
  <View style={style.container}>
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
      <Image source={require('../../assets/logo.png')} style={style.image}/>
      <View>
        <Text style={style.label}>Codigo de cliente</Text>
        <TextInput style={style.textInput}/>
        <Text style={style.label}>Telefone</Text>
        <TextInput style={style.textInput}/>
      </View>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('purchases') }>
          <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default Client;