import Profile from "@/components/Profile";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "어바웃 페이지",
  description: "나를 소개하는 페이지",
};

const AboutPage = () => {
  return (
    <section>
      <Profile />
      <div className="text-center flex flex-col space-y-4  bg-gray-200 mx-auto shadow-lg w-[80%] mt-4 py-4">
        <div>
          <h1 className="font-bold text-2xl">Who am I?</h1>
          <p>
            개발을 사랑하는 프론트엔드 개발자 <br />
            누구에게나 열려있는 웹의 가치를 믿습니다
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Career</h1>
          <p>BRIQUE </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Skill</h2>
          <p>
            Vue, React, Next <br />
            Typescipt, Node.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
