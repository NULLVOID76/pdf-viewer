// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-800 dark:to-gray-900 shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">PDF Book Viewer</h1>
        <ul className="flex space-x-6 items-center">
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full transition-colors duration-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
