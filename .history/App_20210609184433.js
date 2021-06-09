import React from 'react';
import  'react-native-gesture-handler';
import SingleMulti from './SingleMulti';
import {NavigationContainer} from '@react-navigation/native'
import { Text, View ,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SinglePlayer from 'SinglePlayer'
import {useState} from 'react';
function HomeScreen({navigation})
{
  return(
    <SingleMulti
    Navigation={navigation}
    />
  );
}
function GameScreenSinglePlayer(){
  return(
    
  );
}
function GameScreenMultiPlayer(){
  return(
    <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center'}}>
      <Text>This is Screen for Multi player mode</Text>
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
     <Stack.Screen name="Gaming_Screen_MultiPlayer" component={GameScreenMultiPlayer}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
