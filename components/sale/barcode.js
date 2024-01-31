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
  description: {
    fontSize: 20,
    color: '#464545',
    marginVertical: 40,
    textAlign: 'center',
  },
  barcodeContainer: {
    padding: 80,
    borderWidth: 2,
    borderColor: '#ED604C',
    margin: 20
  },  
  barcodeButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 25,
  },
  barcodeText: {
    color: 'white',
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 20,
    width: Dimensions.get('screen').width * 0.1,
    flexDirection: 'row',
  },
  correctButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 250,
  },
  correctText: {
    color: 'white',
    fontSize: 20,
  },
  tenteButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ED604C',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  tenteText: {
    color: '#ED604C',
    fontSize: 20,
  }
});

function Barcode({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.description}>FACA SCAN DO BARCODER DO PRODUCTO</Text>
      <View style={style.barcodeContainer}>
        <TouchableOpacity style={style.barcodeButton}>
          <Text style={style.barcodeText}>Escanear</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={style.correctButton} onPress= {() =>
            navigation.navigate('summary') }>
        <Text style={style.correctText}>Guardar e continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.tenteButton}>
        <Text style={style.tenteText}>Venda acabada</Text>
      </TouchableOpacity>
  </View>
  )}
export default Barcode;