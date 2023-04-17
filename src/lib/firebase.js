
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA76jHaHAWsLOay7b173kvgjkMXp7T4QxA",
  authDomain: "social-f932c.firebaseapp.com",
  projectId: "social-f932c",
  storageBucket: "social-f932c.appspot.com",
  messagingSenderId: "1060440209507",
  appId: "1:1060440209507:web:a6f949456d3818f81fa056"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
