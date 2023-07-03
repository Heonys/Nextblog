"use client";
import { PostData } from "@/service/posts";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

type Props = {
  content: string;
};

const MarkdownViewer = ({ content }: Props) => {
  return (
    <>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={materialDark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          img(image) {
            return (
              <Image
                className="w-full object-cover max-h-60"
                src={image.src || ""}
                alt={image.alt || ""}
                width={500}
                height={350}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
};

export default MarkdownViewer;
