import React from 'react'
import myimg from '../assets/myimg.jpg'

const Home = () => {
  return (
    <div id='home' className="min-h-screen py-20 bg-black text-white text-center flex flex-col justify-center items-center">
   <div className="text-center">
        <img
          src={myimg}
          alt="my image"
          className="mx-auto w-48 h-48 rounded-full border-2 border-gray-300 object-cover hover:scale-105 "
        />
        <h2 className="mt-4 text-4xl font-semibold text-gray-800">
          I'm <span className="text-indigo-600">Rahul Kumar</span>,
          ..............................
        </h2>
        <p className="mt-4 text-lg text-gray-600 px-4 md:px-32">
          I'm a full stack developer with a passion for building great products.
          I love to learn new technologies and apply them to real world
          problems. I'm currently working on a project that will change the way
          we interact with the world around us. I'm excited to see it.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300  hover:scale-105">
            Contact With Me
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-300  hover:scale-105">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home
