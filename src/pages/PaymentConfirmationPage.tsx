import React, { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome,
} from "react-icons/ai";

import Header from "../components/header/HeaderComponent";
import CustomButton from "../components/custom-button/CustomButtonComponent";
import { CartContext } from "../contexts/CartContext";

const PaymentConfirmationPage: FunctionComponent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearProducts } = useContext(CartContext);

  const status = searchParams.get("success");
  const isCanceld = searchParams.get("canceled") === "true";

  useEffect(() => {
    if (status === "true") {
      clearProducts();
    }
  }, [status]);

  const handleGoToHomePageClick = () => navigate("/");

  return (
    <>
      <Header />
      <div className="flex h-full flex-col items-center">
        <div className="flex h-full w-[500px] flex-col items-center justify-center text-center">
          {status === "true" && (
            <>
              <AiOutlineCheckCircle size={120} color="bg-success" />
              <p className="my-4 text-xl font-medium">
                Sua compra foi finalizada com sucesso!
              </p>
            </>
          )}
          {(status === "false" || isCanceld) && (
            <>
              <AiOutlineCloseCircle size={120} color="bg-error" />
              <p className="my-4 text-xl font-medium">
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </p>
            </>
          )}
          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}
          >
            Ir para a Página Inicial
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default PaymentConfirmationPage;
