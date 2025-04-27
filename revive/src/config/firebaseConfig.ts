// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7z4VP5Oexit5wvp4rVfwiBZX7Pe3KL1o",
  authDomain: "new-revive.firebaseapp.com",
  databaseURL: "https://new-revive-default-rtdb.firebaseio.com",
  projectId: "new-revive",
  storageBucket: "new-revive.firebasestorage.app",
  messagingSenderId: "710369410669",
  appId: "1:710369410669:web:a3893a15ff57ceef534964",
  measurementId: "G-YQPXE2TK61",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
