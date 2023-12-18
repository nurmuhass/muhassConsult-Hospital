// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

    const firebaseConfig = {
        apiKey: "AIzaSyBcT9xC-rs5cDqS_689usyBkhGc-bNqAiM",
        authDomain: "muhass-consult.firebaseapp.com",
        projectId: "muhass-consult",
        storageBucket: "muhass-consult.appspot.com",
        messagingSenderId: "1062998319080",
        appId: "1:1062998319080:web:c761d7ee1e1b51de880e5d"
      };
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);
export { auth };
export { db };
export { storage };





