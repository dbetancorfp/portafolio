// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCNnPq3s7YuhziV2mEaDbBFaOEasupss6s",
  
    authDomain: "portfolio-c27b0.firebaseapp.com",
  
    projectId: "portfolio-c27b0",
  
    storageBucket: "portfolio-c27b0.firebasestorage.app",
  
    messagingSenderId: "580211137473",
  
    appId: "1:580211137473:web:ac03825559e35d6f60ed40",
  
    measurementId: "G-QQ0XPW927H"
  
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
