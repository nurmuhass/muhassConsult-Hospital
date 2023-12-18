import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import Button from './Button';

const SignUp = () => {
  return (
    <View>
      <View style={{width: '100%',}}>
      <Image source={require("../images/banner2.jpg")}  style={{
                               height:300,
                                width: '100%',
                                marginTop:0,
                                paddingTop:0
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
                          setScreen((currScreen) => currScreen +1);
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
                />



    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})