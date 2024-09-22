import React, { FunctionComponent, useContext, useEffect } from "react";

import { CategoryContext } from "../contexts/CategoryContext";

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <div className="pb-10 pl-0 pr-5 pt-10">
      {categories.map((category) => (
        <p key={category.id}>{category.displayName}</p>
      ))}
    </div>
  );
};

export default CategoriesOverview;
