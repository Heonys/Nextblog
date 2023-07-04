import NextPostPage from "@/components/NextPostPage";
import PostContent from "@/components/PostContent";
import { getFileName } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description } = await getFileName(slug);
  return {
    title,
    description,
  };
}

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getFileName(slug);
  const { prev, next, path, title } = post;
  return (
    <section>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        className="w-full h-1/5 max-h-[430px]"
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex">
        {prev && <NextPostPage post={prev} type="prev" />}
        {next && <NextPostPage post={next} type="next" />}
      </section>
    </section>
  );
};

export default PostPage;
