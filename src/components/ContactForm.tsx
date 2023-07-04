"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner from "./Banner";
import { sendContactEmail } from "@/service/contact";

const DEFUALT_FORM = {
  from: "",
  subject: "",
  message: "",
};

type Banner = {
  message: string;
  type: "success" | "fail";
};

const ContactForm = () => {
  const [form, setForm] = useState(DEFUALT_FORM);
  const [banner, setBanner] = useState<Banner | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then((res) => {
        setBanner({
          message: res.message || "메시지 성공 했습니다",
          type: "success",
        });
        setForm(DEFUALT_FORM);
      })
      .catch((err) => {
        setBanner({
          message: err.message || "메시지 실패 했습니다",
          type: "fail",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className=" w-full max-w-md mx-auto">
      {banner && <Banner message={banner.message} type={banner.type} />}
      <form
        onSubmit={onSubmit}
        className="bg-slate-500 rounded-xl  my-4 flex flex-col mx-auto text-white p-4"
      >
        <label htmlFor="email" className="self-start pt-4 font-semibold">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          name="from"
          value={form.from}
          onChange={onChange}
          required
          autoFocus
        />
        <label htmlFor="subject" className="self-start pt-4 font-semibold">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          name="subject"
          value={form.subject}
          onChange={onChange}
          required
        />

        <label htmlFor="message" className="self-start pt-4 font-semibold">
          Message
        </label>
        <textarea
          className="text-black"
          rows={10}
          name="message"
          value={form.message}
          onChange={onChange}
          required
        />
        <button className=" mt-4 bg-yellow-300 hover:bg-yellow-400 rounded-md text-black font-bold">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
