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
    color: '#ED604C',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 40,
  },
  qrContainer: {
    backgroundColor: '#FEE45C',
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200,
  },
  backButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 70,
  },
  backText: {
    color: 'white',
    fontSize: 20,
  }
});

function PurchaseQr({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.title}>¡Valor recolhido!</Text>
      <View style={style.qrContainer}>
        <Image source={require('../../assets/qr.png')} style={{marginTop: 50}} />
        <TouchableOpacity style={style.backButton} onPress= {() =>
            navigation.navigate('menu') }>
          <Text style={style.backText}>Voltar ao inicio</Text>
        </TouchableOpacity>
      </View>
  </View>
  )}
export default PurchaseQr;