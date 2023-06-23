"use client";
import { ChangeEvent, FormEvent, useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(email, subject, message);

    setEmail("");
    setSubject("");
    setMessage("");
  };

  const emailHander = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const subjectHander = (e: ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const messagelHander = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="mx-auto mt-10 w-[50%] bg-gray-700 pb-3">
      <form
        className=" flex flex-col justify-center text-center "
        onSubmit={onSubmit}
      >
        <label htmlFor="email" className="mx-5 self-start pt-4 text-white">
          Your Email
        </label>
        <input
          id="email"
          value={email}
          onChange={emailHander}
          className="mx-5"
          type="text"
        />

        <label htmlFor="subject" className="mx-5 self-start pt-4 text-white">
          Subject
        </label>
        <input
          id="subject"
          value={subject}
          onChange={subjectHander}
          className="mx-5"
          type="text"
        />

        <label htmlFor="message" className="mx-5 self-start pt-4 text-white">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={messagelHander}
          cols={33}
          className="mx-5"
        ></textarea>

        <button
          type="submit"
          className="w-50 mx-10 mt-5 rounded-lg bg-yellow-300 font-bold text-black"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
