import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LogoWithTagStyle from './Logo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-3 flex justify-between items-center gap-8">
      
        {/* Logo - Always Visible */}
        <LogoWithTagStyle onClick={() => setMenuOpen(false)} />

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-3 lg:space-x-5 text-sm font-medium items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-teal-400 transition">
                {item.label}
              </a>
            </li>
          ))}
          <li><DarkModeToggle /></li>
          <li>
            <a
              href="/Mohammad-Asad-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded transition"
            >
              <i className="fas fa-file-alt mr-2"></i> Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl z-[999]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* ✅ Mobile Menu - Separate Container Below Logo */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-gray-900 text-white px-6 py-6 space-y-4 z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="block text-base font-medium hover:text-teal-400 transition"
          >
            {item.label}
          </a>
        ))}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <DarkModeToggle />
          <a
            href="/images/Mohammad-Asad-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded text-sm"
          >
            <i className="fas fa-file-alt mr-2"></i> Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
