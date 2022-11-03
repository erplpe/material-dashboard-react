// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2w7DigspkHrTdRc4X0pumDkmwfgbPwgk",
  authDomain: "erptest2-9e431.firebaseapp.com",
  projectId: "erptest2-9e431",
  storageBucket: "erptest2-9e431.appspot.com",
  messagingSenderId: "319025637929",
  appId: "1:319025637929:web:44aa1a9a82d3959830ca38",
  measurementId: "G-QBEXJ1LYXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
