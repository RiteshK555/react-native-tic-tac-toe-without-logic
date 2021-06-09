import React from 'react';
import { Text, View, Button } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle'
const SingleMulti = () => {
    return ( 
   <View style={flexDirection}>
     <Button title="Single Player Mode"/>
     <Button title="Multi Player Mode"/>
   </View>
     );
}

export default SingleMulti;