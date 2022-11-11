import { initializeApp } from "firebase/app";

const credentials = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId:'app-firebase-af9ed',
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_ID,
  appId:process.env.REACT_APP_APP_ID
};

export const app = initializeApp(credentials);
