import React from "react";
import EmailForm from "./EmailForm";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const Contact = () => {
  return (
    <section className="text-center">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <h1 className="text-lg font-semibold">is.jiheon.real@gmail.com</h1>
      <div className="my-3 flex justify-center space-x-3">
        <Link href="https://github.com/Heonys" target="_blank">
          <AiFillGithub className="text-4xl" />
        </Link>
        <Link href="https://velog.io/@heonys" target="_blank">
          <SiVelog className="text-4xl" />
        </Link>
      </div>
      <h1 className="mt-4 text-3xl font-bold">Or Send Me an Email</h1>
      <EmailForm />
    </section>
  );
};

export default Contact;
