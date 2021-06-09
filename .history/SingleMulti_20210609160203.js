import React from 'react';
import { Text, View, Button } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle'
const SingleMulti = () => {
    return ( 
        <View>
             <Text>Select between Single player mode and Double Player mode</Text>
             <View style={{flexDirection:'row'}}>
                 <View style={{}}>
                     <Button title="Single Player Mode"/>
                 </View>
                 
                 <Button title="Multi Player Mode"/>
             </View>
        </View>
   
     );
}

export default SingleMulti;