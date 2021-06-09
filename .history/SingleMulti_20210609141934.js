import React from 'react';
import { render } from 'react-dom';
import { Text, View ,StyleSheet } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle'
const SingleMulti = () => {
    return ( 
    <View >
   <Text style={SingleMultiStyle.titleText}>
       hello world
   </Text>
    </View>
     );
}

export default SingleMulti;