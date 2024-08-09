import React from "react";

const FourthSection = () => {
  return (
    <>
      {/* <div className=" lg:px-20 flex-row gap-12 py-12 text-left justify-between">
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
      <hr className="border-[#1d232a] mx-6" /> */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 py-12">
        <div className="space-y-6 justify-between  md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src="/public/image/personal/code.png"
              alt="image"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-4xl ">Experience</h2>
            <p className="py-2">
              Here is a quick summary of my most recent experiences:
            </p>

            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-600 dark:text-red-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-gray-700 dark:text-red-700">
                    <code>Front-End Developer</code>
                  </h3>
                  <div className="flex justify-between">
                    <p className="">September 2024 | Trivandrum, India</p>
                    <p>continuing</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex py-6 gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-600 dark:text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-600">
                    <code>Web Developer</code>
                  </h3>
                  <div className="flex justify-between">
                    <p className="">
                      September 2023 – February 2024 | Ernakulam (Infopark),
                      India
                    </p>
                    <p>6 Months</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex py-6 gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-600 dark:text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="font-semibold text-lg text-gray-700 dark:text-green-600">
                    Web Developer (internship)
                  </h3>
                  <div className="flex justify-between">
                    <p className="">
                      February 2023 – August 2023 | Trivandrum, India
                    </p>
                    <p>7 Months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#1d232a] mx-6" />
    </>
  );
};

export default FourthSection;
