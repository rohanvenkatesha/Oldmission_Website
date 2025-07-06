import React, { useState, useEffect } from 'react';
// Removed: import { useTheme } from '../../context/ThemeContext'
// Removed: import Image from 'next/image'
// Removed: import Link from 'next/link'
// Removed: import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  // --- Start of self-contained ThemeContext logic ---
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'light';
    }
    return 'light';
  });

  // Effect to apply theme class to HTML element and save to localStorage
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  // --- End of self-contained ThemeContext logic ---

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex justify-center py-4 px-6 bg-transparent">
      <nav
        className={`transition-all duration-300 ease-in-out flex flex-col items-center max-w-7xl w-full bg-white dark:bg-black rounded-xl shadow-2xl relative ${
          mobileMenuOpen ? 'pb-6' : 'pb-0'
        }`}
      >
        {/* Top Row */}
        <div className="w-full flex justify-between items-center p-6">
          {/* Logo */}
          <a href="/"> {/* Replaced Link with <a> */}
            <img
              src="/oldmissionmedicinelogo.png" // Replaced Image with <img> and a placeholder
              alt="Old Mission Medicine Logo"
              width={80}
              height={20}
              className="cursor-pointer"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex flex-1 items-center justify-around text-sm md:text-base font-medium text-gray-900 dark:text-white">

            {/* About Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition">About</button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white dark:bg-gray-800 shadow-md rounded-md py-2 z-50 min-w-max">
                <a // Replaced Link with <a>
                  href="#about-us"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  About Us
                </a>
                <a // Replaced Link with <a>
                  href="#cpom"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  CPOM
                </a>
                <a // Replaced Link with <a>
                  href="#leadership"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Leadership
                </a>
                <a // Replaced Link with <a>
                  href="#our-team"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Our Team
                </a>
                <a // Replaced Link with <a>
                  href="#virtual-office"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Virtual Office
                </a>
                <a // Replaced Link with <a>
                  href="#videos"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Videos
                </a>
              </div>
            </div>

            <a href="#services" className="hover:text-blue-600 transition"> {/* Replaced Link with <a> */}
              Lifestyle Medicine
            </a>
            <a href="#iv-aesthetics" className="hover:text-blue-600 transition"> {/* Replaced Link with <a> */}
              IV & Aesthetics
            </a>
            <a href="#shop" className="hover:text-blue-600 transition"> {/* Replaced Link with <a> */}
              Shop
            </a>
            <a href="#footer" className="hover:text-blue-600 transition"> {/* Replaced Link with <a> */}
              Contact
            </a>

            {/* Theme toggle for Desktop */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? (
                // FiSun icon as SVG
                <svg className="text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M2 12h1m15.364 6.364l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              ) : (
                // FiMoon icon as SVG
                <svg className="text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              )}
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-900 dark:text-white"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Expanded Links */}
        {mobileMenuOpen && (
          <div className="w-full bg-white dark:bg-black text-gray-900 dark:text-white px-6 pt-2 pb-4 rounded-b-xl space-y-4 transition-all duration-300 md:hidden">
            <a href="/" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}> {/* Replaced Link with <a> */}
              Home
            </a>

            <details className="group">
              <summary className="cursor-pointer hover:text-blue-600 transition list-none font-medium">
                About
              </summary>
              <div className="pl-4 mt-2 space-y-1">
                <a href="#about-us" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>About Us</a> {/* Replaced Link with <a> */}
                <a href="#cpom" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>CPOM</a> {/* Replaced Link with <a> */}
                <a href="#leadership" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Leadership</a> {/* Replaced Link with <a> */}
                <a href="#our-team" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Our Team</a> {/* Replaced Link with <a> */}
                <a href="#virtual-office" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Virtual Office</a> {/* Replaced Link with <a> */}
                <a href="#videos" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Videos</a> {/* Replaced Link with <a> */}
              </div>
            </details>

            <a href="#lifestyle" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Lifestyle Medicine</a> {/* Replaced Link with <a> */}
            <a href="#iv-aesthetics" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>IV & Aesthetics</a> {/* Replaced Link with <a> */}
            <a href="#shop" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Shop</a> {/* Replaced Link with <a> */}
            <a href="#contact" className="block hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a> {/* Replaced Link with <a> */}

            {/* Theme toggle for Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mt-2"
            >
              {theme === 'dark' ? (
                // FiSun icon as SVG
                <svg className="text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M2 12h1m15.364 6.364l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              ) : (
                // FiMoon icon as SVG
                <svg className="text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        )}
      </nav>
    </div>
  )
}
