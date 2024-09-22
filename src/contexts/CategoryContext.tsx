import React, { createContext, FunctionComponent, useState } from "react";
import Category from "../types/category-types";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../config/firebase-config";
import { categoryConverter } from "../converters/firestore-converters";

interface ICategoryContext {
  categories: Category[];
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
}

interface ICategoryContextProvider {
  children: React.ReactNode;
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve(),
});

const CategoryContextProvider: FunctionComponent<ICategoryContextProvider> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const categoriesFromFirestore: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter),
      );
      querySnapshot.forEach((doc) => {
        const result = doc.data();
        categoriesFromFirestore.push(result);
      });
      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
