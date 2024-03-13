import React, { useState } from 'react';
import axios from 'axios';
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
  image: {
    margin: 100,
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    backgroundColor: '#ED604C',
    color: 'white',
    width: Dimensions.get('screen').width,
    paddingTop: 200,
    paddingBottom: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  textInput: {
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.8,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 13,
    marginBottom: 10,
  },
  okButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width *0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  okText: {
    color: 'white',
    fontSize: 20,
  }
});

const providerURL = 'ec2-3-84-116-82.compute-1.amazonaws.com:8000/api/v1/proveedores';

const NewProvider = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [nuit, setNuit] = useState('')
    const [address, setAddress] = useState('')
    
    const addProvider = async() => {
    
      axios.post(providerURL, {
        name: name,
        phone: phone,
        nuit: nuit,
        address: address,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      clearInput()
    }

    const clearInput = () => {
        setName('')
        setPhone('')
        setNuit('')
        setAddress('')
    }

  return(
    <View style={style.container}>
        <Text style={style.title}>Nuevo proveedor</Text>
        <View>
          <Text style={style.label} onChangeText={setName} value={name}>ESCREVA NOMBRE DO *</Text>
          <TextInput style={style.textInput}/>
          <Text style={style.label} onChangeText={setPhone} value={phone}>ESCREVA TELEFONO DO FORNECEDOR *</Text>
          <TextInput style={style.textInput}/>
          <Text style={style.label} onChangeText={setNuit} value={nuit}>ESCREVA NUIT DO FORNECEDOR</Text>
          <TextInput style={style.textInput}/>
          <Text style={style.label} onChangeText={setAddress} value={address}>ESCREVA MORADA DO FORNECEDOR</Text>
          <TextInput style={style.textInput}/>
        </View>
        <TouchableOpacity style={style.okButton} onPress={addProvider}>
            <Text style={style.okText}>Ok</Text>
        </TouchableOpacity>
    </View>
  )}
export default NewProvider;