import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl px-2 py-1 rounded hover:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
};

export default DarkModeToggle;
