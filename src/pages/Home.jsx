import React from "react";
import FirstSection from "./indexPages/FirstSection";
import SecondSection from "./indexPages/SecondSection";
import ThirdSection from "./indexPages/ThirdSection";
import FourthSection from "./indexPages/FourthSection";
import FifthSection from "./indexPages/FifthSection";
import BlogIndex from "./blog/BlogIndex";

function Home() {
  return (
    <div className="">
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <BlogIndex/>
    </div>
  );
}

export default Home;
