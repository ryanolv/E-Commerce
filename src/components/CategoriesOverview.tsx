import React, { FunctionComponent, useContext, useEffect } from "react";

import { CategoryContext } from "../contexts/CategoryContext";

import CategoryOverview from "./CategoryOverview";
import Loading from "./loading/Loading";

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="pb-10 pl-0 pr-5 pt-10">
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesOverview;
