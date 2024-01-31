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
    borderRadius: 25,
    padding: 35,
    marginTop: 100,
    backgroundColor: '#FEE45C',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#464545',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#464545',
  },
  totalPrice: {
    fontSize: 15,
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 120,
    backgroundColor: '#FEE45C',
    paddingVertical: 10,
    paddingHorizontal: 50,
    color: '#464545',
  },
  finishButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.3,
    justifyContent: 'center',
    alignItems: 'center',
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
      <View style={style.box}>
        <Text style={style.title}>Codigo do pagamiento recolhido</Text>
        <Text style={style.description}>#000000</Text>
      </View>
      <Text style={style.totalPrice}>
        Valor recebido: $
      </Text>
      <TouchableOpacity style={style.finishButton} onPress= {() =>
            navigation.navigate('confirm') }>
          <Text style={style.finishText}>Finalizar</Text>
      </TouchableOpacity>
  </View>
  )}
export default Confirm;