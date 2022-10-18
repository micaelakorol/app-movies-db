import { initializeApp } from "firebase/app";
import { fire_key, id_key } from "../api_key";

const credentials = {
  apiKey: fire_key,
  authDomain: "test-web-8fa38.firebaseapp.com",
  projectId: "test-web-8fa38",
  storageBucket: "test-web-8fa38.appspot.com",
  messagingSenderId: "364318766611",
  appId: id_key,
};

export const app = initializeApp(credentials);
