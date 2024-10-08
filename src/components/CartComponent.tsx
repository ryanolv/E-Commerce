import React, { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import CustomButton from "./custom-button/CustomButtonComponent";
import CartItem from "./CartItem";

const Cart: FunctionComponent = () => {
  const { isVisible, productsCout, productsTotalPrice, toggleCart, products } =
    useContext(CartContext);
  const navigate = useNavigate();
  const handleGoToCheckoutClick = () => {
    navigate("/checkout");
    toggleCart();
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen justify-end bg-black bg-opacity-70 transition-all duration-300 ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="w-full" onClick={toggleCart} />
      <div className="z-[200] h-full min-w-[500px] overflow-y-scroll bg-white p-5">
        <p className="mb-4 text-2xl font-semibold">Seu Carrinho</p>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCout > 0 && (
          <p className="mb-4 text-xl font-semibold">
            Total: R${productsTotalPrice}
          </p>
        )}

        {productsCout > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleGoToCheckoutClick}
          >
            Ir para o Checkout
          </CustomButton>
        )}

        {productsCout === 0 && <p>Seu carrinho está vazio</p>}
      </div>
    </div>
  );
};

export default Cart;
