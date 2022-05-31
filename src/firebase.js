import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fr-admin-dashboard.firebaseapp.com",
  projectId: "fr-admin-dashboard",
  storageBucket: "fr-admin-dashboard.appspot.com",
  messagingSenderId: "510470687595",
  appId: "1:510470687595:web:fb74d94d0be2997b7cda2e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);