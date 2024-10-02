import React, { FunctionComponent, useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import CartProduct from "../types/cart-types";
import { CartContext } from "../contexts/CartContext";

interface CartItemProps {
  product: CartProduct;
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useContext(CartContext);
  const handleRemoveCLick = () => removeProductFromCart(product.id);
  const handleIncreaseClick = () => increaseProductQuantity(product.id);
  const handleDecreaseClick = () => decreaseProductQuantity(product.id);

  return (
    <div className="mb-4 flex items-center text-darkText">
      <div
        className="block h-64 w-44 rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url('${product.imageUrl}')` }}
      />
      <div className="ml-5 flex flex-1 flex-col">
        <p className="mb-1 font-semibold">{product.name}</p>
        <p className="font-medium">R${product.price}</p>
        <div className="mt-3 flex items-center">
          <AiOutlineMinus
            size={20}
            className="hover:cursor-pointer"
            onClick={handleDecreaseClick}
          />
          <p className="mx-3">{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            className="hover:cursor-pointer"
            onClick={handleIncreaseClick}
          />
        </div>
      </div>
      <div className="mr-5 hover:cursor-pointer" onClick={handleRemoveCLick}>
        <AiOutlineClose size={25} />
      </div>
    </div>
  );
};

export default CartItem;
