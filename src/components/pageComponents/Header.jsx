import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-natural px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NIYAS-K</a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center font-semibold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>PROJECT</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li>
                <Link to={"/uploadPage"}>LOGIN</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-outline btn-error min-h-10 h-9 rounded-lg">Download CV</a>
      </div>
    </div>
  );
}

export default Header;
