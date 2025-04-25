import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmdR-O2i1GnqMYG-o1p88yrG8l77I43tE",
  authDomain: "revive-backend.firebaseapp.com",
  projectId: "revive-backend",
  storageBucket: "revive-backend.appspot.com",
  messagingSenderId: "609966215671",
  appId: "1:609966215671:web:ad8077c229c9c9a6009ef2",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
