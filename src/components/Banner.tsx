import React from "react";

export type BannerData = {
  message: string;
  state: "succes" | "error";
};

const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
  const isSucces = state === "succes";
  return (
    <p
      className={`m-2 w-full text-center ${
        isSucces ? "bg-green-300" : "bg-red-300"
      } rounded-xl`}
    >{` ${isSucces ? "✅" : "❎"}  ${message}`}</p>
  );
};

export default Banner;
