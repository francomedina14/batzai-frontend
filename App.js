import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login'
import Menu from './components/menu';
import Barcode from './components/sale/barcode';
import Summary from './components/sale/summary';
import Client from './components/purchase/client';
import Purchases from './components/purchase/purchases';
import Amount from './components/purchase/amount';
import Confirm from './components/purchase/confirm';
import Provider from './components/provider/provider';
import NewProvider from './components/provider/newProvider';
import NewClient from './components/sale/newClient';
import ClientQr from './components/sale/clientQr';
import PurchaseQr from './components/purchase/purchaseQr';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="barcode" component={Barcode} />
        <Stack.Screen name="summary" component={Summary} />
        <Stack.Screen name="newClient" component={NewClient} />
        <Stack.Screen name="clientQr" component={ClientQr} />
        <Stack.Screen name="client" component={Client} />
        <Stack.Screen name="purchases" component={Purchases} />
        <Stack.Screen name="amount" component={Amount} />
        <Stack.Screen name="confirm" component={Confirm} />
        <Stack.Screen name="purchaseQr" component={PurchaseQr} />
        <Stack.Screen name="provider" component={Provider} />
        <Stack.Screen name="newProvider" component={NewProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;