import React from "react";
import Category from "../types/category-types";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview: React.FC<CategoryOverviewProps> = ({ category }) => {
  return (
    <div className="mt-5 flex w-full flex-col">
      <p className="mb-1 text-xl font-medium">{category.displayName}</p>
      <div className="flex w-full flex-wrap justify-between"></div>
    </div>
  );
};

export default CategoryOverview;
