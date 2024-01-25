import React from 'react';
import {
View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image
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
  description: {
    fontSize: 25,
    color: 'black',
    marginTop: 20,
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
    marginTop: 100,
    marginBottom: 70,
  },
  okButton: {
    backgroundColor: 'gray',
    width: Dimensions.get('screen').width *0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 70,
  },
  okText: {
    color: 'white',
    fontSize: 20,
  },
  addButton: {
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
  addText: {
    color: 'gray',
    fontSize: 20,
  }
});

function Summary({navigation})  {
  return(
     <View style={style.container}>
      <View style={style.centerContainer}>
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
        <Text style={style.description}>RESUMO DA VENTA</Text>
        <View style={style.table}>
          <Text style={style.tableTitle}>Decricao</Text>
          <Text style={style.tableTitle}>Quanty</Text>
          <Text style={style.tableTitle}>Preco</Text>
          <Text style={style.tableTitle}>Total</Text>
        </View>
        <TextInput style={style.priceInput}></TextInput>
        <Text style={style.totalPrice}>Preco total: $</Text>
        <Text style={style.description}>¿ESTA CERTO?</Text>
        <TouchableOpacity style={style.okButton}>
        <Text style={style.okText}>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.addButton} onPress= {() =>
            navigation.navigate('barcode') }>
          <Text style={style.addText}>Adicionar uotro producto</Text>
        </TouchableOpacity>
      </View>
  </View>
)}
export default Summary;