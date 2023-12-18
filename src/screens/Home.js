import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebaseHelper'

const Home = () => {
  return (
    <View style={{marginTop:40}}>
      <TouchableOpacity onPress={() => signOut(auth)}>
            <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home