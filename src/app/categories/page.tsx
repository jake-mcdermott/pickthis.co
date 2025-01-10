"use client"; // This marks the file as a client component

import Link from "next/link";
import { useEffect, useState } from "react";
import { ComputerDesktopIcon, SpeakerWaveIcon, Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"; // Import additional icons for the hamburger menu

export default function Home() {
  const categories = [
    { name: "monitors", icon: <ComputerDesktopIcon className="h-6 w-6 mr-2" /> },
    { name: "headphones", icon: <ComputerDesktopIcon className="h-6 w-6 mr-2" /> },
    { name: "graphics cards", icon: <ComputerDesktopIcon className="h-6 w-6 mr-2" /> },
    { name: "laptops", icon: <SpeakerWaveIcon className="h-6 w-6 mr-2" /> },
    { name: "smartphones", icon: <SpeakerWaveIcon className="h-6 w-6 mr-2" /> },
    { name: "tablets", icon: <SpeakerWaveIcon className="h-6 w-6 mr-2" /> }
  ];

  const [fadeIn, setFadeIn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu
  const [animationReset, setAnimationReset] = useState(false); // State to reset the dots animation

  // Fade in effect for page load
  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle menu and reset animation after menu closes
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setAnimationReset(true); // Trigger reset when the menu closes
      setTimeout(() => setAnimationReset(false), 300); // Reset after animation duration
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      } ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"} ${
        darkMode
          ? "bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-t from-gray-50 via-gray-100 to-gray-200"
      }`}
    >
      <nav className={`shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} fixed w-full z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo with horizontal dots animation */}
          <Link href="/" className={`text-3xl font-semibold flex items-center space-x-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            <div className="relative group flex items-center space-x-6 py-2 px-4 cursor-pointer">
              <div className="relative flex space-x-3">
                <span
                  className={`block w-2.5 h-2.5 rounded-full bg-teal-500 transition-transform duration-300 ${
                    animationReset ? "" : "group-hover:translate-y-[-5px]"
                  }`}
                ></span>
                <span
                  className={`block w-2.5 h-2.5 rounded-full bg-teal-500 transition-transform duration-300 ${
                    animationReset ? "" : "group-hover:translate-y-[-10px] delay-200"
                  }`}
                ></span>
                <span
                  className={`block w-2.5 h-2.5 rounded-full bg-teal-500 transition-transform duration-300 ${
                    animationReset ? "" : "group-hover:translate-y-[-15px] delay-400"
                  }`}
                ></span>
              </div>
              <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>pickthis.co</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={`text-gray-800 hover:text-gray-600 transition-all duration-300 ${darkMode ? "text-white" : ""}`}>
              Home
            </Link>
            <Link href="/categories" className={`text-gray-800 hover:text-gray-600 transition-all duration-300 ${darkMode ? "text-white" : ""}`}>
              Categories
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`ml-auto p-2 rounded-full transition-all duration-300 ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {darkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <XMarkIcon className={`h-8 w-8 ${darkMode ? "text-white" : "text-gray-800"}`} />
              ) : (
                <Bars3Icon className={`h-8 w-8 ${darkMode ? "text-white" : "text-gray-800"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-50 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
          <div className="px-4 py-2 flex flex-col space-y-4">
            <Link href="/" className={`text-gray-800 hover:text-gray-600 transition-all duration-300 ${darkMode ? "text-white" : ""}`}>
              Home
            </Link>
            <Link href="/categories" className={`text-gray-800 hover:text-gray-600 transition-all duration-300 ${darkMode ? "text-white" : ""}`}>
              Categories
            </Link>
            <Link href="/contact" className={`text-gray-800 hover:text-gray-600 transition-all duration-300 ${darkMode ? "text-white" : ""}`}>
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {darkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center pt-36 md:pt-52 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-semibold mb-4 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
          Pick a category.
        </h1>

        {/* Categories Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center mb-8 md:mb-10 pt-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name}`}
              className={`flex items-center justify-start md:justify-center w-40 h-16 md:w-60 md:h-20 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out px-4`}
            >
              {category.icon}
              <span className="text-left md:text-center">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className={`py-2 w-full ${darkMode ? "bg-gray-800" : "bg-transparent"} text-center`}>
        <p className={`text-xs font-light ${darkMode ? "text-gray-400" : "text-gray-400"}`}>&copy; 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
