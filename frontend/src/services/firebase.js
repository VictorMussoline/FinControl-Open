import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCbWHNw3gK9tCVxqjXLBECRlZ5nZwUkOcw",
  authDomain: "fincontrolvm.firebaseapp.com",
  projectId: "fincontrolvm",
  storageBucket: "fincontrolvm.firebasestorage.app",
  messagingSenderId: "194958790927",
  appId: "1:194958790927:web:2fbdb4ce971fd8084aee7a",
  measurementId: "G-RJXNBB5PRD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

