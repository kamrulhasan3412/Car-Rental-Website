// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1pJyxJB3Mv0YAPypYXMCXcDpaBkxNOzs",
  authDomain: "simple-car-rental-website.firebaseapp.com",
  projectId: "simple-car-rental-website",
  storageBucket: "simple-car-rental-website.firebasestorage.app",
  messagingSenderId: "185969547391",
  appId: "1:185969547391:web:b20134ffc18e701146c74a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
