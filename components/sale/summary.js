import React, {useState} from 'react';
import {
View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert, Modal, Pressable
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
    color: '#464545',
    marginTop: 20,
  },
  table: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    backgroundColor: '#FEE45C',
    borderBottomWidth: 2,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    color: '#464545',
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
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 45,
    marginTop: 200,
    marginBottom: 70,
    backgroundColor: '#FEE45C',
    color: '#464545',
  },
  okButton: {
    backgroundColor: '#ED604C',
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
    borderColor: '#ED604C',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  addText: {
    color: '#ED604C',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 60,
    paddingHorizontal: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText:{
    fontSize: 20,
    color: '#464545',
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
});

function Summary({navigation})  {
  const [modalVisible, setModalVisible] = useState(false);
  return(
     <View style={style.container}>
      <View style={style.centerContainer}>
        <Text style={style.description}>RESUMO DA VENTA</Text>
        <View style={style.table}>
          <Text style={style.tableTitle}>Decricao</Text>
          <Text style={style.tableTitle}>Quanty</Text>
          <Text style={style.tableTitle}>Preco</Text>
          <Text style={style.tableTitle}>Total</Text>
        </View>
        <TextInput style={style.priceInput}></TextInput>
        <Text style={style.totalPrice}>Total: $</Text>
        <Text style={style.description}>¿ESTA CERTO?</Text>
        <TouchableOpacity style={style.okButton} onPress={() => setModalVisible(true)}>
        <Text style={style.okText}>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.addButton} onPress= {() =>
            navigation.navigate('barcode') }>
          <Text style={style.addText}>Adicionar uotro producto</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={style.modalContainer}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Tipo de venda</Text>
            <TouchableOpacity style={style.modalButton} onPress= {() =>
              navigation.navigate('newClient') }>
            <Text style={style.okText}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.modalButton} onPress= {() =>
              navigation.navigate('clientQr') }>
            <Text style={style.okText}>Credito</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </Modal>
    </View>
)}
export default Summary;