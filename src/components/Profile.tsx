import React from "react";
import Image from "next/image";
import profileImage from "../../public/lufy.png";
import Link from "next/link";

const Profile = () => {
  return (
    <article className="text-center">
      <Image
        src={profileImage}
        alt="lufy"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="font-bold text-xl">Frontend Devloper</h1>
      <h2 className="font-semibold text-lg">웹의 가치를 믿습니다</h2>

      <Link href="/contact">
        <button className="rounded-xl bg-yellow-400 p-2 font-semibold my-1">
          Contact
        </button>
      </Link>
    </article>
  );
};

export default Profile;
