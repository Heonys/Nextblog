import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "@/components/MarkdownViewer";
import type { PostData } from "@/service/posts";

const PostContents = ({ post }: { post: PostData }) => {
  const { date, description, title, content } = post;
  return (
    <section className="flex flex-col">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="ml-2 font-semibold">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mb-8 mt-4 w-44 border-2 border-sky-600"></div>
      <MarkdownViewer contents={content} />
    </section>
  );
};

export default PostContents;
