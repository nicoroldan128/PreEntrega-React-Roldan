// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1S2pkQf9GyP39oUtTsz3VxAITtYX1ZBE",
  authDomain: "drinkapp-react.firebaseapp.com",
  projectId: "drinkapp-react",
  storageBucket: "drinkapp-react.appspot.com",
  messagingSenderId: "756281349127",
  appId: "1:756281349127:web:e1886f1d665c49d50286a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseConnect = () => app