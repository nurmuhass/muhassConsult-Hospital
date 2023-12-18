import { View, Text } from 'react-native'
import {createStackNavigator, createNativeStackNavigator,TransitionPresets} from '@react-navigation/native-stack';
import { Login, Signup, Welcome } from '../screens/authScreens'
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import SignUpWelcome from '../screens/SignUpWelcome';


const Stack = createNativeStackNavigator();

export function AuthStack(){
    return(
        <Stack.Navigator>
      <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Welcome}
          name="Welcome"
          options={{headerShown: false}}
        />   
        
       <Stack.Screen
        component={Signup}
        name="Signup"
        options={{headerShown: false}}
      /> 
       <Stack.Screen name="SignUpWelcome" component={SignUpWelcome}  options={{headerShown: false}}/> 
      <Stack.Screen
      component={Login}
      name="Login"
      options={{headerShown: false}}
    />    
                   
        </Stack.Navigator>
    )
}

export default AuthStack