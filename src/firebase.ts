// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKSfWi3dQ0r5UB35ezqwQZppTFmxkBPpE",
  authDomain: "ta-festivals-checklist-poc.firebaseapp.com",
  projectId: "ta-festivals-checklist-poc",
  storageBucket: "ta-festivals-checklist-poc.appspot.com",
  messagingSenderId: "84928694354",
  appId: "1:84928694354:web:d1f486b3e157104570b78b",
  measurementId: "G-98V8L58S6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);