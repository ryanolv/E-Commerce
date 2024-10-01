/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { UserContextProvider } from "./contexts/UserContext.tsx";
import CategoryContextProvider from "./contexts/CategoryContext.tsx";
import CartContextProvider from "./contexts/CartContext.tsx";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  </StrictMode>,
);
