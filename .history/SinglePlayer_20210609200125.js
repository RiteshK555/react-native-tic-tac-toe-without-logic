import React from 'react'
import {View ,Text} from 'react-native';
const SinglePlayer = () => {
    return ( 
    <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:300,borderWidth:1, borderColor: 'grey'}}>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 20, height: 20, marginBottom:1, backgroundColor: 'powderblue'}} />
      <View style={{width: 20, height: 20, marginBottom:1, backgroundColor: 'skyblue'}} />
      <View style={{width: 20, height: 20, backgroundColor: 'yellow'}} />
    </View>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
      <View style={{width: 20, height: 20, marginLeft:1, backgroundColor: 'yellow'}} />
    </View>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
      <View style={{width: 20, height: 20, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
      <View style={{width: 20, height: 20, marginLeft:1, backgroundColor: 'yellow'}} />
    </View> 
     </View> 
     );
}
 
export default SinglePlayer;