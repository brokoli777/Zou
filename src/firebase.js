// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9-ORWy788Io_ihOw9XNJ8AcY1h2_szLE",
  authDomain: "zouvideoapp.firebaseapp.com",
  projectId: "zouvideoapp",
  storageBucket: "zouvideoapp.appspot.com",
  messagingSenderId: "698907040045",
  appId: "1:698907040045:web:4709b9a23ab8eb02175ba4",
  measurementId: "G-3BBFXKCNY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

const analytics = getAnalytics(app);