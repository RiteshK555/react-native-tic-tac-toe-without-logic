import React, {useState} from 'react'
import {View ,Text, Image} from 'react-native';
const SinglePlayer = () => {
  const [Num1,setNum1]=useState(0);
    return ( 
    <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:200}}>
    <View style={{ flexDirection:'row'}}>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      {/* {arr[0] && <Image source={require('./assets/im.jpg')}/>} */}
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
    </View>
    <View style={{ flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
    </View>
    <View style={{ flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im.jpg')}
      />
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      <Image
     source={require('./assets/im2.jpg')}
      />
      </View>
    </View> 
     </View> 
     );
}
 
export default SinglePlayer;