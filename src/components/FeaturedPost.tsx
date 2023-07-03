import { getFeaturedPost } from "@/service/posts";
import React from "react";
import PostGrid from "./PostGrid";

const FeaturedPost = async () => {
  const posts = await getFeaturedPost();
  return (
    <section className="my-4">
      <h2 className="font-bold text-2xl">Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
