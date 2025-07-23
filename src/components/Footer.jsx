import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-12 shadow-inner">
      <p className="text-sm tracking-wide">
        &copy; {currentYear} <span className="font-semibold">Mohammad Asad</span>. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 space-x-4 text-lg">
        <a
          href="https://github.com/mohdasad05"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transform transition-transform hover:scale-125 duration-300"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/mohammad-asad-631647277"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transform transition-transform hover:scale-125 duration-300"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="mailto:mohdasad.9506@gmail.com"
          className="hover:text-teal-400 transform transition-transform hover:scale-125 duration-300"
        >
          <i className="far fa-envelope"></i>
        </a>
        <a
          href="https://www.youtube.com/@mohdasad_05"
          className="hover:text-teal-400 transform transition-transform hover:scale-125 duration-300"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
