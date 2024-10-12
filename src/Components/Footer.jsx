import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div
        className=" container mx-auto px-8 md:px-16 lg:px-24 border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
      >
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Rahul. All Rights reserved.
        </p>
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
    
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;