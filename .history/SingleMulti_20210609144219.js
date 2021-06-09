import React from 'react';
import 'module'
import { Text, View } from 'react-native';
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