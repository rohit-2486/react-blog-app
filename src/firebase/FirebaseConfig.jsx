// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDP8dJajW5A_UFXmNmmI1ulcTcnsES4YMw",
  authDomain: "myblog-54dfe.firebaseapp.com",
  projectId: "myblog-54dfe",
  storageBucket: "myblog-54dfe.appspot.com",
  messagingSenderId: "261304286938",
  appId: "1:261304286938:web:d4a1cc437941f76d5c6fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}