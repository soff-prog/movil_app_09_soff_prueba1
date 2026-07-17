// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDauT2iY3U_8O7KG6hblCoqLViPvDwHcLA",
  authDomain: "app-09-prueba1.firebaseapp.com",
  databaseURL: "https://app-09-prueba1-default-rtdb.firebaseio.com",
  projectId: "app-09-prueba1",
  storageBucket: "app-09-prueba1.firebasestorage.app",
  messagingSenderId: "1014765936329",
  appId: "1:1014765936329:web:f13277896fe313aecf7718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);