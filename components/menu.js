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
    color: 'gray',
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    color: 'gray',
    marginTop: 10,
  },
  menuButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 25,
    borderWidth: 1,
    marginBottom: 25,
  },
  menuText: {
    color: 'black',
    fontSize: 20,
  },
});

function Menu({navigation}) {
    return( 
    <View style={style.container}>
      <View style={style.centerContainer}>
        <Image source={require('../assets/logo.png')} style={{margin: 20}} />
      </View>
      <Text style={style.welcome}>¡Hola !</Text>
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
            <Text style={style.menuText}>Contas</Text>
        </TouchableOpacity>
      </View>
  </View>
)}
export default Menu;