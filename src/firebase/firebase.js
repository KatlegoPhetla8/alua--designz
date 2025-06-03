// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChfpYOhv5UAhChgwXU7U6-0glFLtCPPy0",
  authDomain: "alua-designz.firebaseapp.com",
  projectId: "alua-designz",
  storageBucket: "alua-designz.firebasestorage.app",
  messagingSenderId: "1031719546965",
  appId: "1:1031719546965:web:17cf5e13c8d80fd27224dc",
  measurementId: "G-R61K187B6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db, app, analytics}