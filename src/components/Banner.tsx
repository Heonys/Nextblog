import React from "react";

type Props = {
  message: string;
  type: "success" | "fail";
};

const Banner = ({ message, type }: Props) => {
  const isSuccess = type === "success";

  return (
    <p
      className={`${isSuccess ? "bg-green-300" : "bg-red-300"} rounded-lg`}
    >{`${isSuccess ? "✅" : "❎"} ${message}`}</p>
  );
};

export default Banner;
