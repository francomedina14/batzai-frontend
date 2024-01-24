import React from 'react';
import {
View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions
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
    color: 'gray',
  },
  description: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  barcodeContainer: {
    padding: 80,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },  
  barcodeButton: {
    backgroundColor: 'black',
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
    backgroundColor: 'gray',
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
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  tenteText: {
    color: 'gray',
    fontSize: 20,
  }
});

function Barcode({navigation}) {
  return(
  <View style={style.container}>
      <Text style={style.title}>Batzai</Text>
      <Text style={style.description}>Faca scan do barcoder do producto</Text>
      <View style={style.barcodeContainer}>
        <TouchableOpacity style={style.barcodeButton}>
          <Text style={style.barcodeText}>Escanear</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={style.correctButton} onPress= {() =>
            navigation.navigate('Quanty') }>
        <Text style={style.correctText}>Correcto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.tenteButton}>
        <Text style={style.tenteText}>Tente uotra vez</Text>
      </TouchableOpacity>
  </View>
  )}
export default Barcode;