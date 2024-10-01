/* eslint-disable react/react-in-jsx-scope */
import { signOut } from "firebase/auth";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { auth } from "../../config/firebase-config";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

function Header() {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);
  const { toggleCart } = useContext(CartContext);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleExploreClick = () => {
    navigate("/explore");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="m-0 flex w-full justify-between bg-[#212529] p-5 text-white">
      <h2
        className="cursor-pointer text-2xl font-bold"
        onClick={handleLogoClick}
      >
        CLUB CLOTHING
      </h2>
      <div className="flex items-center justify-between space-x-5">
        <div
          className="flex cursor-pointer items-center text-base font-semibold"
          onClick={handleExploreClick}
        >
          Explorar
        </div>
        {!isAuthenticated && (
          <>
            <div
              className="flex cursor-pointer items-center text-base font-semibold"
              onClick={handleLoginClick}
            >
              Login
            </div>
            <div
              className="flex cursor-pointer items-center text-base font-semibold"
              onClick={handleSignUpClick}
            >
              Criar Conta
            </div>
          </>
        )}
        {isAuthenticated && (
          <div
            className="flex cursor-pointer items-center text-base font-semibold"
            onClick={() => signOut(auth)}
          >
            Sair
          </div>
        )}

        <div
          className="flex cursor-pointer items-center text-base font-semibold"
          onClick={toggleCart}
        >
          <BsCart3 size={25} />
          <p className="ml-1">5</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
