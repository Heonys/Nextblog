import React from "react";
import { getFileName, getAllPosts } from "@/service/posts";
import Image from "next/image";
import NextPostCard from "@/components/NextPostCard";
import PostContents from "@/components/PostContents";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const { date, description, path, title, content } = await getFileName(slug);
  const posts = await getAllPosts();

  return (
    <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
      <Image
        className="h-1/5 max-h-[500px] w-full"
        src={`/images/posts/${path}.png`}
        alt="image"
        width={760}
        height={420}
      ></Image>
      <section className="flex flex-col p-4">
        {/* <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="ml-2 font-semibold">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="mb-8 mt-4 w-44 border-2 border-sky-600"></div>
        <MarkdownViewer contents={content} /> */}
        <NextPostCard path={path} posts={posts} />
      </section>
    </article>
  );
};

export default PostPage;
