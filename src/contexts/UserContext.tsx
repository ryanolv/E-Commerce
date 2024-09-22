import React, { createContext, FunctionComponent, useState } from "react";
import User from "../types/user-types";

interface IUserContext {
  currentUser: User | null;
  isAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

interface IUserContextProvider {
  children: React.ReactNode;
}

const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

const UserContextProvider: FunctionComponent<IUserContextProvider> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const isAuthenticated = currentUser !== null;

  const loginUser = (user: User) => setCurrentUser(user);
  const logoutUser = () => setCurrentUser(null);

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
