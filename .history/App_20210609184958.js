import React from 'react';
import  'react-native-gesture-handler';
import SingleMulti from './SingleMulti';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SinglePlayer from './SinglePlayer'
import MultiPlayer from './MultiPlayer'
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
    <SinglePlayer/>
  );
}
function GameScreenMultiPlayer(){
  return(
    <MultiPlayer/>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={HomeScreen}/>
     <Stack.Screen name="SinglePlayer" component={GameScreenSinglePlayer}/>
     <Stack.Screen name="MultiPlayer" component={GameScreenMultiPlayer}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
