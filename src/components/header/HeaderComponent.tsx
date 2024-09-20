/* eslint-disable react/react-in-jsx-scope */
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="m-0 flex w-full justify-between bg-[#212529] p-5 text-white">
      <h2 className="text-2xl font-bold">CLUB CLOTHING</h2>
      <div className="flex items-center justify-between space-x-5">
        <div className="flex items-center text-base font-semibold">
          Explorar
        </div>
        <div
          className="flex cursor-pointer items-center text-base font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </div>
        <div
          className="flex items-center text-base font-semibold"
          onClick={handleSignUpClick}
        >
          Criar Conta
        </div>
        <div className="flex items-center text-base font-semibold">
          <BsCart3 size={25} />
          <p className="ml-1">5</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
