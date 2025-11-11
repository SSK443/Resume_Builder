import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/features/authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <div className="shadow-md bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 text-slate-800 transition-all duration-300">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:no-underline group"
        >
          {/* FIXED: Absolute path from public/ */}
          <img
         src="./assets/resume.svg"
            alt="AI Resume Builder Icon"
            width="50"
            height="50"
            className="flex-shrink-0 transition-transform group-hover:scale-105"
          />
          <h1 className="text-3xl font-bold text-indigo-600 bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent transition-colors group-hover:text-indigo-700">
            AI Resume Builder
          </h1>
        </Link>

        {/* User Info and Logout */}
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden font-medium text-gray-700">
            Hi, {user?.name}
          </p>
          <button
            onClick={logoutUser}
            className="bg-white hover:bg-indigo-50 border border-indigo-300 text-indigo-600 px-6 py-2 rounded-full font-semibold shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
