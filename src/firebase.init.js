// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvZQfW1y1seV1Tgz9dVlaQGH4xwdK-Luo",
  authDomain: "tech-tutor-bd.firebaseapp.com",
  projectId: "tech-tutor-bd",
  storageBucket: "tech-tutor-bd.appspot.com",
  messagingSenderId: "805759895008",
  appId: "1:805759895008:web:b4c9208136de4d1097d785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth