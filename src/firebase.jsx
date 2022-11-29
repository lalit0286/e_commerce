import { initializeApp, } from "firebase/app";
import {getAuth}from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyClF8OaB8nf5qOrMZEE8XrT-cQUigRCPmA",
  authDomain: "e-commerce-26d1a.firebaseapp.com",
  projectId: "e-commerce-26d1a",
  storageBucket: "e-commerce-26d1a.appspot.com",
  messagingSenderId: "924928324507",
  appId: "1:924928324507:web:33ec3f3e465db860a8e73e",
  measurementId: "G-X9V0NME8MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export {auth}

