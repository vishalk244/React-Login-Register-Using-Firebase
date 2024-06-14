// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBePGLVGhcjhPrt0-NjdFm-BKljgVHWtq8",
  authDomain: "login-register-react-firebase.firebaseapp.com",
  projectId: "login-register-react-firebase",
  storageBucket: "login-register-react-firebase.appspot.com",
  messagingSenderId: "569429065179",
  appId: "1:569429065179:web:0bec5872b4cb306e1afbfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;