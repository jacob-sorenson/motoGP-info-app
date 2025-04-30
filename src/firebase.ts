// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrhqbtwjZQBTg-dIMQDv_z1Q1GmS80duI",
  authDomain: "motogp-info-app-backend.firebaseapp.com",
  projectId: "motogp-info-app-backend",
  storageBucket: "motogp-info-app-backend.firebasestorage.app",
  messagingSenderId: "810321778360",
  appId: "1:810321778360:web:687800b4f801f9d282c64d",
  measurementId: "G-VR3B72GKYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app); 

const db = getFirestore(app);

export { app, auth, db };