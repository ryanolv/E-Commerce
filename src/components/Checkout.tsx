import React, { FunctionComponent, useContext, useState } from "react";
import { BsBagCheck } from "react-icons/bs";
import axios from "axios";

import { CartContext } from "../contexts/CartContext";

import CustomButton from "./custom-button/CustomButtonComponent";
import CartItem from "./CartItem";
import Loading from "./loading/Loading";

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext);
  const [isLoading, setIsloading] = useState(false);
  const handleFinishPushaseClick = async () => {
    try {
      setIsloading(true);
      const apiUrl = process.env.REACT_APP_API_URL;
      const { data } = await axios.post(`${apiUrl}/create-checkout-session`, {
        products,
      });
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-hidden py-8">
        {isLoading && <Loading message="Finalizando compra..." />}
        <p className="text-2xl font-bold">Checkout</p>

        {products.length > 0 ? (
          <>
            <div className="my-4 min-w-[650px] overflow-y-scroll scrollbar-thin scrollbar-thumb-darkText">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <p className="mb-4 w-[650px] text-xl font-semibold">
              Total: R${productsTotalPrice}
            </p>
            <CustomButton
              className="w-[650px]"
              startIcon={<BsBagCheck />}
              onClick={handleFinishPushaseClick}
            >
              Finalizar Compra
            </CustomButton>
          </>
        ) : (
          <p>Seu carrinho está vazio. </p>
        )}
      </div>
    </>
  );
};

export default Checkout;
