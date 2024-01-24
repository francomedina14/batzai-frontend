import React from 'react';
import {
View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions
} from 'react-native';

const style= StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  centerContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    color: 'gray',
  },
  description: {
    fontSize: 25,
    color: 'black',
    marginTop: 20,
  },
  quantyContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.4,
    marginTop: 15,
  },
  quantyInput: {
    width: Dimensions.get('screen').width * 0.1,
    textAlign: 'center',
    borderColor: 'gray',
  },
  quantyText: {
    fontSize: 30,
  },
  priceInput:{
    width: Dimensions.get('screen').width * 0.4,
    borderWidth: 1,
    padding: 15,
    textAlign: 'center',
    borderColor: 'gray',
    marginTop: 15,
  },
  totalPrice: {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 25,
    padding: 15,
    marginTop: 100,
  },
  saveButton: {
    backgroundColor: 'gray',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 100,
  },
  saveText: {
    color: 'white',
    fontSize: 20,
  },
  saleButton: {
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
  saleText: {
    color: 'gray',
    fontSize: 20,
  }
});

function quanty({navigation})  {
  return(
     <View style={style.container}>
      <View style={style.centerContainer}>
        <Text style={style.title}>Batzai</Text>
        <Text style={style.description}>Quantidade</Text>
        <View style={style.quantyContainer}>
        <TouchableOpacity style={style.quantyButton}>
        <Text style={style.quantyText}>-</Text>
        </TouchableOpacity>
        <TextInput style={style.quantyInput}></TextInput>
        <TouchableOpacity style={style.quantyButton}>
        <Text style={style.quantyText}>+</Text>
        </TouchableOpacity>
        </View>
        <Text style={style.description}>Preco de venda unitario</Text>
        <TextInput style={style.priceInput}></TextInput>
        <Text style={style.totalPrice}>Preco total: $</Text>
        <TouchableOpacity style={style.saveButton}>
        <Text style={style.saveText}>Guardar e continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.saleButton} onPress= {() =>
            navigation.navigate('Summary') }>
          <Text style={style.saleText}>Venda acabada</Text>
        </TouchableOpacity>
      </View>
  </View>
)}
export default quanty;