import React from "react";
import FirstSection from "../indexPages/FirstSection";

const About = () => {
  return (
    <>
      <h1 className="pt-10">ABOUT US</h1>

      {/* <div className="flex gap-12 justify-center bg-black items-center mt-3 py-6">
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
      </div> */}
      <div className="flex lg:px-20 px-6 flex-row gap-12 py-12 text-left justify-between bg-base-100 text-base-content">
        <div className="flex flex-col gap-4 group">
          <code className="flex flex-col gap-5">
            <div className="flex gap-4 items-end">
              <h4>Hi,_my_name_is</h4>
              <h1 className="text-2xl lg:text-5xl">
                &#123;<span className="text-red-700">Niyas</span>
                <span className="text-blue-600">
                  <span className="animate-blink">_</span>K
                </span>
                &#125;
              </h1>
            </div>
            <div className="flex gap-4 items-end">
              <h4>I_am_a</h4>
              <h2 className="lg:text-2xl text-lg">
                {/* (<span className="bg-yellow-500 text-black">Frontend_</span>
                Developer) */}
                (web designer and front-end developer)
              </h2>
            </div>
          </code>
          <p>
            a passionate Frontend Developer with a strong background in web
            development. I have experience in creating responsive and
            user-friendly web applications using modern technologies like React,
            JavaScript, Tailwind CSS, BulmaCSS, jQuery and Bootstrap. Over the
            past year, I've worked on various projects, including dashboards,
            e-commerce platforms, and static websites. I thrive in collaborative
            environments and have a knack for turning UI/UX designs into
            functional web applications. Currently, I'm seeking opportunities to
            leverage my skills in a challenging and dynamic setting.
          </p>
          <p className="relative overflow-hidden">
            <span className="block transition-all duration-500  ">
              Highly skilled and dedicated React.js developer with{" "}
              <span className="relative z-10">1.4 years of experience</span> in
              building and maintaining responsive web applications. Proficient
              in modern JavaScript frameworks and libraries, with a strong focus
              on React.js. Adept at collaborating with cross-functional teams to
              deliver high-quality software solutions. Proven ability to learn
              quickly and adapt to new technologies and tools.
            </span>
          </p>
        </div>

        <div className="w-full hidden lg:block">
          <img
            src="/image/personal/niyas1.png"
            className="object-contain rounded-lg"
            alt="Profile"
          />
        </div>
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
