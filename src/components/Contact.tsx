import React from "react";
import EmailForm from "./EmailForm";
// import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/Heonys" },
  { icon: <SiVelog />, url: "https://velog.io/@heonys" },
];

const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <h1 className="text-lg font-semibold">is.jiheon.real@gmail.com</h1>
      <ul className="my-3 flex  gap-4 ">
        {LINKS.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className="text-5xl hover:text-yellow-400"
            >
              {link.icon}
            </a>
          );
        })}
      </ul>
      <h1 className="mt-4 text-3xl font-bold">Or Send Me an Email</h1>
      <EmailForm />
    </section>
  );
};

export default Contact;
