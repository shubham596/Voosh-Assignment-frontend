// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACkFLBUEk6YNApLZXQeBjC9LLQJvoQ6Qw",
  authDomain: "voosh-assignment-16a8f.firebaseapp.com",
  projectId: "voosh-assignment-16a8f",
  storageBucket: "voosh-assignment-16a8f.appspot.com",
  messagingSenderId: "790470305478",
  appId: "1:790470305478:web:582ad319c45045b50919c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)