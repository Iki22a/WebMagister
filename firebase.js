// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcJVXoVRZjgyJhYtwGqc-HLig7jVYPIVM",
    authDomain: "webmagister-ca101.firebaseapp.com",
    projectId: "webmagister-ca101",
    storageBucket: "webmagister-ca101.appspot.com",
    messagingSenderId: "568316995023",
    appId: "1:568316995023:web:464b0c477cfad5a2ac5eba",
    measurementId: "G-0D23TRQPPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database connection
const db = getFirestore();

export const getRama = () => getDocs(collection(db, 'ramas'))
export const getProvincia = () =>getDocs(collection(db, 'provincias'))
export const getHorario = () =>getDocs(collection(db, 'horarios'))
export const getCA = () =>getDocs(collection(db, 'comunidades'))


