"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import Category from "./Category";
import PostGrid from "./PostGrid";

type Props = {
  posts: Post[];
  categories: string[];
};

const DEFAULT_SELCT = "All Posts";

const FilterablePage = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(DEFAULT_SELCT);

  const filterd =
    selected === DEFAULT_SELCT
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex">
      <PostGrid posts={filterd} />
      <Category
        categories={[DEFAULT_SELCT, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};

export default FilterablePage;
