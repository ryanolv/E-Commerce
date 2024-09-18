import React, { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import CategoryItem from "../categoryItem/CategoryItemComponent";

import Category from "../../types/category-types";
import "./categories-styles.css";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>();

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(collection(db, "categories"));
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data() as Category);
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

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
