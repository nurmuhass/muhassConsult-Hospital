import { StyleSheet, Text, View,Alert, StatusBar, ScrollView,SafeAreaView,TextInput,Image,FlatList} from 'react-native'
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import React , { useState, useEffect ,useContext} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { storage} from '../utils/firebaseHelper'
import { db} from '../utils/firebaseHelper'
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, arrayUnion ,doc} from "firebase/firestore"; 
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

export default function SignUpDetails3() {
  const [modalVisible, setModalVisible] =useState(false);
  const [image, setImage] = useState(null);

  const choosePhotoFromLibrary = async() => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
   
      });
  
  if (!result.canceled) {
        setImage(result.uri);
        
      }
    }
    
  

  return (
<SafeAreaView style={{paddingTop:parameters.statusBarHeight}}>
  <ScrollView>
    <StatusBar
   translucent
   barStyle="light-content" />
  
<View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:7}}>
  <Text style={{fontWeight:'bold'}}>Id proof</Text>
  <TouchableOpacity  onPress ={()=>{setModalVisible(true)}}> 
        <Text style={{color:'#39B68D'}}>Add</Text> 
  </TouchableOpacity>
</View>

<View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:7,marginTop:20}}>
  <Text style={{fontWeight:'bold'}}>Id proof</Text>
  <TouchableOpacity  onPress ={()=>{setModalVisible(true)}}> 
        <Image source={{uri:image}}/>
  </TouchableOpacity>
</View>


  </ScrollView>

    

  <Modal
 animationType = "fade"
 transparent = {true}
 visible = {modalVisible}

>
<View  style={{width:'80%',height:'80%',alignSelf:'center',backgroundColor:'#fff',marginTop:'30%',borderRadius:15}}>


<View style={{flexDirection:'row',}}>
<TouchableWithoutFeedback onPress={() => setModalVisible(false)} >

<MaterialIcons name="cancel" size={27} color="#555" style={{alignSelf:'flex-start',marginLeft:3,marginTop:3}}/>

</TouchableWithoutFeedback>


<Text style={{justifyContent:'center',alignSelf:'center',alignItems:'center',marginLeft:80,fontWeight:'bold'}}>Upload Document</Text>
</View>



<TouchableOpacity
        style={{  padding: 13,
          borderRadius: 10,
          alignItems: 'center',width:100,height:100,backgroundColor:'#f0f0f0',justifyContent:'center',alignSelf:'center',marginTop:10}}
        onPress={choosePhotoFromLibrary}>
           <ImageBackground
              source={{
                uri: image
              }}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 15}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="camera"
                  size={35}
                  color="#fff"
                  style={{
                    opacity: 0.7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }}
                />
              </View>
            </ImageBackground>
  </TouchableOpacity>


<View
        style={{
          borderColor: colors.grey3,
          borderBottomWidth: 1,
          width:'85%',
          margin:10,
          borderRadius:8,
          marginTop:30,
          alignSelf:'center',
        }}>
        <TextInput
          editable
          maxLength={600}
      //    onChangeText={text => setReview(text)}
        //  value={Review}
          style={{padding: 10,}}
          placeholder='Name'
        />
        </View>

        <View
        style={{
          borderColor: colors.grey3,
          borderBottomWidth: 1,
          width:'85%',
          margin:10,
          borderRadius:8,
          marginTop:30,
          alignSelf:'center',
        }}>
        <TextInput
          editable
          numberOfLines={1}
          maxLength={600}
      //    onChangeText={text => setReview(text)}
        //  value={Review}
          style={{padding: 10,}}
          placeholder='Description'
        />
        </View>

<View style={{marginTop:15}}>
  <TouchableOpacity onPress={() => setModalVisible(false)} >
  <Button buttonStyle={{backgroundColor:'#686de0',
  width:280,alignSelf:'center',borderRadius:30}} title='Post Review' />
  </TouchableOpacity>
 
</View>
</View>
</Modal>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f0f0f0",
    paddingBottom:5,
    flex:1,
    
},

})