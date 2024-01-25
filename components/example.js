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
});

function Component({navigation}) {
  return(
  <View style={style.container}>
      <Image source={require('../../assets/logo.png')} style={{margin: 20}} />
  </View>
  )}
export default Component;