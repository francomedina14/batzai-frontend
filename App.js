import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import menu from './menu';
import barcode from './barcode';
import quanty from './quanty';
import summary from './summary';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={menu} />
        <Stack.Screen name="Barcode" component={barcode} />
        <Stack.Screen name="Quanty" component={quanty} />
        <Stack.Screen name="Summary" component={summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;