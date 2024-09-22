/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import User from "./types/user-types";
import { auth, db } from "./config/firebase-config";
import { UserContext } from "./contexts/UserContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;
    if (isSigningOut) return logoutUser();

    const isSigningIn = !isAuthenticated && user;
    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("id", "==", user.uid)),
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();
      return loginUser(userFromFirestore as User);
    }
  });

  console.log({ isAuthenticated });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
