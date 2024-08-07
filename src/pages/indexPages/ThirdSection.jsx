import React from "react";

const ThirdSection = () => {
  return (
    <>
      <div className="group lg:px-20 px-3 flex-row gap-12 py-12 text-left justify-between ">
        <div className="text-center flex-col gap-3 items-center flex justify-center">
          <span className="py-1 font-semibold text-3xl"> Tech Stacks</span>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-3 gap-y-10 pt-16">
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500 flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/react.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">React JS</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/js.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">JavaScript</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/ts.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">TypeScript</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/nodejs.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">nodeJS</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/postgresql.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">Postgresql</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/sass.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">SASS</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/tailwindcss.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">TailwindCSS</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/bootstrap.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">Bootstrap</p>
          </div>

          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/php.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">PHP</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/html.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">HTML</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/css-3.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">CSS3</p>
          </div>
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/jQuery.png"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">jQuery</p>
          </div>
          
          <div className="flex p-3 group-hover:bg-yellow-500 group-hover:rounded-2xl duration-500  flex-col gap-3 text-center">
            <img
              src="/image/logo/skills/git.svg"
              className="object-contain h-14"
              alt=""
            />
            <p className="font-semibold">Git</p>
          </div>
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
};

export default ThirdSection;
