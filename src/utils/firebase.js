// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQF5yazqkEqa69Sl17BdP_RW_FiyBjaQ",
  authDomain: "reactflix-gpt.firebaseapp.com",
  projectId: "reactflix-gpt",
  storageBucket: "reactflix-gpt.appspot.com",
  messagingSenderId: "3702506637",
  appId: "1:3702506637:web:802c0ccf4f80363a910ec4",
  measurementId: "G-JXF7ZMVDZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);