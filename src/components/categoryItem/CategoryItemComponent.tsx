import React from "react";

import Category from "../../types/category-types";

import "./category-item-styles.css";
import { useNavigate } from "react-router-dom";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const bgImage = category.imageUrl;
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <div
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="category-item-container"
      key={category.id}
    >
      <div className="category-name" onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
};

export default CategoryItem;
