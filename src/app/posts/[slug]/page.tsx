import React from "react";
import { getFileName } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const data = await getFileName(slug);

  return <pre>{data.content}</pre>;
};

export default PostPage;
