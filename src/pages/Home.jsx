import React from "react";
import FirstSection from "./indexPages/FirstSection";
import SecondSection from "./indexPages/SecondSection";
import ThirdSection from "./indexPages/ThirdSection";
import FourthSection from "./indexPages/FourthSection";
import FifthSection from "./indexPages/FifthSection";
import BlogIndex from "./blog/BlogIndex";
import Education from "./indexPages/Education";

function Home() {
  return (
    <div className="">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      {/* <Education /> */}
      <FourthSection />
      <FifthSection />
      {/* <BlogIndex/> */}
    </div>
  );
}

export default Home;
