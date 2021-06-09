import React, {useState} from 'react'
import {View ,Text, Image, Button, Pressable} from 'react-native';
const SinglePlayer = () => {
  const [Choose,setChoose]=useState('');
  const [Num1,setNum1]=useState(0);
  const [Num2,setNum2]=useState(0);
  const [Num3,setNum3]=useState(0);
  const [Num4,setNum4]=useState(0);
  const [Num5,setNum5]=useState(0);
  const [Num6,setNum6]=useState(0);
  const [Num7,setNum7]=useState(0);
  const [Num8,setNum8]=useState(0);
  const [Num9,setNum9]=useState(0);
  const [IsPressed,setIsPressed]=useState(0);
    return ( 
    <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:200}}>
    <View style={{ flexDirection:'row'}}>
      <Pressable onPress={()=>{
        setNum1(1);
      }}>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num1===1 && <Image source={require('./assets/X.jpg')}/> }
      </View>
      </Pressable>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num2===1 && <Image source={require('./assets/X.jpg')}/>  }
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num3===1 && <Image source={require('./assets/X.jpg')}/>  }
      </View>
    </View>
    <View style={{ flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
    { Num4===1 ? <Image source={require('./assets/X.jpg')}/>  }
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num5===1 ? <Image source={require('./assets/X.jpg')}/>  }
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num6===1 ? <Image source={require('./assets/X.jpg')}/>  }
      </View>
    </View>
    <View style={{ flexDirection:'row'}}>
    <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
    { Num7===1 ? <Image source={require('./assets/X.jpg')}/>  }
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num8===1 ? <Image source={require('./assets/X.jpg')}/>  }
      </View>
      <View style={{justifyContent:'center',alignItems: 'center',width: 50, height: 50, marginBottom:1,marginLeft:1,  backgroundColor: 'white',borderWidth:1,borderColor:'black'}} >
      { Num9===1 ? <Image source={require('./assets/X.jpg')}/> :{}}
      </View>
    </View>
    {IsPressed===0 ? <Text style={{fontSize:30 , paddingTop:10}}>
    choose either x or o
    </Text> : <Text style={{fontSize:30 , paddingTop:10}}>
    You are {Choose}
    </Text>}
    <View style={{flexDirection:'row'}}>
      <View style={{paddingRight:50}}>
      {/* <Button title="X"/>  */}
      {IsPressed===0 && <Button title="X"
      onPress={() =>{
        setIsPressed(1);
        setChoose('X');
      }}
      />  }
      </View>
      {IsPressed===0 && <Button title="O"
      onPress={() =>{
        setIsPressed(1);
        setChoose('O');
      }}
      /> }
    </View>
     </View> 
     );
}
 
export default SinglePlayer;