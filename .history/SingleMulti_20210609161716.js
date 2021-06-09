import React from 'react';
import { Text, View, Button } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle';
import {useState} from 'react'
const SingleMulti = () => {
    const [RandomNo,setRandomNo]=useState(10);
    return ( 
        <View>
            <View >
                <Text style={SingleMultiStyle.titleText}>Select between Single player mode and Double Player mode</Text>
            </View>
             <View style={{flexDirection:'row'}}>
                 <View style={SingleMultiStyle.Button1}>
                     <Button title="Single Player Mode"/>
                 </View>
                 <View style={SingleMultiStyle.Button2}>
                    <Button title="Multi Player Mode" onClick={()=>{
                        console.log('====================================');
                        console.log("hi");
                        console.log('====================================');
                    }}/>
                 </View>
             </View>
        </View>
   
     );
}

export default SingleMulti;