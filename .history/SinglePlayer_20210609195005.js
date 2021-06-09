import React from 'react'
import {View ,Text} from 'react-native';
const SinglePlayer = () => {
    return ( 
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>This is Screen for single Player mode</Text>
    // </View>
    <View>
    <View>
      <View style={{width: 20, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}} />
      <View style={{width: 20, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'skyblue'}} />
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, backgroundColor: 'yellow'}} />
    </View>
    <View>
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'yellow'}} />
    </View>
    <View>
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
      <View style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'yellow'}} />
    </View> 
     </View> 
     );
}
 
export default SinglePlayer;