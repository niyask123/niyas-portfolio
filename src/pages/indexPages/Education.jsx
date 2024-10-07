import React from "react";

function Education() {
  return (
    <div className=" h-screen flex w-full items-center bg-no-repeat relative ">
      <div className="absolute">
        <img
          src="/public/image/bg/div.png"
          className="object-contain w-[35rem]"
          alt=""
        />
      </div>
      <div className="flex gap-3 w-2/3 pl-96 flex-col">
        <code>
          <div className="text-3xl font-bold text-white">Education</div>
          <div className="text-xl  text-white">
            Computer Operator and Programming Assistant, Gov. ITI Kasargod
          </div>
          <div className="text-xl  text-white">Education</div>
          <div className="text-xl  text-white">Education</div>
          <div className="text-xl  text-white">Education</div>
        </code>
      </div>
    </div>
  );
}

export default Education;
