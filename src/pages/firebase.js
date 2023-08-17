// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSANGER_ID,
  appId: process.env.FIREBASE_APPID
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app)
const db = getFirestore();
const storage = getStorage()

export {
  auth, db, storage
}