import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJLpy1m8gyC0vVbzc7dGG3pdjjXm3R8wE",
  authDomain: "proyecto-coderhouse-goldner.firebaseapp.com",
  projectId: "proyecto-coderhouse-goldner",
  storageBucket: "proyecto-coderhouse-goldner.appspot.com",
  messagingSenderId: "674871701846",
  appId: "1:674871701846:web:e71964e5861b62c427e6f7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
