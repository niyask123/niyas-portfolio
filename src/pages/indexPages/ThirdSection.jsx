import React from "react";

const ThirdSection = () => {
  return (
    <>
      <div className=" lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between ">
        <div className="text-center flex-col gap-3 items-center flex justify-center">
          <p className="bg-[#374151] text-white px-3 py-1 w-fit rounded-lg ">Skills</p>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-3 pt-16">
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/react.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">React JS</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/js.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/ts.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">TypeScript</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/nodejs.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">nodeJS</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/postgresql.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">Postgresql</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/sass.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">SASS</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/tailwindcss.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">TailwindCSS</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/git.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">Git</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
