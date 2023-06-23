import React from "react";

const AboutContents = () => {
  return (
    <article className="mx-auto mt-3 flex w-[80%] flex-col space-y-3  bg-[#ddd] py-4 text-center">
      <div>
        <h2 className="text-xl font-bold">Who Am I? </h2>
        <h3 className="text-sm font-semibold"> 프론트엔드 개발자 </h3>
        <h3 className="text-sm font-semibold"> 웹의 가치를 믿습니다 </h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">Career</h2>
        <h3>브릭</h3>
      </div>
      <div>
        <h2 className="text-xl font-bold">Skill</h2>
        <h3 className="text-sm font-semibold">Next.js</h3>
        <h3 className="text-sm font-semibold">React</h3>
        <h3 className="text-sm font-semibold">Typescript</h3>
      </div>
    </article>
  );
};

export default AboutContents;
