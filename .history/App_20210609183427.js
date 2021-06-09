import React from 'react';
import  'react-native-gesture-handler';
import SingleMulti from './SingleMulti';
import {NavigationContainer} from '@react-navigation/native'
import { Text, View ,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';
function HomeScreen({navigation})
{
  return(
    <SingleMulti
    SingleNavigation={navigation}
    MultiNavigation={navigation}
    />
  );
}
function GameScreenSinglePlayer(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Details Screen</Text>
    </View>
  );
}
function GameScreenMultiPlayer(){
  return(
    <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center'}}>
      <Text
    </View>
  );
}
const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={HomeScreen}/>
     <Stack.Screen name="Gaming_Screen_SinglePlayer" component={GameScreenSinglePlayer}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
