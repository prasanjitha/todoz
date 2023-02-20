// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyBWtmPq1Am9Qqej84zxhadwSuOmb3VSFBI",
    authDomain: "todo-1ba3a.firebaseapp.com",
    databaseURL: "https://todo-1ba3a-default-rtdb.firebaseio.com",
    projectId: "todo-1ba3a",
    storageBucket: "todo-1ba3a.appspot.com",
    messagingSenderId: "652835630389",
    appId: "1:652835630389:web:9b5db80aa951456424b07c",
    measurementId: "G-QZX5Y1SLR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase();