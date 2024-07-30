import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex lg:px-20 px-6 flex-row gap-12 py-12 text-left justify-between bg-black">
        {/* <div className="flex-[.70] flex-col"> */}
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl lg:text-5xl">Hi, I’m Niyas K 👋</h1>
          <p>
            Highly skilled and dedicated React.js developer with 1.4 years of
            experience in building and maintaining responsive web applications.
            Proficient in modern JavaScript frameworks and libraries, with a
            strong focus on React.js. Adept at collaborating with
            cross-functional teams to deliver high-quality software solutions.
            Proven ability to learn quickly and adapt to new technologies and
            tools.
          </p>
          <div className="flex gap-3">
            <p className="text-center justify-center items-center flex">
              <img
                src="/image/logo/navigation.png"
                className="object-contain w-5 "
                alt=""
              />
            </p>
            <p>Kerala, India</p>
          </div>
          <div className="flex gap-3">
            <p className="text-center justify-center items-center flex w-5">
              <p className="p-1 h-2 rounded-lg bg-green-600"></p>
            </p>
            <p>Available for new projects</p>
          </div>
          <div className="flex gap-12 pt-12 ">
            <img
              src="/image/logo/logowhite/git.png"
              className="object-contain h-5"
              alt=""
            />
            <img
              src="/image/logo/logowhite/call.png"
              className="object-contain h-5"
              alt=""
            />
            <img
              src="/image/logo/logowhite/msg.png"
              className="object-contain h-5"
              alt=""
            />
          </div>
        </div>

        {/* <div className="flex gap-3 flex-col py-6">
           
          </div> */}
        {/* </div> */}
        {/* <div className="flex flex-[.30]"> */}
        <div className="w-full hidden lg:block">
          <img
            src="/image/personal/niyas1.png"
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ContactUs;
