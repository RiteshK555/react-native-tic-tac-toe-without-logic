import React from 'react';
import  'react-native-gesture-handler';
import SingleMulti from './SingleMulti';
import {NavigationContainer} from '@react-navigation/native'
import { Text, View ,StyleSheet } from 'react-native';
import createStackNavigator from '@react-navigation/stack';
function HomeScreen()
{
  return()
}
export default function App() {
  return (
    <NavigationContainer>
    <View>
      <SingleMulti/>
    </View>
    </NavigationContainer>
    
  );
}
