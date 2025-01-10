"use client"; // Ensure this is a client component

import { use } from "react"; // React.use() hook to unwrap promises
import { categoryOptions, CategoryOptions } from "../../categoryOptions"; // Adjust the path as needed
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"; // Icons for menu

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params); // Use React.use() to unwrap the promise
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const options = categoryOptions[category as keyof CategoryOptions] || null;

  const trustedReviews = [
    {
      reviewer: "Marques Brownlee",
      title: "Best Noise Cancelling Headphones?",
      link: "https://www.youtube.com/watch?v=DAxj9CjczXw"
    },
    {
      reviewer: "The Verge",
      title: "Best Budget Headphones 2025",
      link: "https://www.theverge.com/21345733/best-noise-canceling-headphones"
    },
    {
      reviewer: "Alice Johnson",
      title: "Sony's Hidden Gem",
      link: "https://www.reddit.com/r/headphones/comments/1eapoub/my_review_of_the_sony_ult_wear_headphones_they/"
    },
  ];

  if (!options) {
    return <div>Category not found</div>;
  }

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
      {/* Navbar Section */}
      <nav className={`shadow-md ${darkMode ? "bg-gray-800" : "bg-white"} fixed w-full z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo with horizontal dots animation */}
          <Link href="/" className={`text-3xl font-semibold flex items-center space-x-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            <div className="relative group flex items-center space-x-6 py-2 px-4 cursor-pointer">
              <div className="relative flex space-x-3">
                <span
                  className={`block w-2.5 h-2.5 rounded-full bg-teal-500 transition-transform duration-300 group-hover:translate-y-[-5px]`}
                ></span>
                <span
                  className={`block w-2.5 h-2.5 rounded-full bg-teal-500 transition-transform duration-300 group-hover:translate-y-[-10px] delay-200`}
                ></span>
                <span
                  className={`block w-2.5 h-2.5 rounded-full bg-teal-500 transition-transform duration-300 group-hover:translate-y-[-15px] delay-400`}
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
            <button onClick={() => setMenuOpen(!menuOpen)}>
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

      {/* Category Section */}
      <div className="text-center pt-36 md:pt-30 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-semibold mb-4 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Object.entries(options).map(([key, { name, price, description, image }]) => (
            <div key={key} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="w-full h-70 bg-white flex justify-center items-center rounded-lg mb-4">
                <img
                  src={image}
                  alt={name}
                  className="object-contain max-h-[320px] max-w-full"
                  style={{ objectFit: 'contain', maxHeight: '320px' }}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-gray-500 mt-2">{description}</p>
              <p className="text-2xl font-bold text-gray-900 mt-4">{price}</p>
              <button className="mt-6 bg-blue-500 text-white py-3 px-12 rounded-full hover:bg-blue-600">Buy Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className={`text-3xl font-semibold mb-6 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
          Trusted Reviews
        </h2>
        <ul className="space-y-4">
          {trustedReviews.map((review, index) => (
            <li key={index} className="flex flex-col items-start">
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-left ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"} p-4 rounded-lg transition-all duration-300`}
              >
                <h3 className={`text-xl font-semibold ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                  {review.reviewer}
                </h3>
                <p className={`text-lg text-${darkMode ? "gray-300" : "gray-500"} mb-2`}>{review.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Footer Section */}
      <footer className={`py-2 w-full ${darkMode ? "bg-gray-800" : "bg-transparent"} text-center`}>
        <p className={`text-xs font-light ${darkMode ? "text-gray-400" : "text-gray-400"}`}>&copy; 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
