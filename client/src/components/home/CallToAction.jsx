import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <section
        className="flex flex-col items-center justify-center mx-auto w-full max-w-6xl text-center rounded-2xl py-12 sm:py-16 md:py-24 mt-16 mb-16 px-4 sm:px-6 md:px-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-1.png')] bg-cover bg-center bg-no-repeat bg-opacity-75"
        aria-label="Call to Action for AI Resume Builder"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white max-w-lg sm:max-w-2xl md:max-w-3xl">
          Launch Your Career with{" "}
          <span className="text-indigo-200">AI Resume Builder</span>
        </h1>
        <div className="h-[3px] w-24 sm:w-32 my-3 sm:my-4 bg-gradient-to-l from-transparent to-indigo-600"></div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-md sm:max-w-lg md:max-w-xl">
          Create a standout, ATS-friendly resume in minutes with our AI-powered
          tools, designed to help you land your dream job.
        </p>
        <Link
          to="/app?state=register"
          className="px-6 sm:px-8 py-2 sm:py-2.5 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-105 transition duration-300 text-white rounded-full"
        >
          Build Your Resume Now
        </Link>
      </section>
    </>
  );
}

export default CallToAction;
