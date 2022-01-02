import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBUlUBsYowdDo3Ti70YptPKB0sI1TMrXJQ",
    authDomain: "chatapp-89374.firebaseapp.com",
    projectId: "chatapp-89374",
    storageBucket: "chatapp-89374.appspot.com",
    messagingSenderId: "157789973109",
    appId: "1:157789973109:web:05de9b8b56825c590b663c",
  })
  .auth();
