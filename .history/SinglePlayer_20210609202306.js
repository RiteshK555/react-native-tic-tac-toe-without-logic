import React from 'react'
import {View ,Text, Image} from 'react-native';
const SinglePlayer = () => {
    return ( 
    <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:200}}>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
    </View>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 50, height: 50, marginBottom:1, marginLeft:1, backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 50, height: 50, marginBottom:1, marginLeft:1, backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 50, height: 50, marginBottom:1,marginLeft:1, backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
    </View>
    <View style={{ flexDirection:'row'}}>
      <View style={{width: 50, height: 50, marginBottom:1, marginLeft:1, backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 50, height: 50, marginBottom:1, marginLeft:1, backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
      <View style={{width: 50, height: 50, marginBottom:1,marginLeft:1, backgroundColor: 'white',borderWidth:1,borderColor:'black'}} />
    </View> 
    {/* <Image
    source={require('./assets/x.jpg')}
    /> */}
     </View> 
     );
}
 
export default SinglePlayer;