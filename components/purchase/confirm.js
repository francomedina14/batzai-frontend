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
  box: {
    borderWidth: 2,
    borderRadius: 25,
    padding: 45,
    marginVertical: 100,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  finishButton: {
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
  finishText: {
    color: 'white',
    fontSize: 20,
  },
});

function Confirm({navigation}) {
  return(
  <View style={style.container}>
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
      <View style={style.box}>
        <Text style={style.title}>CODIGO DO PAGAMIENTO RECOLHIDO</Text>
        <Text style={style.description}>#</Text>
        <Text style={style.title}>VALOR RECOLHIDO</Text>
        <Text style={style.description}>$</Text>
      </View>
      <TouchableOpacity style={style.finishButton} onPress= {() =>
            navigation.navigate('confirm') }>
          <Text style={style.finishText}>Finalizar</Text>
      </TouchableOpacity>
  </View>
  )}
export default Confirm;