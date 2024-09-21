import React, { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import CategoryItem from "../categoryItem/CategoryItemComponent";

import Category from "../../types/category-types";
import "./categories-styles.css";
import { categoryConverter } from "../../converters/firestore-converters";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>();

  const fetchCategories = async () => {
    try {
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
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);
  return (
    <div className="categories-container">
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
