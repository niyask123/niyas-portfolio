import React from "react";

const ThirdSection = () => {
  return (
    <>
      <div className="group lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between relative">
        <div className="absolute left-0">
          <img
            src="/image/bg/leftside.png"
            className="object-contain  max-w-sm "
            alt=""
          />
        </div>
        <div className="text-center flex-col gap-3 items-center flex justify-center">
          <span className="py-1 font-semibold text-3xl"> Tech Stacks</span>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 gap-y-10 pt-16">
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/react.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold  p-1 ">React JS</p>
          </div>
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/js.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">JavaScript</p>
          </div>
          {/* <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/ts.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">TypeScript</p>
          </div> */}
          {/* <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/nodejs.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">nodeJS</p>
          </div> */}
          {/* <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/postgresql.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">Postgresql</p>
          </div> */}
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/sass.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">SASS</p>
          </div>
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/tailwindcss.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">TailwindCSS</p>
          </div>
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/bootstrap.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">Bootstrap</p>
          </div>

          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/php.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">PHP</p>
          </div>
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/html.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">HTML</p>
          </div>
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/css-3.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">CSS3</p>
          </div>
          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/jQuery.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">jQuery</p>
          </div>

          <div className="flex p-3 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/git.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold p-1 ">Git</p>
          </div>
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
};

export default ThirdSection;
