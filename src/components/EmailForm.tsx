"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_FROM = {
  from: "",
  subject: "",
  message: "",
};

const EmailForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_FROM);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "메일 성공", state: "succes" });
        setForm(DEFAULT_FROM);
      })
      .catch(() => {
        setBanner({ message: "메일 실패", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="w-full max-w-md ">
      {banner && <Banner banner={banner} />}
      <form
        className="my-4 flex flex-col gap-2 rounded-xl bg-slate-500 p-4 text-white "
        onSubmit={onSubmit}
      >
        <label htmlFor="from" className=" self-start pt-4 font-semibold">
          Your Email
        </label>
        <input
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className=" text-black"
          type="text"
        />

        <label htmlFor="subject" className=" self-start pt-4 ">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className=" text-black"
          type="text"
        />

        <label htmlFor="message" className=" self-start pt-4 ">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          value={form.message}
          onChange={onChange}
          className=" text-black"
        ></textarea>

        <button
          type="submit"
          className=" bg-yellow-300 font-bold text-black hover:bg-yellow-400"
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default EmailForm;
