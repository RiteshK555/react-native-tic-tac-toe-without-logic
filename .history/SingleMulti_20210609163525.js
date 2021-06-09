import React from 'react';
import { Text, View, Button } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle';
import {useState} from 'react'
const SingleMulti = () => {
    const [RandomNo,setRandomNo]=useState(0);
    return ( 
        <View>
            <View >
                <Text style={SingleMultiStyle.titleText}>Select {RandomNo} between Single player mode and Double Player mode</Text>
            </View>
             <View style={{flexDirection:'row'}}>
                 <View style={SingleMultiStyle.Button1}>
                     <Button title="Single Player Mode"/>
                 </View>
                 <View style={SingleMultiStyle.Button2}>
                    <Button title="Multi Player Mode" onPress={()=>{
                        if(RandomNo===0)
                        {
                            setRandomNo(1)
                        }
                        else{
                            setRandomNo(1)
                        }
                    }}/>
                 </View>
             </View>
        </View>
   
     );
}

export default SingleMulti;