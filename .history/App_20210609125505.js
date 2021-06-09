import React from 'react';
// import singleMulti from './singleMulti';
import { Text, View ,StyleSheet } from 'react-native';
export default function App() {
  return (
    <View>
   <Text h1 styles={styles.title}>
       hello world
   </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    justifyContent: 'center',
  }
})