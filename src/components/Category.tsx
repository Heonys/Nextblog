import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

const Category = ({ categories, selected, onClick }: Props) => {
  return (
    <article className="p-4 text-center">
      <h2 className="font-bold text-lg">Category</h2>
      <div className="border-2 border-b border-sky-500 mb-2 "></div>
      <ul className="flex flex-col">
        {categories.map((post) => {
          return (
            <li
              className={`${
                selected === post && "text-sky-500"
              } cursor-pointer hover:text-sky-500`}
              key={post}
              onClick={() => onClick(post)}
            >
              {post}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Category;
