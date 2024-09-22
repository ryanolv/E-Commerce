import React from "react";

import Product from "../types/product-types";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div
        className="h-96 w-72 rounded-lg bg-cover bg-center bg-no-repeat shadow-md shadow-slate-800"
        style={{ backgroundImage: `url('${product.imageUrl}')` }}
      ></div>
      <div className="mt-1 flex justify-between">
        <p className="text-base font-medium">{product.name}</p>
        <p className="text-base font-medium">R${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
