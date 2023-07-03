import { getFeaturedPost } from "@/service/posts";
import React from "react";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

const CarouselPage = async () => {
  const posts = await getFeaturedPost();

  return (
    <section className="my-4">
      <h1 className="font-bold text-2xl">You May Like</h1>
      <MultiCarousel>
        {posts.map((post) => {
          return <PostCard key={post.path} post={post} />;
        })}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPage;
