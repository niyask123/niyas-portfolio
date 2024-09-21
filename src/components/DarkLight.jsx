import React, { useState, useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaSquareInstagram } from "react-icons/fa6";
import {
  FcAdvertising,
  FcApproval,
  FcCollaboration,
  FcMissedCall,
  FcSms,
} from "react-icons/fc";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  // Initialize theme state with dark mode or value from localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="relative lg:block hidden">
        <div className="absolute flex gap-2 h-32 -bottom-20 -right-16">
          <div className="border-r border-yellow-400 h-20"></div>
          <div className="border-r border-green-400 h-32"></div>
          <div className="border-r border-red-400 h-36"></div>
          <div className="border-r border-blue-400 h-40"></div>
          <div className="border-r border-teal-500 h-36"></div>
          <div className="border-r border-x-purple-600 h-34"></div>
          <div className="border-r h-20"></div>
        </div>
      </div>

      <div className="flex items-center justify-center p-2 rounded-full border border-red-600 fixed right-3 bottom-16 z-30">
        <div className="dropdown">
          <label tabIndex={0} className="">
            {theme === "light" ? (
              <FiMoon className="w-6 h-6" />
            ) : (
              <FiSun className="w-6 h-6" />
            )}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content right-10 bottom-5 menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow"
          >
            <li>
              <div className="flex" onClick={() => handleThemeChange("light")}>
                <button>Light</button>
                <div className="flex border-2">
                  <div className="p-1 bg-white"></div>
                  <div className="p-1 bg-black"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex" onClick={() => handleThemeChange("dark")}>
                <button>Dark</button>
                <div className="flex border-2">
                  <div className="p-1 bg-black"></div>
                  <div className="p-1 bg-white"></div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="flex"
                onClick={() => handleThemeChange("mytheme1")}
              >
                <button>Green</button>
                <div className="flex border-2">
                  <div className="p-1 bg-[#06402b]"></div>
                  <div className="p-1 bg-[#ffedd5]"></div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="flex"
                onClick={() => handleThemeChange("mytheme2")}
              >
                <button>Beige</button>
                <div className="flex border-2">
                  <div className="p-1 bg-[#ddd0c8]"></div>
                  <div className="p-1 bg-black"></div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="flex"
                onClick={() => handleThemeChange("mytheme3")}
              >
                <button>Orange</button>
                <div className="flex border-2">
                  <div className="p-1 bg-[#f9b872]"></div>
                  <div className="p-1 bg-black"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <DropdownComponent />
    </>
  );
};

const DropdownComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown dropdown-top p-2 rounded-full border border-red-600 fixed right-3 bottom-2 z-30">
      <div tabIndex={0} role="button" className="m-1" onClick={toggleDropdown}>
        {isDropdownOpen ? <FcApproval /> : <FcAdvertising />}
      </div>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content right-20 menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow"
        >
          <li>
            <a href="tel:+918075801527">
              <div className="flex gap-3">
                <FcMissedCall />
                <p>Call</p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/8075801527"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-3 items-center">
                <FcCollaboration />
                <p>Chat</p>
              </div>
            </a>
          </li>
          <li>
            <a href="mailto:niyaskknr@gmail.com">
              <div className="flex gap-3">
                <FcSms />
                <p>Mail</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/niyas_k__?igsh=c2NiNDI4MzIyaHNv">
              <div className="flex gap-3">
                <FaSquareInstagram />
                <p>Instagram</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/niyas-k-032764286">
              <div className="flex gap-3">
                <CiLinkedin />
                <p>Linkedin</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/niyask123">
              <div className="flex gap-3">
                <FaGithub />
                <p>Github</p>
              </div>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeToggle;
