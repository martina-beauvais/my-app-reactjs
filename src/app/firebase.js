import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAHVp23d_RJW5-WcJRHsDuSAj1Gi20brk",
    authDomain: "fir-prueba-326b2.firebaseapp.com",
    projectId: "fir-prueba-326b2",
    storageBucket: "fir-prueba-326b2.appspot.com",
    messagingSenderId: "729273118299",
    appId: "1:729273118299:web:9ed15e5a6065e7afd7197e",
    measurementId: "G-V9LX0TE6Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)