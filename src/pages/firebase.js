// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkmDI4D_0s8tGxE4GLsEzhe0Hb2l_G-6A',
  authDomain: 'firnas-aero-787a5.firebaseapp.com',
  projectId: 'firnas-aero-787a5',
  storageBucket: 'firnas-aero-787a5.appspot.com',
  messagingSenderId: '828055687156',
  appId: '1:828055687156:web:1c5d0835f08b4b4b4a33a1'
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app)
const db = getFirestore();
const storage = getStorage()

export {
  auth, db, storage
}