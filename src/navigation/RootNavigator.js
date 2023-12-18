import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './HomeStack'
import { AuthStack } from './AuthStack';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebaseHelper';
import { useAuth } from '../Hooks/UseAuth'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/user';

export default function RootNavigator(){


   const {user} = useSelector(state=> state.user);

   const dispatch = useDispatch();

   onAuthStateChanged(auth, u=>{
       // console.log('got user: ',u);
       dispatch(setUser(u));
   })


   if (user !== undefined) {
       return (
         <NavigationContainer>
           {user ? <Tabs/> : <AuthStack />}
         </NavigationContainer>
       );
     } else {
       // You can render a loading state or null while waiting for the auth state.
       return null;
     }

    }
    
    



