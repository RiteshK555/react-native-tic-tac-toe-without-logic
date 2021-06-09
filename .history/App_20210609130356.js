import React from 'react';
// import singleMulti from './singleMulti';
import { Text, View ,StyleSheet } from 'react-native';
export default function App() {
  return (
    <View>
   <Text style={styles.titleText}>
       hello world
   </Text>
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