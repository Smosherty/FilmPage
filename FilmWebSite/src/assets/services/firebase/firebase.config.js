// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR4Tz4euAO7EHy0bstcYkBCqPYzqO8-1g",
  authDomain: "filmwebsitedaniel.firebaseapp.com",
  projectId: "filmwebsitedaniel",
  storageBucket: "filmwebsitedaniel.appspot.com",
  messagingSenderId: "1086607959028",
  appId: "1:1086607959028:web:c19d32d3de55fb0093cfa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;