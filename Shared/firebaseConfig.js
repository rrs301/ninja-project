// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "tubeguruji-app.firebaseapp.com",
  projectId: "tubeguruji-app",
  storageBucket: "tubeguruji-app.appspot.com",
  messagingSenderId: "887202519021",
  appId: "1:887202519021:web:0bfc7a52188630ccf979e4",
  measurementId: "G-NJEW24E7FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app