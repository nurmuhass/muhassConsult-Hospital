import { StyleSheet, Text, View,Pressable , StatusBar,FlatList} from 'react-native'
import React , { useState }from 'react'
import SignUpDetails from '../../components/SignUpDetails';
import SignUpDetails1 from '../../components/SignUpDetails1';
import SignUpDetails2 from '../../components/SignUpDetails2';
import SignUpDetails3 from '../../components/SignUpDetails3';
import {parameters, colors} from '../../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Sell() {
 
  const [formData, setFormData] = useState({
    ProductTitle:"",
    Category:"",
    productImage1:"",
    productImage2:"",
    productImage3:"",
    productImage4:"",

    //delivery
    delivery:"",

    //third
    productPrice:"",
    productDescription:"",


  });
const [screen,setScreen] =useState(0)
const FormTitle =[
  "Product Details",
  "Product Delivery",
  "Product Details Extra"
]

const ScreenDisplay = () =>{
  if (screen === 0){
    return <SignUpDetails1/>;
  }else if (screen === 1){
    return <SignUpDetails2/>;
  }else if (screen === 2){
    return <SignUpDetails3/>;
  }
}



const buttonDisplay = () =>{
  if (screen === 0){
    return (
    <View style={{}}>

<Button title='Next'   buttonStyle = {{        backgroundColor:"#007260",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:25,
        borderWidth:1, 
        borderColor:"#007260",
        height:50,
        paddingHorizontal:20,
        width:300,alignSelf:'center'}}
     titleStyle = {parameters.buttonTitle} onPress={ () => {
      setScreen((currScreen) => currScreen +1);
  }}/>
    
    </View>
    );
  }else if (screen === 1){
    return (
<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>


<Button title='Next'   buttonStyle = {{        backgroundColor:"#007260",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:25,
        borderWidth:1, 
        borderColor:"#007260",
        height:50,
        paddingHorizontal:20,
        width:300,alignSelf:'center'}}
     titleStyle = {parameters.buttonTitle} onPress={ () => {
      setScreen((currScreen) => currScreen +1);
  }}/>
</View>);
  }else if (screen === 2){
    return (
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:'90%'}}>

<Button title='Next'   buttonStyle = {{        backgroundColor:"#007260",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:25,
        borderWidth:1, 
        borderColor:"#007260",
        height:50,
        paddingHorizontal:20,
        width:300,alignSelf:'center',}}
     titleStyle = {parameters.buttonTitle} onPress={ () => {
      setScreen((currScreen) => currScreen +1);
  }}/>

</View>);
  }else if (screen === 3){
    return (<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

    <Button title='Prev'   buttonStyle = {parameters.styledButton}
         titleStyle = {parameters.buttonTitle} onPress={ () => {
          setScreen((currScreen) => currScreen -1);
      }}/>
    
  
    </View>);
  }
}
  return (
    <View style={styles.container}>
    <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="black"
                 />
       <View style={{ }}>      
  
        <FlatList
	data={[{}]}
    style={{}}
	keyExtractor={() => null}
	renderItem={() =><>



<View>


    
        {ScreenDisplay()}
   

        {buttonDisplay()}

        
</View>

</>}
     />



    </View>
        
    </View>  
   
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f0f0f0",
    paddingBottom:135,
    flex:1,
    paddingTop:parameters.statusBarHeight,
    
},
background:{

}
})


