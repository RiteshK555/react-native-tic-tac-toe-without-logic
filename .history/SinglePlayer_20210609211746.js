import React, {useState} from 'react'
import {View ,Text, Image, Button} from 'react-native';
const SinglePlayer = () => {
  const [Choose,setChoose]=useState('');
  const [Num1,setNum1]=useState(0);
  const [IsPressed,setIsPressed]=useState(0);
    return ( 
    <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:200}}>
    <View style={{ flexDirection:'row'}}>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
    </View>
    <View style={{ flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
    { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
    </View>
    <View style={{ flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
    { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===0 ? <Image source={require('./assets/im.jpg')}/> :{}}
      </View>
    </View>
    <Text style={{fontSize:30}}>
    choose either x or o
    </Text>
    <View style={{flexDirection:'row'}}>
      <View style={{paddingRight:50}}>
      {/* <Button title="X"/>  */}
      {IsPressed===0 ? <Button title="X"
      onPress={() =>{
        setIsPressed(1);
      }}
      /> : }
      </View>
      {IsPressed===0 ? <Button title="O"
      onPress={() =>{
        setIsPressed(1);
      }}
      /> :{}}
    </View>
     </View> 
     );
}
 
export default SinglePlayer;