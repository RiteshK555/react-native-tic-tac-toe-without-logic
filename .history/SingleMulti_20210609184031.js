import React from 'react';
import { Text, View, Button } from 'react-native';
import SingleMultiStyle from './SingleMultiStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react'
const SingleMulti = ({Navigation}) => {
    // const [ButtonClickScreenName,setButtonClickScreenName]=useState("Gaming_Screen");
    // const [ButtonClickScreenComponent,setButtonClickScreenComponent]=useState({GameScreen});
    return ( 
        <View>
            <View >
                <Text style={SingleMultiStyle.titleText}>Select between Single player mode and Double Player mode</Text>
            </View>
             <View style={{flexDirection:'row'}}>
                 <View style={SingleMultiStyle.Button1}>
                     <Button title="Single Player Mode" onPress={()=>{
                       SingleNavigation.navigate('Gaming_Screen_SinglePlayer')
                     }}/>
                 </View>
                 <View style={SingleMultiStyle.Button2}>
                    <Button title="Multi Player Mode" onPress={()=>{
                       MultiNavigation.navigate('Gaming_Screen_MultiPlayer')
                    }}/>
                 </View>
             </View>
        </View>
   
     );
}

export default SingleMulti;