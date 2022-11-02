// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuZo9NDBdBeZ_EwoKWyfnGg-IJhwoJ0h4",
  authDomain: "erptest01.firebaseapp.com",
  databaseURL: "https://erptest01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "erptest01",
  storageBucket: "erptest01.appspot.com",
  messagingSenderId: "477435719994",
  appId: "1:477435719994:web:c874873cf561504047a003",
  measurementId: "G-ZGSBP9Y2JL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
