import { Post } from "@/service/posts";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Prop = {
  post: Post;
};

const PostCard = ({
  post: { path, title, description, date, category },
}: Prop) => {
  return (
    <>
      <Link
        href={`/posts/${path}`}
        className="w-full rounded-lg shadow-md hover:shadow-lg "
      >
        <Image
          className="w-full object-cover"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex  flex-col items-center p-4">
          <time className="text-gray-700 self-end">{date.toString()}</time>
          <h2 className="font-bold">{title}</h2>
          <h3 className="w-full truncate text-center">{description}</h3>
          <span className="my-2 rounded-lg bg-green-100 px-2 text-sm">
            {category}
          </span>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
