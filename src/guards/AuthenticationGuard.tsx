import React, { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

import Header from "../components/header/HeaderComponent";
import Loading from "../components/loading/Loading";

interface AuthenticationProps {
  children: React.ReactNode;
}

const AuthenticationGuard: FunctionComponent<AuthenticationProps> = ({
  children,
}) => {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [isAuthenticated]);
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login." />
      </>
    );
  }
  return <>{children}</>;
};

export default AuthenticationGuard;
