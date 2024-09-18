import React from "react";

import Category from "../../types/category-types";

interface ProductsProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface CategoryItemProps {
  category: Category;
  products: ProductsProps[];
}

const CategoryItemComponent: React.FC<CategoryItemProps> = ({ category }) => {
  const bgImage = category.imageUrl;

  return (
    <div
      style={{ backgroundImage: bgImage }}
      className="shadow-outline-dark flex h-full w-full items-center justify-center gap-4 rounded-xl bg-cover bg-center bg-repeat"
      key={category.id}
    >
      <div className="color-[#f8f9fa] bg-text hover:bg-color-hover rounded-xl border-2 border-solid border-[#212529] pb-3 pl-8 pr-8 pt-3 text-center transition-shadow hover:cursor-pointer">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
};

export default CategoryItemComponent;
