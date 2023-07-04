import { getAllPost } from "@/service/posts";
import React from "react";
import FilterablePage from "@/components/FilterablePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "post 페이지",
  description: "다양한 글이 존재하는 페이지",
};

const PostPage = async () => {
  const posts = await getAllPost();
  const categories = [...new Set(posts.map((v) => v.category))];
  return (
    <>
      <FilterablePage posts={posts} categories={categories} />
    </>
  );
};

export default PostPage;
