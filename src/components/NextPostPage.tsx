import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  post: Post;
  type: "prev" | "next";
};

const ICON_CLASS =
  "m-4 text-5xl text-yellow-300 transition-all group-hover:text-6xl";

const NextPostPage = ({ post: { path, title, description }, type }: Props) => {
  return (
    <Link href={`/posts/${path}`} className="bg-black relative w-full group">
      <Image
        className="opacity-40 max-h-56 w-full"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="flex absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-around">
        {type === "prev" && <AiOutlineArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h1 className="text-white font-bold text-center text-2xl">{title}</h1>
          <h2 className="text-white">{description}</h2>
        </div>
        {type === "next" && <AiOutlineArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
};

export default NextPostPage;
