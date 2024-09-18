import React from "react";

import Header from "../components/header/HeaderComponent";
import Categories from "../components/categories/CategoriesComponent";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
    </>
  );
};

export default HomePage;
