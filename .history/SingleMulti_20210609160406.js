import React from 'react';
import { Text, View, Button } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle'
const SingleMulti = () => {
    return ( 
        <View>
            <View>

            </View>
             
             <View style={{flexDirection:'row'}}>
                 <View style={SingleMultiStyle.Button1}>
                     <Button title="Single Player Mode"/>
                 </View>
                 
                 <Button title="Multi Player Mode"/>
             </View>
        </View>
   
     );
}

export default SingleMulti;