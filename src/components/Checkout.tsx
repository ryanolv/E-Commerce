import React, { FunctionComponent, useContext } from "react";
import { BsBagCheck } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

import CustomButton from "./custom-button/CustomButtonComponent";
import CartItem from "./CartItem";

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext);

  return (
    <>
      <div className="flex flex-col items-center overflow-hidden py-8">
        <p className="text-2xl font-bold">Checkout</p>

        {products.length > 0 ? (
          <>
            <div className="scrollbar-thin scrollbar-thumb-darkText my-4 min-w-[650px] overflow-y-scroll">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <p className="mb-4 w-[650px] text-xl font-semibold">
              Total: R${productsTotalPrice}
            </p>
            <CustomButton className="w-[650px]" startIcon={<BsBagCheck />}>
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
