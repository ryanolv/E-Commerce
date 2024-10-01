import React, { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

import Product from "../types/product-types";
import CustomButton from "./custom-button/CustomButtonComponent";

import { CartContext } from "../contexts/CartContext";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);
  const handleAddProductToCart = () => {
    addProductToCart(product);
  };
  return (
    <div className="flex flex-col">
      <div
        className="flex h-96 w-72 items-end rounded-lg bg-transparent bg-cover bg-center bg-no-repeat bg-blend-color shadow-md shadow-slate-800 transition-all hover:cursor-pointer hover:bg-black hover:bg-opacity-50"
        style={{ backgroundImage: `url('${product.imageUrl}')` }}
      >
        <CustomButton
          className="m-5 bg-bgDark opacity-0 transition-all hover:opacity-100"
          startIcon={<BsCartPlus />}
          onClick={handleAddProductToCart}
        >
          Adicionar ao carrinho
        </CustomButton>
      </div>
      <div className="mt-1 flex justify-between">
        <p className="text-base font-medium">{product.name}</p>
        <p className="text-base font-medium">R${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
