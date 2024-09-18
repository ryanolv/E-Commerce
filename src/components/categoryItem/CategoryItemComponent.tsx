import React from "react";

import Category from "../../types/category-types";

import "./category-item-styles.css";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const bgImage = category.imageUrl;

  return (
    <div
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="category-item-container"
      key={category.id}
    >
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
};

export default CategoryItem;
