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
  welcome: {
    fontSize: 30,
    color: '#ED604C',
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    color: '#464545',
    marginTop: 10,
  },
  menuButton: {
    backgroundColor: '#ED604C',
    width: Dimensions.get('screen').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 25,
    marginBottom: 25,
  },
  menuText: {
    color: 'white',
    fontSize: 20,
  },
});

function Menu({navigation}) {
    return( 
    <View style={style.container}>
      <Text style={style.welcome}>¡Ola !</Text>
      <Text style={style.description}>¿Que vas a hacer hoy?</Text>
      <View style={style.centerContainer}>
        <TouchableOpacity style={style.menuButton} onPress= {() =>
            navigation.navigate('barcode') }>
            <Text style={style.menuText}>Vendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuButton} onPress= {() =>
            navigation.navigate('client') }>
            <Text style={style.menuText}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuButton} onPress= {() =>
            navigation.navigate('provider') }>
            <Text style={style.menuText}>Cobrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuButton}>
            <Text style={style.menuText}>Promocoes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuButton}>
            <Text style={style.menuText}>Relatorios</Text>
        </TouchableOpacity>
      </View>
  </View>
)}
export default Menu;