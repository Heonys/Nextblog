import { Post } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";

const PostGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <ul className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {posts.map((post) => {
          return <PostCard key={post.path} post={post}></PostCard>;
        })}
      </ul>
    </>
  );
};

export default PostGrid;
