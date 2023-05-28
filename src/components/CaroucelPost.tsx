import { getNonFeturedPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";
import MultiCaroucel from "./MultiCaroucel";

const CaroucelPost = async () => {
  const posts = await getNonFeturedPosts();

  return (
    <section className="my-2">
      <h2 className="my-2 text-2xl font-bold">You May Like</h2>
      <MultiCaroucel>
        {posts.map((post) => {
          return <PostCard key={post.path} post={post} />;
        })}
      </MultiCaroucel>
    </section>
  );
};

export default CaroucelPost;
