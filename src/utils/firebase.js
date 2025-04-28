// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7BjFFkv0up9a6gcotauYCTHTHndF9qz8",
  authDomain: "netflixgpt-aa54e.firebaseapp.com",
  projectId: "netflixgpt-aa54e",
  storageBucket: "netflixgpt-aa54e.firebasestorage.app",
  messagingSenderId: "918342927146",
  appId: "1:918342927146:web:9c744ad35fe04f7fe71453",
  measurementId: "G-CH4W2M3ZXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();