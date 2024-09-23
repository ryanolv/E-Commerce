/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { auth, db } from "./config/firebase-config";
import { UserContext } from "./contexts/UserContext";
import { userConverter } from "./converters/firestore-converters";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";

import Loading from "./components/loading/Loading";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";

function App() {
  const [isInitializing, setIsInitializing] = useState(true);
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;
    if (isSigningOut) {
      logoutUser();
      return setIsInitializing(false);
    }

    const isSigningIn = !isAuthenticated && user;
    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users").withConverter(userConverter),
          where("id", "==", user.uid),
        ),
      );
      const userFromFirestore = querySnapshot.docs[0]?.data();
      loginUser(userFromFirestore);
      return setIsInitializing(false);
    }

    return setIsInitializing(false);
  });

  if (isInitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
