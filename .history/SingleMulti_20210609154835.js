import React from 'react';
import { Text, View } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle'
const SingleMulti = () => {
    return ( 
    <View >
   <Text style={SingleMultiStyle.titleText}>
       Hello World
   </Text>
   <button>Single Player Mode</button>

    </View>
     );
}

export default SingleMulti;