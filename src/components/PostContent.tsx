import { PostData } from "@/service/posts";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "./MarkdownViewer";

type Props = {
  post: PostData;
};

const PostContent = ({ post }: Props) => {
  const { title, date, content, description } = post;
  return (
    <section className="flex flex-col">
      <div className="flex space-x-2 items-center self-end">
        <AiTwotoneCalendar />
        <p className=" text-sky-600 font-semibold">{date.toString()}</p>
      </div>
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="border-2 border-sky-600 w-44 my-4"></div>
      <MarkdownViewer content={content} />
    </section>
  );
};

export default PostContent;
