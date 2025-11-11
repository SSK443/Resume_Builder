import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-16">
      <footer
        className="px-4 sm:px-6 md:px-12 lg:px-20 w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white"
        aria-label="Footer for AI Resume Builder"
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 sm:gap-10 border-b border-indigo-200 py-6 sm:py-8">
          <div className="md:max-w-96">
            <Link to="/" className="flex items-center gap-3 hover:no-underline">
              <img
                src="./assets/resume.svg"
                alt="AI Resume Builder Icon"
                width="50"
                height="50"
                className="flex-shrink-0"
              />
              <h1 className="text-3xl text-white font-bold m-0">
                AI Resume Builder
              </h1>
            </Link>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm">
              AI Resume Builder empowers job seekers to create professional,
              ATS-optimized resumes in minutes, helping you land your dream job
              with ease.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href="https://play.google.com/store">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                  alt="Download AI Resume Builder on Google Play"
                  className="h-8 sm:h-10 w-auto border border-indigo-200 rounded hover:opacity-80 transition"
                />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                  alt="Download AI Resume Builder on the App Store"
                  className="h-8 sm:h-10 w-auto border border-indigo-200 rounded hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row items-start justify-end gap-8 sm:gap-12 md:gap-20 lg:gap-40">
            <div>
              <h2 className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                Company
              </h2>
              <ul className="text-xs sm:text-sm space-y-2">
                <li>
                  <Link to="/" className="hover:text-indigo-100 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="hover:text-indigo-100 transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/templates"
                    className="hover:text-indigo-100 transition"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-indigo-100 transition"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                Get in Touch
              </h2>
              <div className="text-xs sm:text-sm space-y-2">
                <p>+1-800-555-1234</p>
                <p>support@airesumebuilder.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-xs sm:text-sm pb-2">
          Copyright {new Date().getFullYear()} ©{" "}
          <a
            href="https://airesumebuilder.com"
            className="hover:text-indigo-100 transition"
          >
            AI Resume Builder
          </a>
          . All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
