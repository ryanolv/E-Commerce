import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu1Ea6_O8m58yWOTvCT4SimzeZq9_Nico",
  authDomain: "fsc-ecommerce.firebaseapp.com",
  projectId: "fsc-ecommerce",
  storageBucket: "fsc-ecommerce.appspot.com",
  messagingSenderId: "579290913100",
  appId: "1:579290913100:web:7cfc6b57145fcd2649d7e9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, db, auth, googleProvider };
