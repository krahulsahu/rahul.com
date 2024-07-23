import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-10 lg:px-24 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img href="#" src={logo} alt="My logo" className="h-10 w-10 mr-4" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className='hover:text-gray-400' >Home</a>
          <a href="#about" className='hover:text-gray-400' >About Me</a>
          <a href="#certifications" className='hover:text-gray-400' >Certifications</a>
          <a href="#skill" className='hover:text-gray-400' >Skills</a>
          <a href="#Projects" className='hover:text-gray-400' >Projects</a>
          <a href="#contact" className="hover:text-gray-400" >Contact</a>
        </div>
        <div>
            <button className="bg-gradient-to-r from-green-300 to-blue-500 text-white  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Login
            </button>          
        </div>
      </div>
    </nav>
  );
}

export default Navbar
