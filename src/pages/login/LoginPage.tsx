/* eslint-disable react/react-in-jsx-scope */

import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../components/custom-button/CustomButtonComponent";
import Header from "../../components/header/HeaderComponent";
import CustomInput from "../../components/custom-input/CustomInputComponent";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="flex w-[450px] flex-col items-center">
          <h1 className="text-color-darkText mb-5 text-xl font-semibold">
            Entre com a sua conta
          </h1>

          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>
          <p className="border-b-color-bgDark text-color-textDark my-5 mt-5 w-full border-b pb-5 text-center font-medium">
            ou entre com o seu e-mail
          </p>
          <div className="mb-5 w-full">
            <CustomInput
              label="E-mail"
              type="email"
              placeholder="Digite o seu e-mail"
            />
          </div>
          <div className="mb-5 w-full">
            <CustomInput
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
