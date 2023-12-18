import { StyleSheet, Text, View } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { colors } from '../global/styles';


export default function SignUpDetails2({navigation}) {
  
  return (
    <View style={styles.container}>

<TextInput
        style={styles.input}
       
        placeholder='Address'
       onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
      
        placeholder='State'
       onChangeText={(text) => setTitle(text)}
      />
         <TextInput
        style={styles.input}
      
        placeholder='City'
       onChangeText={(text) => setTitle(text)}
      />
    

   </View>
  )
}


const styles = StyleSheet.create({
  container:{
   
    backgroundColor:"#f0f0f0",
    paddingBottom:5,
    flex:1,
    
},
input: {
  height: 40,
  margin: 12,
  borderBottomWidth: 1,
  padding: 10,
  borderColor:colors.grey3,
  borderRadius:8,
  marginTop:20
},

styledButton:{
  backgroundColor:"#fff",
  alignContent:"center",
  justifyContent:"center",
  borderWidth:1, 
  borderColor:"#555",
  height:70,
  paddingHorizontal:20,
  width:'95%',
  margin:10,
  borderStyle:'dotted',
  borderRadius:8
},

buttonTitle:{
  color:"#555",
  fontSize:14,  
  marginTop:-3 
},
picker:{
  borderWidth:2, 
  borderColor:"#555",
}
})