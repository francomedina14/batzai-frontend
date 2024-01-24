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
  table: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    backgroundColor: 'gray',
    borderBottomWidth: 3,
  },
  tableTitle: {
    fontSize: 13,
    width: '20%',
    margin: 5,
    fontWeight: 'bold'
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

function summary({navigation})  {
  return(
     <View style={style.container}>
      <View style={style.centerContainer}>
        <Text style={style.title}>Batzai</Text>
        <Text style={style.description}>Resume da venta</Text>
        <View style={style.table}>
          <Text style={style.tableTitle}>Decricao</Text>
          <Text style={style.tableTitle}>Quanty</Text>
          <Text style={style.tableTitle}>Preco</Text>
          <Text style={style.tableTitle}>Total</Text>
        </View>
        <TextInput style={style.priceInput}></TextInput>
        <Text style={style.totalPrice}>Preco total: $</Text>
        <Text style={style.description}>¿Esta certo?</Text>
        <TouchableOpacity style={style.okButton}>
        <Text style={style.okText}>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.addButton} onPress= {() =>
            navigation.navigate('Barcode') }>
          <Text style={style.addText}>Adicionar uotro producto</Text>
        </TouchableOpacity>
      </View>
  </View>
)}
export default summary;