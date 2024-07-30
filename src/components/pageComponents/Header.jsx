// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "niyas_k" && password === "niyaskknr@gmail.com") {
      localStorage.setItem("authenticated", "true");
      document.getElementById("my_modal_2").close();
      navigate("/uploadPage");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/");
  };

  return (
    <div className="navbar bg-natural lg:px-20">
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
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about-us"}>ABOUT</Link>
            </li>
            <li>
              <a>PROJECT</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <Link to={"/contact-us"}>CONTACT</Link>
            </li>
            {localStorage.getItem("authenticated") ? (
              <li>
                <Link to={"/uploadPage"}>UPLOAD PAGE</Link>
              </li>
            ) : (
              <li>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  LOGIN
                </a>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NIYAS-K</a>
      </div>

      <div className="navbar-end gap-2">
        <div className="navbar-center font-semibold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about-us"}>ABOUT</Link>
            </li>
            <li>
              <a>PROJECT</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <Link to={"/contact-us"}>CONTACT</Link>
            </li>

            {localStorage.getItem("authenticated") ? (
              <li>
                <Link to={"/uploadPage"}>UPLOAD PAGE</Link>
              </li>
            ) : (
              <li>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  LOGIN
                </a>
              </li>
            )}
            <li>
              <a
                href="/resume/NIYAS-K.pdf"
                download
                className="btn btn-outline btn-error min-h-10 h-9 rounded-lg"
              >
                Donwload CV
              </a>
            </li>
          </ul>
        </div>
        {localStorage.getItem("authenticated") && (
          <>
            {/* <a
             
              className="btn btn-outline btn-error min-h-10 h-9 rounded-lg"
            >
              Logout
            </a> */}
            <div className="dropdown block">
              <div className="avatar online" tabIndex={0} role="button">
                <div className="w-10 rounded-full border">
                  <img src="/image/personal/personal.jpg" />
                </div>

                <div
                  tabIndex={0}
                  className="dropdown-content card right-3 top-12 card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow"
                >
                  <div className="card-body">
                    <a  onClick={handleLogout} className="btn">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Login Modal */}
      <dialog id="my_modal_2" className="modal w-full">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex">
            <div className="w-full p-6">
              <img src="/gif/login.gif" className="rounded-lg" alt="" />
            </div>
            <form
              onSubmit={handleLogin}
              className="w-full flex flex-col justify-center"
            >
              <div className="flex gap-3 flex-col justify-between">
                <label className="input w-full input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <label className="input w-full input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <button type="submit" className="btn glass">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Header;
