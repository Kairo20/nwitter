import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-9MZ4XnB4iKoLmsUfF__IKUH73k8ZcyI",
  authDomain: "nwitter-ad0b8.firebaseapp.com",
  projectId: "nwitter-ad0b8",
  storageBucket: "nwitter-ad0b8.appspot.com",
  messagingSenderId: "87596792214",
  appId: "1:87596792214:web:31290bfe10b05f4b1a85b7",
};

const app = initializeApp(firebaseConfig);
export default app;
export const authService = getAuth(app);
export const dbService = getFirestore();
