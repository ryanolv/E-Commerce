/* eslint-disable react/react-in-jsx-scope */

import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../config/firebase-config";

import Header from "../components/header/HeaderComponent";
import CustomInput from "../components/custom-input/CustomInputComponent";
import CustomButton from "../components/custom-button/CustomButtonComponent";
import InputErrorMessage from "../components/input-error-message/InputErrorMessage";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<IFormValues>();

  const watchPassword = watch("password");

  const handleSubmitPress = async (data: IFormValues) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      console.log(userCredentials);

      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="flex w-[450px] flex-col items-center">
          <p className="border-b-solid mb-5 w-full border-b-[#6C757D] pb-5 text-center text-xl font-semibold text-darkText">
            Crie sua conta
          </p>

          <div className="mb-5 w-full">
            <CustomInput
              hasError={errors?.firstName ? true : false}
              label="Nome"
              placeholder="digite seu nome"
              {...register("firstName", { required: true })}
            />
            {errors?.firstName?.type === "required" && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </div>
          <div className="mb-5 w-full">
            <CustomInput
              hasError={errors?.lastName ? true : false}
              label="Sobrenome"
              placeholder="digite seu sobrenome"
              {...register("lastName", {
                required: true,
              })}
            />
            {errors?.lastName?.type === "required" && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </div>
          <div className="mb-5 w-full">
            <CustomInput
              hasError={errors?.email ? true : false}
              label="E-mail"
              placeholder="digite seu e-mail"
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
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}
          </div>
          <div className="mb-5 w-full">
            <CustomInput
              hasError={errors?.password ? true : false}
              label="Senha"
              type="password"
              placeholder="digite sua senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
          </div>
          <div className="mb-5 w-full">
            <CustomInput
              hasError={errors?.passwordConfirmation ? true : false}
              label="Confirmação de senha"
              type="password"
              placeholder="digite novamente sua senha"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => value === watchPassword,
              })}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória.
              </InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === "validate" && (
              <InputErrorMessage>
                A confirmação de senha precisa ser igual a senha.
              </InputErrorMessage>
            )}
          </div>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar conta
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
