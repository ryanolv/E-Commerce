import React, { useContext, useEffect } from "react";

import "./categories-styles.css";
import { CategoryContext } from "../../contexts/CategoryContext";

import Loading from "../loading/Loading";
import CategoryItem from "../categoryItem/CategoryItemComponent";

const Categories: React.FC = () => {
  const { fetchCategories, categories, isLoading } =
    useContext(CategoryContext);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      {isLoading && <Loading />}
      <div className="categories-content">
        {categories?.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
