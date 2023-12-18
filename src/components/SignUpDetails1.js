import { StyleSheet, Text, View,Alert, StatusBar, ScrollView,SafeAreaView,TextInput,Image, ImageBackground} from 'react-native'
import {parameters, colors} from '../global/styles';
import { Button,SocialIcon} from '@rneui/themed';
import React , { useState, useEffect ,useContext} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { storage} from '../utils/firebaseHelper'
import { db} from '../utils/firebaseHelper'
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged ,User} from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Checkbox from 'expo-checkbox';

export default function SignUpDetails1({navigation}) {
  const [Category, setCategory] = useState();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [Oprice, setOprice] = useState('');
  const [DiscountPercent, setDiscountPercent] = useState('');
  const [Shipping, setShipping] = useState('');
  const [ProFrom, setProFrom] = useState('');
  const [DeliveryOn, setDeliveryOn] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const {navigate} = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
//get user
const auth = getAuth();
const user= auth.currentUser;

const uploadData = async () => {

try {
   
  const docRef =   await addDoc(collection(db, "post"), {
      userId:user.uid,
       title: title,
       Category:Category,
       price:price,
       desc:desc,
       postTime: Date.now(),
       WhishList: null,
       Reviews: null,
       quantity:1,
       
       DeliveryOn:DeliveryOn
     });
     console.log('Post Added!');
  navigate("ProductDetails3",{item:docRef.docId})

} catch (e) {
    console.error(e);
  } finally {
   
  }
};

const takePhotoFromCamera = () => {
  ImagePicker.openCamera({
    compressImageMaxWidth: 300,
    compressImageMaxHeight: 300,
    cropping: true,
    compressImageQuality: 0.7,
  }).then((image) => {
    console.log(image);
    const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
    setImage(imageUri);
    this.bs.current.snapTo(1);
  });
};

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
    <SafeAreaView style={{}}>

<Ionicons name="chevron-back" size={24} color="black" onPress={ () => {
          navigation.goBack();
       }} style={{justifyContent:'flex-start',alignSelf:'flex-start'}}/>

<TouchableOpacity
        style={{  padding: 13,
          borderRadius: 50,
          alignItems: 'center',width:100,height:100,backgroundColor:'#555',justifyContent:'center',alignSelf:'center'}}
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

  <TextInput
        style={styles.input}
        value={title}
        placeholder='Full name'
       onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        value={title}
        placeholder='Email'
       onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        value={title}
        placeholder=' Password'
       onChangeText={(text) => setTitle(text)} secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={title}
        placeholder='Phone Number'
       onChangeText={(text) => setTitle(text)}
      />
       <TextInput
        style={styles.input}
        value={title}
        placeholder='Working Since'
       onChangeText={(text) => setTitle(text)}
      />
      

      <View
        style={{
         
          borderColor: colors.grey3,
          borderBottomWidth: 1,
          width:'95%',
          margin:10,
          borderRadius:8
          
        }}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={400}
          onChangeText={text => setDesc(text)}
          value={desc}
          style={{padding: 10,}}
          placeholder='Bio'
        />
        </View>
  
        <View style={{
                    flexDirection: 'row',
                    marginVertical: 20,
                    marginLeft:15
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text style={{lineHeight:20}}>{'By Continuing you agree to our \n Terms of service and privacy policy'}</Text>
                   
        </View>


</SafeAreaView>


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
  borderRadius:8
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