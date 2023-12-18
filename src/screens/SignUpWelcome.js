import { Image, StyleSheet, Text, View,TouchableOpacity ,StatusBar,} from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import Button from '../components/Button';

const SignUpWelcome = ({navigation}) => {
  return (
    <View style={{flex:1}}>
           <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="#1A705C"
                 />
      <View style={{width: '100%',margin:0,height:300,}}>
      <Image source={require("../images/banner3.png")}  style={{
                               height:300,
                               flex: 1,
    paddingTop: 0,
    width: 420,
                            }}resizeMode='cover'
                           />
      </View>
  

    <View style={{justifyContent:'center',alignItems:'center',marginVertical:25}}>
      <Text>Create Muhass Consult Expert</Text>
      <Text>Account to Continue </Text>
    </View>


    <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>


                <Button
                        title="Signup With Email"
                        style={{
                            marginTop: 22,
                            width: "94%",
                            marginLeft:'3%',
                            marginRight:'3%'
                        }}

                        onPress={ () => {
                          navigation.navigate("Signup");
                       }} 
                    />

<Button
                    title="Signup With PhoneNumber"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        width: "94%",
                        marginLeft:'3%',
                        marginRight:'3%'
                    }}
                    onPress={ () => {
                        navigation.navigate("Signup");
                     }} 
                />

<View style={{position: 'absolute',bottom:0,width:"100%", zIndex: 999}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
      <Text>By Continuing you agree to our </Text>
      <Text>Terms of service and privacy policy </Text>
</View>

    <View style={{backgroundColor:'#555',padding:20,marginTop:'8%'}}>
          <Text style={{alignSelf:'center',color:'#fff'}}>Already have an account ? Login</Text>   
    </View>
</View>



    </View>
  )
}

export default SignUpWelcome

const styles = StyleSheet.create({
   
})