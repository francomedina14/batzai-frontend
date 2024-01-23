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

export default function App() {
  return <View style={style.container}>
      <View style={style.centerContainer}>
        <Text style={style.title}>Batzai</Text>
      </View>
      <Text style={style.welcome}>¡Hola !</Text>
      <Text style={style.description}>¿Que vas a hacer hoy?</Text>
      <View style={style.centerContainer}>
        <TouchableOpacity style={style.menuButton}>
            <Text style={style.menuText}>Vendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuButton}>
            <Text style={style.menuText}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.menuButton}>
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
}