"use client";
import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const All_POSTS = "All Posts";

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(All_POSTS);

  const filtered =
    selected === All_POSTS
      ? posts //
      : posts.filter((post) => post.category === selected);

  return (
    <section className="m-4 flex">
      <PostGrid posts={filtered} />
      <Categories
        categories={[All_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};

export default FilterablePosts;
