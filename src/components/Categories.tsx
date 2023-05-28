// "use client";
import React from "react";

type Porps = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

const Category = ({ categories, selected, onClick }: Porps) => {
  return (
    <section className="p-4 text-center">
      <h2 className="mb-2 border-b border-sky-500 text-lg font-bold">Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              selected === category && "text-sky-500"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
