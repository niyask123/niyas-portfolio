import React from "react";
// import ThemeSwitcher from "./ThemeSwitcher";

const FirstSection = () => {
  return (
    <>
      <div className="flex lg:px-20 px-6 flex-row gap-12 py-12 text-left justify-between bg-base-100 text-base-content">
        <div className="flex flex-col gap-4">
          <code className="flex flex-col gap-3">
            <div className="flex gap-4 items-end">
              <h4>Hi,_my_name_is</h4>
              <h1 className="text-2xl lg:text-5xl">&#123;<span className="text-red-700">Niyas</span><span className="text-blue-600">_K</span>&#125;</h1>
            </div>
            <div className="flex gap-4 items-end">
              <h4>I_am_a</h4>
              <h2 className="lg:text-2xl text-lg">(<span className="bg-yellow-500 text-black">Frontend_</span>Developer)</h2>
            </div>
          </code>
          <p>
            Highly skilled and dedicated React.js developer with 1.4 years of
            experience in building and maintaining responsive web applications.
            Proficient in modern JavaScript frameworks and libraries, with a
            strong focus on React.js. Adept at collaborating with
            cross-functional teams to deliver high-quality software solutions.
            Proven ability to learn quickly and adapt to new technologies and
            tools.
          </p>
          <div className="container mx-auto w-5/6"></div>
          <div className="flex gap-3">
            <p className="text-center justify-center items-center flex">
              <img
                src="/image/logo/navigation.png"
                className="object-contain w-5"
                alt="Navigation"
              />
            </p>
            <p>Kerala, India</p>
          </div>
          <div className="flex gap-3">
            <p className="text-center justify-center items-center flex w-5">
              <span className="p-1 h-2 rounded-lg bg-green-600"></span>
            </p>
            <p>Available for new projects</p>
          </div>
          <div className="flex gap-12 pt-12">
            <a href="https://github.com/niyask123">
              <img
                src="/image/logo/logowhite/git.png"
                className="object-contain h-5"
                alt="GitHub"
              />
            </a>
            <a href="tel:+918075801527">
              <img
                src="/image/logo/logowhite/call.png"
                className="object-contain h-5"
                alt="Call"
              />
            </a>
            <a href="mailto:niyaskknr@gmail.com">
              <img
                src="/image/logo/logowhite/msg.png"
                className="object-contain h-5"
                alt="Email"
              />
            </a>
            <a href="/resume/NIYAS-K.pdf" download>
              <img
                src="/image/logo/goto.png"
                className="object-contain h-5"
                alt="Resume"
              />
            </a>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <img
            src="/image/personal/niyas1.png"
            className="object-contain rounded-lg"
            alt="Profile"
          />
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
      {/* <ThemeSwitcher /> */}
      
    </>
  );
};

export default FirstSection;
