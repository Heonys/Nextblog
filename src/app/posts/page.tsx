import FilterablePosts from "@/components/FilterablePosts";
import PostGrid from "@/components/PostGrid";
import { getAllPosts, getFeturedPosts } from "@/service/posts";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "all post",
  description: "모든 블로그",
};

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;

export async function generateStaticParams() {
  const post = await getFeturedPosts();
  return post.map((post) => ({
    slug: post.path,
  }));
}
