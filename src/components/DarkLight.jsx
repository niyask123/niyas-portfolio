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
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* <button
        onClick={toggleTheme}
        className="p-2 rounded-full border border-red-600 fixed right-3 bottom-16 z-30"
      >
        {theme === "light" ? (
          <FiMoon className="w-6 h-6" />
        ) : (
          <FiSun className="w-6 h-6" />
        )}
      </button> */}
      <div className="flex items-center justify-center p-2 rounded-full border border-red-600 fixed right-3 bottom-16 z-30">
        <div className="dropdown">
          <label tabIndex={0} className="">
            <FiMoon className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content right-10 bottom-5 menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow"
          >
            <li>
              <div className="flex" onClick={() => handleThemeChange("light")}>
              <button >Light</button>
              <div className="flex border-2">
                <div className="p-1 bg-white"></div>
                <div className="p-1 bg-black"></div>
              </div>
              </div>
            </li>
            <li>
              <div className="flex" onClick={() => handleThemeChange("dark")}>
              <button >Dark</button>
              <div className="flex border-2">
                <div className="p-1 bg-black"></div>
                <div className="p-1 bg-white"></div>
              </div>
              </div>
            </li>
            <li>
              <div className="flex" onClick={() => handleThemeChange("mytheme1")}>
              <button >
                Green
              </button>
              <div className="flex border-2">
                <div className="p-1 bg-[#06402b]"></div>
                <div className="p-1 bg-[#ffedd5]"></div>
              </div>
              </div>
            </li>
            <li>
              <div className="flex" onClick={() => handleThemeChange("mytheme2")}>
              <button >
              Beige 
              </button>
              <div className="flex border-2">
                <div className="p-1 bg-[#ddd0c8]"></div>
                <div className="p-1 bg-black"></div>
              </div>
              </div>
            </li>
            <li>
              <div className="flex" onClick={() => handleThemeChange("mytheme3")}>
              <button >
              Orange 
              </button>
              <div className="flex border-2 ">
                <div className="p-1 bg-[#f9b872]"></div>
                <div className="p-1 bg-black"></div>
              </div>
              </div>
            </li>
            {/* <li>
              <button onClick={() => handleThemeChange("mytheme4")}>
                Theme 4
              </button>
            </li> */}
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
            <div className="flex gap-3">
              <FcMissedCall />
              <p>Call</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <FcCollaboration />
              <p>Chat</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <FcSms />
              <p>Mail</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <FaSquareInstagram />
              <p>Instagram</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <CiLinkedin />
              <p>Linkedin</p>
            </div>
          </li>
          <li>
            <div className="flex gap-3">
              <FaGithub />
              <p>Github</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeToggle;
