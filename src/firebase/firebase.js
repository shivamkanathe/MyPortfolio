import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAPwjOhuXz-7JD8530iZk5UorLRjxXv0og",
  authDomain: "myportfolio-ae6ec.firebaseapp.com",
  projectId: "myportfolio-ae6ec",
  storageBucket: "myportfolio-ae6ec.appspot.com",
  messagingSenderId: "78888137335",
  appId: "1:78888137335:web:069bad34a62092c1c20c72",
  measurementId: "G-FB64V11W62"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;