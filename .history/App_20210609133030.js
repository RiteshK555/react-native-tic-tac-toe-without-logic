import React from 'react';
imp
import SingleMulti from './SingleMulti';
import { Text, View ,StyleSheet } from 'react-native';
export default function App() {
  return (
    <View>
      <SingleMulti/>
    </View>
  );
}
const styles = StyleSheet.create({
  titleText:{
    paddingTop:300,
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:20,
  }
})