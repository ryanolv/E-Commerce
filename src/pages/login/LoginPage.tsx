/* eslint-disable react/react-in-jsx-scope */

import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../components/custom-button/CustomButtonComponent";
import Header from "../../components/header/HeaderComponent";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="flex w-[450px] flex-col items-center">
          <h1 className="text-color-secundary mb-5 text-xl font-semibold">
            Entre com a sua conta
          </h1>

          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>
          <p className="border-b-color-secundary text-color-secundary my-5 mt-5 w-full border-b pb-5 text-center font-medium">
            ou entre com o seu e-mail
          </p>
          <div className="mb-5 w-full">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="mb-1 w-full font-semibold">
            <label>Senha</label>
            <input type="password" />

            <CustomButton startIcon={<FiLogIn size={18} />}>
              Entrar
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
