import React from "react";
import Header from "../components/header/HeaderComponent";
import CategoryDetails from "../components/CategoryDetails";
import { useParams } from "react-router-dom";

const CategoryDetailsPage: React.FC = () => {
  const { id } = useParams();
  if (!id) return null;

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  );
};

export default CategoryDetailsPage;
