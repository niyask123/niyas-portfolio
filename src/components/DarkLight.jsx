import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
    <button onClick={toggleTheme} className="p-2 rounded-full border border-red-600 fixed right-3 bottom-16 z-30">
      {theme === 'light' ? (
        <FiMoon className="w-6 h-6" />
      ) : (
        <FiSun className="w-6 h-6" />
      )}
    </button>
    <button  className="p-2 rounded-full border border-red-600 fixed right-3 bottom-2 z-30">
        <div className="flex justify-center gap-2 items-center">
            <p>Call</p>
            <img src="/image/logo/logowhite/call.png" className='object-contain h-4' alt="" />
        </div>
        </button>


    </>
  );
};

export default ThemeToggle;
