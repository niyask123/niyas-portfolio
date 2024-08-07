import React from "react";
import FirstSection from "../indexPages/FirstSection";

const About = () => {
  return (
    <>
      <h1 className="py-12">ABOUT US</h1>
      <div className="flex justify-center">
        <FirstSection />
      </div>

      <div className="py-24">
        {/* <h1 className="py-12">Our Services</h1> */}

        <div className="items-center grid px-20 p-4">
          <div className="grid lg:grid-cols-5 justify-center items-center gap-8 p-4">
            <div className="flex flex-col justify-center transition-transform duration-300 hover:rotate-12 hover:translate-y-4">
              <img
                src="/image/about/browser.png"
                className="h-24 object-contain"
                alt="Browser"
              />
              <h3 className="pt-3">Responsive Web Design</h3>
            </div>
            <div className="flex flex-col justify-center transition-transform duration-300 hover:-rotate-12 hover:translate-y-4">
              <img
                src="/image/about/code.png"
                className="h-24 object-contain"
                alt="Code"
              />
              <h3 className="pt-3">
                Single Page Application (SPA) Development
              </h3>
            </div>
            <div className="flex flex-col justify-center transition-transform duration-300 hover:rotate-12 hover:translate-y-4">
              <img
                src="/image/about/coding.png"
                className="h-24 object-contain"
                alt="Coding"
              />
              <h3 className="pt-3">Custom Web Application Development</h3>
            </div>
            <div className="flex flex-col justify-center transition-transform duration-300 hover:-rotate-12 hover:translate-y-4">
              <img
                src="/image/about/programming.png"
                className="h-24 object-contain"
                alt="Programming"
              />
              <h3 className="pt-3">User Interface (UI) Development</h3>
            </div>
            <div className="flex flex-col justify-center transition-transform duration-300 hover:rotate-12 hover:translate-y-4">
              <img
                src="/image/about/responsive-design (1).png"
                className="h-24 object-contain"
                alt="Responsive Design"
              />
              <h3 className="pt-3">Front-End Architecture Design</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
