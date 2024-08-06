import React from "react";

const FourthSection = () => {
  return (
    <>
      <div className=" lg:px-20 flex-row gap-12 py-12 text-left justify-between">
        <div className="text-center flex-col gap-3 items-center flex justify-center">
          <span className="py-1 font-semibold text-3xl"> Experience</span>

          <p>Here is a quick summary of my most recent experiences:</p>
        </div>

        <div className="flex flex-col px-3 lg:px-72 py-10 gap-3 text-white">
          <div className="flex gap-3 flex-col bg-[#3c4c63] rounded-lg p-6 w-full">
            <div className="flex justify-between w-full">
              <p className="text-2xl ">Front-End Developer</p>
              <p>continuing</p>
            </div>
            <p className="font-thin">September 2024 | Trivandrum, India</p>
          </div>
          <div className="flex gap-3 flex-col bg-[#3c4c63] rounded-lg p-6 w-full">
            <div className="flex justify-between w-full">
              <p className="text-2xl ">Web Developer</p>
              <p>-6 Months-</p>
            </div>
            <p className="font-thin">
              September 2023 – February 2024 | Ernakulam (Infopark), India
            </p>
          </div>
          <div className="flex gap-3 flex-col bg-[#3c4c63] rounded-lg p-6 w-full">
            <div className="flex justify-between w-full">
              <p className="text-2xl ">Web Developer (internship)</p>
              <p>-7 Months-</p>
            </div>
            <p className="font-thin">
              February 2023 – August 2023 | Trivandrum, India
            </p>
          </div>
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
};

export default FourthSection;
