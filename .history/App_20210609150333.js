import React from 'react';
import  'react-native-gesture-handler';
import SingleMulti from './SingleMulti';
import {NavigationContainer} from '@react-navigation/native'
import { Text, View ,StyleSheet } from 'react-native';
import createStackNavigator from '@react-navigation/stack';
function HomeScreen()
{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Home Screen</Text>
    <SingleMulti/>
  </View>
  );
}
const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigo></Stack>
    </NavigationContainer>
    
  );
}
