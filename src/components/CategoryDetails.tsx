import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import Category from "../types/category-types";
import { db } from "../config/firebase-config";
import { categoryConverter } from "../converters/firestore-converters";

import Loading from "./loading/Loading";
import ProductItem from "./ProductItem";

interface CategoryDetailsProps {
  categoryId: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handlebackCLick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(
          query(
            collection(db, "categories").withConverter(categoryConverter),
            where("id", "==", categoryId),
          ),
        );
        const category = await querySnapshot.docs[0]?.data();
        setCategory(category);
      } catch (error) {
        console.log("Error fetching category", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="pb-10 pl-0 pr-5 pt-2">
      <div className="mt-5 flex items-center">
        <div className="flex hover:cursor-pointer" onClick={handlebackCLick}>
          <BiChevronLeft size={36} />
        </div>
        <p className="text-xl font-medium">Explorar {category?.displayName}</p>
      </div>
      <div className="mt-1 grid grid-cols-4 justify-items-start gap-y-5">
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
