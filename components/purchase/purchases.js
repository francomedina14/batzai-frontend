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
  clientContainer: {
    backgroundColor: '#FEE45C',
    paddingHorizontal: 60,
    paddingVertical: 40,
    borderRadius: 25,
    marginVertical: 70,
  },
  clientText: {
    fontSize: 20,
    textAlign: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  table: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    backgroundColor: '#FEE45C',
    borderBottomWidth: 2,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  tableTitle: {
    fontSize: 13,
    width: '20%',
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 15,
    borderRadius: 25,
    marginVertical: 40,
    backgroundColor: '#FEE45C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#464545',
  },
  okButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  okText: {
    color: 'white',
    fontSize: 20,
  },
});

function Purchases({navigation}) {
  return(
  <View style={style.container}>
    <View style={style.clientContainer}>
      <Text style={style.clientText}>Name e Apelido</Text>
      <Text style={style.clientText}>########</Text>
    </View>
      <Text style={style.title}>Historico de compras</Text>
      <View style={style.table}>
          <Text style={style.tableTitle}>Fecha</Text>
          <Text style={style.tableTitle}>Venta</Text>
          <Text style={style.tableTitle}>Total</Text>
        </View>
      <Text style={style.totalPrice}>Total em divida: $</Text>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('amount') }>
          <Text style={style.okText}>Receber</Text>
      </TouchableOpacity>
  </View>
  )}
export default Purchases;