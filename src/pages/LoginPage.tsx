/* eslint-disable react/react-in-jsx-scope */

import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { isEmail } from "validator";

import CustomButton from "../components/custom-button/CustomButtonComponent";
import Header from "../components/header/HeaderComponent";
import CustomInput from "../components/custom-input/CustomInputComponent";
import InputErrorMessage from "../components/input-error-message/InputErrorMessage";

interface IFormValues extends SubmitHandler<FieldValues> {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) =>
    console.log(data);

  console.log(errors);

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
              hasError={errors?.email ? true : false}
              label="E-mail"
              type="text"
              placeholder="Digite o seu e-mail"
              {...register("email", {
                required: true,
                validate: (value) => isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}
            {errors?.email?.type === "validate" && (
              <InputErrorMessage>
                Por favor, insira um endereço de e-mail válido.
              </InputErrorMessage>
            )}
          </div>
          <div className="mb-5 w-full">
            <CustomInput
              hasError={errors?.password ? true : false}
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha obrigatório.</InputErrorMessage>
            )}
          </div>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Entrar
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
