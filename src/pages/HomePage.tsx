import React from "react";

import Header from "../components/header/HeaderComponent";
import Categories from "../components/categories/CategoriesComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Categories />
    </div>
  );
};

export default HomePage;
