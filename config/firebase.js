
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBOIL2R-qN46YKjeL_1C1hUYDTcC0_Nw5s",
  authDomain: "dayonemytest.firebaseapp.com",
  projectId: "dayonemytest",
  storageBucket: "dayonemytest.appspot.com",
  messagingSenderId: "666241247316",
  appId: "1:666241247316:web:aa5e09819228cf6a99e5c1"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const AUTH = getAuth(FIREBASE_APP);
export const fbConfig = firebaseConfig
