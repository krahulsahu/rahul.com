import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-10 lg:px-24 py-4 z-50 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="My logo" className="h-10 w-10 mr-4" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About_Me
          </Link>
          <Link to="/certification" className="hover:text-gray-400">
            Certifications
          </Link>
          <Link to="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-green-300 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
