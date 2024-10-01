// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} PDF Book Viewer. All rights reserved.</p>
        <p className="mt-2">
          <a href="/" className="hover:text-gray-400">Privacy Policy</a>
          &nbsp;|&nbsp;
          <a href="/" className="hover:text-gray-400">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
