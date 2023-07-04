import ContactForm from "@/components/ContactForm";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "컨택 페이지",
  description: "메시지 보내기",
};

const LINK = [
  { icon: <AiFillGithub />, url: "https://github.com/Heonys" },
  { icon: <SiVelog />, url: "https://velog.io/@heonys" },
];

const ContactPage = () => {
  return (
    <section className="w-full text-center">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <h2 className=" mb-2">siwmua99@gmail.com</h2>
      <ul className="w-full flex gap-4 mx-auto justify-center mb-4">
        {LINK.map((link) => {
          return (
            <li className="text-4xl hover:text-yellow-300" key={link.url}>
              {link.icon}
            </li>
          );
        })}
      </ul>
      <h1 className="text-2xl font-bold">Or Send me an Email</h1>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
