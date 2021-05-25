import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBeDcBT4mlqV8fsJ2BtNZ66jdfKLF_0zSA",
  authDomain: "crwn-db-d029b.firebaseapp.com",
  projectId: "crwn-db-d029b",
  storageBucket: "crwn-db-d029b.appspot.com",
  messagingSenderId: "518760931854",
  appId: "1:518760931854:web:12f9b6cf90eaa65808925f",
  measurementId: "G-6FMK2EYN96",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
