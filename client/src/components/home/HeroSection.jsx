import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="section"
      className={`bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] min-h-screen w-full ${
        menuOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-4 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center gap-3 hover:no-underline">
          <img
            src="./resume.svg"
            alt="AI Resume Builder Icon"
            width="50"
            height="50"
            className="flex-shrink-0"
          />
          <h1 className="text-3xl text-indigo-600 font-bold m-0">
            AI Resume Builder
          </h1>
        </Link>
        {/* Navigation Menu */}
     
        <nav
          className={`fixed md:static inset-0 z-50 md:flex md:flex-row flex-col items-center justify-center transition-all duration-300 ease-in-out bg-white/90 md:bg-transparent backdrop-blur-sm text-gray-900 text-sm font-normal ${
            menuOpen
              ? "w-full h-full opacity-100"
              : "w-0 h-full opacity-0 md:w-auto md:opacity-100 overflow-hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center h-full md:h-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base sm:text-sm hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>

            {/* Smooth scroll to Features */}
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false); // Close mobile menu
              }}
              className="text-base sm:text-sm hover:text-indigo-600 cursor-pointer"
            >
              Features
            </a>

            {/* Smooth scroll to Testimonials */}
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="text-base sm:text-sm hover:text-indigo-600 cursor-pointer"
            >
              Testimonials
            </a>

            {/* Smooth scroll to Contact (Footer) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="text-base sm:text-sm hover:text-indigo-600 cursor-pointer"
            >
              Contact
            </a>

            {/* Close Menu Button (Mobile) */}
            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden text-gray-600 p-4 absolute top-4 right-4"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/app?state=register"
            className="text-indigo-600 bg-indigo-100 px-4 sm:px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
          >
            Log In
          </Link>
          <Link
            to="/app?state=login"
            className="bg-indigo-600 text-white px-4 sm:px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
        {/* Open Menu Button (Mobile) */}
        <button
          onClick={() => {
            setMenuOpen(true);
            setTimeout(() => document.querySelector("nav a")?.focus(), 100);
          }}
          className="md:hidden text-gray-600 p-2"
          aria-label="Open menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Content (Hero Section) */}
      <main className="flex flex-col md:flex-row items-center justify-between mt-8 sm:mt-12 md:mt-16 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto w-full text-center md:text-left">
        <div className="flex flex-col items-center md:items-start max-w-lg">
          <button
            className="mt-8 sm:mt-12 mb-4 sm:mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 hover:bg-indigo-50 transition"
            type="button"
          >
            <span>Stand out with an AI-crafted resume.</span>
            <span className="flex items-center justify-center size-5 sm:size-6 p-1 rounded-full bg-indigo-600">
              <svg
                width="14"
                height="11"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-full sm:max-w-md md:max-w-lg">
            Build your dream resume with{" "}
            <span className="text-indigo-600">AI Resume Builder</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-full sm:max-w-md leading-relaxed">
            Create ATS-friendly, professional resumes in minutes using AI Resume
            Builder, designed to land you your next job.
          </p>

          <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
            <Link
              to="/app"
              className="bg-indigo-600 text-white px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
            >
              <span>Get Started</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              to="/sample-resumes"
              className="text-indigo-600 bg-indigo-100 px-4 sm:px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
            >
              See Sample Resumes
            </Link>
          </div>
        </div>

        {/* Photos Grid */}
        <div
          aria-label="Sample resume templates"
          className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-full"
        >
          {[
            "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
          ].map((src, index) => (
            <img
              key={index}
              alt={`Sample resume template ${index + 1}`}
              src={src}
              loading="lazy"
              className="w-full sm:w-32 md:w-36 h-40 sm:h-44 rounded-lg hover:scale-105 transition duration-300 object-cover flex-shrink-0 shadow-lg"
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export default HeroSection;
