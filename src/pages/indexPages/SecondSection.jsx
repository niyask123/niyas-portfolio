import React from "react";

const SecondSection = () => {
  return (
    <>
      <div className="flex px-3 text-justify  lg:px-20 flex-row gap-12 py-10 lg:text-left justify-between">
        <div className="w-full lg:block hidden ">
          <img
            src="/image/personal/niyas2.png"
            className="object-contain rounded-lg h-96"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex text-center  items-center justify-center">
            <span className="bg-[#374151] px-3 py-1 rounded-lg ">About Me</span>
          </div>
          <h4 className="">
            I am a dedicated React.js developer passionate about crafting
            user-friendly and visually appealing websites. My goal is to
            leverage my skills in web development to create efficient and
            intuitive web applications that exceed client expectations. With a
            strong foundation in various web technologies and a commitment to
            continuous learning, I strive to deliver high-quality solutions.
          </h4>

          {/* <div className="flex gap-3">
            <div className="flex gap-3">
              <p className="text-center justify-center items-center flex w-5">
                <p className="p-1 h-2 rounded-lg bg-orange-400"></p>
              </p>
              <p>Available for new projects</p>
            </div>
            <div className="flex gap-3">
              <p className="text-center justify-center items-center flex w-5">
                <p className="p-1 h-2 rounded-lg bg-orange-400"></p>
              </p>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <p className="text-center justify-center items-center flex w-5">
                <p className="p-1 h-2 rounded-lg bg-orange-400"></p>
              </p>
              <p>Available for new projects</p>
            </div>
            <div className="flex gap-3">
              <p className="text-center justify-center items-center flex w-5">
                <p className="p-1 h-2 rounded-lg bg-orange-400"></p>
              </p>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <p className="text-center justify-center items-center flex w-5">
                <p className="p-1 h-2 rounded-lg bg-orange-400"></p>
              </p>
              <p>Available for new projects</p>
            </div>
            <div className="flex gap-3">
              <p className="text-center justify-center items-center flex w-5">
                <p className="p-1 h-2 rounded-lg bg-orange-400"></p>
              </p>
              <p>Available for new projects</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SecondSection;
