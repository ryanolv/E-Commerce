import React, { createContext, FunctionComponent, useState } from "react";

import CartProduct from "../types/cart-types";

interface ICartContext {
  isVisible: boolean;
  products: CartProduct[];
  toggleCart: () => void;
}

interface ICartContextProvider {
  children: React.ReactNode;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
});

const CartContextProvider: FunctionComponent<ICartContextProvider> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products] = useState<CartProduct[]>([]);

  const toggleCart = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
