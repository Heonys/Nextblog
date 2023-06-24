import React from "react";
import Profile from "@/components/Profile";
import AboutContents from "@/components/AboutContents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "커리어 소개",
  description: "heon's 커리어 소개",
};

const AboutPage = () => {
  return (
    <section>
      <Profile />
      <AboutContents />
    </section>
  );
};

export default AboutPage;
