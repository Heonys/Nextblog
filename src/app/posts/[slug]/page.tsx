import React from "react";
import { getFileName, getAllPosts } from "@/service/posts";
import Image from "next/image";
import NextPostCard from "@/components/NextPostCard";
import PostContents from "@/components/PostContents";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getFileName(slug);
  return { title, description };
}

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getFileName(slug);
  const { path, prev, next } = post;

  return (
    <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg ">
      <Image
        className="h-1/5 max-h-[500px] w-full"
        src={`/images/posts/${path}.png`}
        alt="image"
        width={760}
        height={420}
      ></Image>
      <PostContents post={post} />
      <section className="flex shadow-md">
        {prev && <NextPostCard post={prev} type="prev" />}
        {next && <NextPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default PostPage;
