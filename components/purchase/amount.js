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
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 30,
  },
  textInput: {
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.7,
    borderColor: 'gray',
    marginBottom: 50,
    padding: 35,
    textAlign: 'center',
    fontSize: 35,
    margin: 15,
  },
  totalPrice: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 25,
    padding: 15,
    marginTop: 40,
    textAlign: 'center',
    lineHeight: 40,
    width: Dimensions.get('screen').width * 0.7
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
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
      <Text style={style.title}>ESCREBA VALOR A PAGAR</Text>
      <TextInput style={style.textInput}/>
      <Text style={style.totalPrice}>
        DIVIDAS A PAGAR {"\n"} $
      </Text>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('confirm') }>
          <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default Amount;