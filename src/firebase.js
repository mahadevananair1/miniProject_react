// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdLJu_9-Tu_8BO0u44CJZtUMzSOeU19vw",
  authDomain: "mini-109e6.firebaseapp.com",
  databaseURL: "https://mini-109e6-default-rtdb.firebaseio.com",
  projectId: "mini-109e6",
  storageBucket: "mini-109e6.appspot.com",
  messagingSenderId: "644423425550",
  appId: "1:644423425550:web:b79ee74f2dce6d94c4a65f",
  measurementId: "G-LG04PKEQ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



