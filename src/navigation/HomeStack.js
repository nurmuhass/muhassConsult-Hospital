
import { StyleSheet, Text, View ,Animated} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {collection,getDoc,getDocs,addDoc,updateDoc,doc ,set,setDoc} from "firebase/firestore"; 
import React,{useState,useRef,useEffect,useContext} from 'react';
import {useIsFocused} from '@react-navigation/native';
import SignUpWelcome from '../screens/SignUpWelcome';


const Tabs = () => {

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return(
 
      
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
         // opacity: loading ? 0 : 1,
          backgroundColor:'#fff'
       }, 
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          }
          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
  
      <Tab.Screen name="Home"  component={Home}/>
   
 
      </Tab.Navigator>
     
    )
  }


  return (
   
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>



      <Stack.Screen name="Bottom" component={BottomTabScreen} tabBarStyle={{}}/>
      <Stack.Screen name="SignUpWelcome" component={SignUpWelcome} tabBarStyle={{}}/>
       
    </Stack.Navigator>
 

  );
}
export default Tabs