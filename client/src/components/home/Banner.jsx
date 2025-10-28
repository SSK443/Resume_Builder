import React from "react";

function Banner() {
  return (
    <div className="w-full py-2.5 font-medium text-sm text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
        {/* ✅ Always show this (even on phone) */}
        <p>
          <span className="px-3 py-1 rounded-lg text-white bg-purple-500 mr-2">
            New
          </span>
          AI Resume Builder
        </p>

        {/* ✅ Show only on larger screens */}
        <div className="hidden sm:flex items-center gap-4">
          <span>|</span>
          <p>
            <span className="px-3 py-1 rounded-md text-indigo-600 bg-white mr-2">
              Launch offer
            </span>
            🎁 Free for first 1000 customers
          </p>
          <span>|</span>
          <p>Prebuilt Templates live for you</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
