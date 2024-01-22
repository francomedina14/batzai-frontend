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
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
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
    marginTop: 500,
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

export default function App() {
  return <View style={style.container}>
      <Text style={style.title}>Batzai</Text>
      <Text style={style.description}>Faca scan do barcoder do producto</Text>
      <TouchableOpacity style={style.correctButton}>
        <Text style={style.correctText}>Correcto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.tenteButton}>
        <Text style={style.tenteText}>Tente uotra vez</Text>
      </TouchableOpacity>
  </View>

}