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
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 30,
  },
  table: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    backgroundColor: '#CBCBCB',
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
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 25,
    padding: 15,
    marginVertical: 100,
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
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
      <Text style={style.title}>HISTORICO DE COMPRAS</Text>
      <View style={style.table}>
          <Text style={style.tableTitle}>Fecha</Text>
          <Text style={style.tableTitle}>Venta</Text>
          <Text style={style.tableTitle}>Total</Text>
        </View>
      <Text style={style.totalPrice}>Total em divida: $</Text>
      <TouchableOpacity style={style.okButton} onPress= {() =>
            navigation.navigate('amount') }>
          <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
  </View>
  )}
export default Purchases;