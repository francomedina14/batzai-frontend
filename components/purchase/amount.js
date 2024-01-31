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
  title: {
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 100,
    color: '#464545',
  },
  textInput: {
    borderWidth: 2,
    width: Dimensions.get('screen').width * 0.4,
    borderColor: '#FEE45C',
    color: '#ED604C',
    marginBottom: 50,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  totalPrice: {
    fontSize: 15,
    borderRadius: 25,
    marginVertical: 40,
    backgroundColor: '#FEE45C',
    paddingVertical: 10,
    paddingHorizontal: 50,
    color: '#464545',
  },
  okButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  okText: {
    color: 'white',
    fontSize: 20,
  },
});

function Amount({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.title}>Escreba valor a pagar</Text>
      <TextInput style={style.textInput}/>
      <Text style={style.totalPrice}>
        Divida restante $
      </Text>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('confirm') }>
          <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default Amount;