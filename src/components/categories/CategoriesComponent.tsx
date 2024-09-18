import React, { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import Category from "../../types/category-types";

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
    <div className="flex h-full w-full justify-center">
      <div className="gri grid h-full w-[1920px] gap-4 p-8">
        {categories?.map((category) => (
          <p key={category.id}>{category.displayName}</p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
