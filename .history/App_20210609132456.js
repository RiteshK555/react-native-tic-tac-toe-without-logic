import React from 'react';
import singleMulti from './';
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