import React from "react";
import { getAllPosts } from "@/service/posts";
import type { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

const NextPostCard = ({ path, posts }: { path: string; posts: Post[] }) => {
  const currentIndex = posts.findIndex((value) => value.path === path);

  const prevPost = posts[currentIndex - 1] || posts[0];
  const nextPost = posts[currentIndex + 1] || posts[posts.length - 1];

  return (
    <>
      {currentIndex === 0 || currentIndex === posts.length - 1 ? (
        currentIndex === 0 ? (
          <Link href={`/posts/${nextPost.path}`}>
            <Image src={`/images/posts/${nextPost.path}.png`} alt="" width={500} height={250} />
          </Link>
        ) : (
          <Link href={`/posts/${prevPost.path}`}>
            <Image src={`/images/posts/${prevPost.path}.png`} alt="" width={500} height={250} />
          </Link>
        )
      ) : (
        <div className="flex">
          <Link href={`/posts/${prevPost.path}`}>
            <Image src={`/images/posts/${prevPost.path}.png`} alt="" width={500} height={250} />
          </Link>
          <Link href={`/posts/${nextPost.path}`}>
            <Image src={`/images/posts/${nextPost.path}.png`} alt="" width={500} height={250} />
          </Link>
        </div>
      )}
    </>
  );
};

export default NextPostCard;
