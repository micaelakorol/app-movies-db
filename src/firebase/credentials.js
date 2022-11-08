import { initializeApp } from "firebase/app";
import { apiKey, appId, auth, messagingSenderId, proyectId, storageBucket } from "../api_key";

const credentials = {
  apiKey: apiKey,
  authDomain: auth,
  projectId: proyectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

export const app = initializeApp(credentials);
