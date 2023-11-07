// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
]*/

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyArhkgEhV4OOx6a32WFNlq_2bvCT69RdBo",
  authDomain: "app-movie-db-caa3c.firebaseapp.com",
  projectId: "app-movie-db-caa3c",
  storageBucket: "app-movie-db-caa3c.appspot.com",
  messagingSenderId: "801707643051",
  appId: "1:801707643051:web:063c76fa0587c138b1e7ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
