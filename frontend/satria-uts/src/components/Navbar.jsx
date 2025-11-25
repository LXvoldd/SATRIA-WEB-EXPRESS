import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/medcom.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="bg-linear-to-r from-teal-500 to-green-600 fixed w-full z-20 top-0 start-0 shadow-lg">
      <div className="max-w-7xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-16 drop-shadow-md" alt="Medcom Logo" />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden inline-flex items-center p-2 text-white hover:bg-white/20 rounded-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg text-white px-6 py-4 space-y-4 font-medium">
          <Link to="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-200">
            About
          </Link>

          <button
            onClick={handleDarkMode}
            className="block px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg"
          >
            {darkMode ? "☀ Mode Terang" : "🌙 Mode Gelap"}
          </button>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
