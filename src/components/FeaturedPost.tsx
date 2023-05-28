import React from "react";
import { getFeturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

const FeaturedPost = async () => {
  const data = await getFeturedPosts();

  return (
    <section className="my-2">
      <h2 className="my-2 text-2xl font-bold">FeturedPosts</h2>
      <PostGrid posts={data} />
    </section>
  );
};

export default FeaturedPost;
