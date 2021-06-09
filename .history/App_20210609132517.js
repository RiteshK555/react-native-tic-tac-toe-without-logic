import React from 'react';
import SingleMulti from './singleMulti';
import { Text, View ,StyleSheet } from 'react-native';
export default function App() {
  return (
    <singleMulti/>
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