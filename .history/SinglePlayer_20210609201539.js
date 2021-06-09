import React from 'react'
import {View ,Text, Image} from 'react-native';
const SinglePlayer = () => {
    return ( 
    <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:100}}>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 50, height: 20, marginBottom:1, backgroundColor: 'powderblue',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 20, height: 20, marginBottom:1, backgroundColor: 'skyblue',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 20, height: 20, marginBottom:1, backgroundColor: 'yellow',borderWidth:1,borderColor:'black'}} />
    </View>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 20, height: 20, marginBottom:1,marginLeft:1, backgroundColor: 'yellow',borderWidth:1,borderColor:'black'}} />
    </View>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 20, height: 20, marginBottom:1,marginLeft:1, backgroundColor: 'yellow',borderWidth:1,borderColor:'black'}} />
    </View> 
    {/* <Image
    source={require('./assets/tic.png')}
    /> */}
     </View> 
     );
}
 
export default SinglePlayer;