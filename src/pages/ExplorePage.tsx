import React, { FunctionComponent } from "react";

import Header from "../components/header/HeaderComponent";
import CategoriesOverview from "../components/CategoriesOverview";

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  );
};

export default ExplorePage;
