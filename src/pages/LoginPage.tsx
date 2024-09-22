/* eslint-disable react/react-in-jsx-scope */

import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { isEmail } from "validator";
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useContext } from "react";

import {
  auth,
  db,
  githubProvider,
  googleProvider,
} from "../config/firebase-config";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

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
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>();

  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmitPress: SubmitHandler<IFormValues> = async (
    data: IFormValues,
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      console.log(userCredential);
    } catch (error) {
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError("password", { type: "mismatch" });
        setError("email", { type: "mismatch" });
        return;
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredential.user.uid),
        ),
      );
      const user = querySnapshot.docs[0]?.data();
      if (!user) {
        const displayNameParts = userCredential.user.displayName?.split(" ");
        const lastName = displayNameParts
          ? displayNameParts[displayNameParts.length - 1]
          : "";
        await addDoc(collection(db, "users"), {
          id: userCredential.user.uid,
          email: userCredential.user.email,
          firstName: displayNameParts ? displayNameParts[0] : "",
          lastName,
          provieder: "google",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithGithub = async () => {
    try {
      const userCredential = await signInWithPopup(auth, githubProvider);
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredential.user.uid),
        ),
      );

      const user = querySnapshot.docs[0]?.data();
      if (!user) {
        const displayNameParts = userCredential.user.displayName?.split(" ");
        const lastName = displayNameParts
          ? displayNameParts[displayNameParts.length - 1]
          : "";
        await addDoc(collection(db, "users"), {
          id: userCredential.user.uid,
          email: userCredential.user.email,
          firstName: displayNameParts ? displayNameParts[0] : "",
          lastName,
          provider: "github",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-full items-center justify-center">
        <div className="flex w-[450px] flex-col items-center">
          <h1 className="text-color-darkText mb-5 text-xl font-semibold">
            Entre com a sua conta
          </h1>

          <CustomButton
            onClick={handleSignInWithGoogle}
            startIcon={<BsGoogle size={18} />}
          >
            Entrar com o Google
          </CustomButton>
          <CustomButton
            onClick={handleSignInWithGithub}
            startIcon={<FaGithub size={18} />}
          >
            Entrar com o GitHub
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
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
            {errors?.password?.type === "mismatch" && (
              <InputErrorMessage>
                As credenciais estão invalidas.
              </InputErrorMessage>
            )}
          </div>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
