// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "perfomio.firebaseapp.com",
  projectId: "perfomio",
  storageBucket: "perfomio.appspot.com",
  messagingSenderId: "1009541523969",
  appId: "1:1009541523969:web:a5ac22c022791c51396e00",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
