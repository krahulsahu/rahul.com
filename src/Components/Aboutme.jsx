import React from 'react'
import myimg from "../assets/myimg.jpg";

const Aboutme = () => {
 return (
   <div id="about" className="bg-black text-white py-20">
     <div className="container mx-auto px-8 md:px-16 lg:px-24">
       <div className="flex flex-col md:flex-row items-center md:space-x-12">
         <img
           src={myimg}
           alt=""
           className="w-80 h-80 rounded object-cover mb-8 md:mb-0"
         />
         <div className="flex-1">
           <h2 className="text-4xl font-bold text-center mb-12">
             {" "}
             <span className="text-indigo-600"> So,</span> Who am I{" "}
             <span className="text-indigo-600">?</span>{" "}
           </h2>
           <p className="text-lg mb-8">
             I am a 4rd year student at the <span className="text-yellow-300"> NETAJI SUBHASH ENGINEERING COLLEGE,
             Kolkata (under MAKAUT)</span> , studying Computer Science. I am currently
             looking for a new job oppertunity in the field of software
             development. I am a self-taught web developer, and I have been
             working on projects for the past 2 years which will given in
             project section.
           </p>
           <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300  hover:scale-105">
             Contact me
           </button>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Aboutme




//    <div
//      id="about"
//      className="min-h-screen py-20 bg-black text-white text-center flex flex-col justify-center items-center"
//    >
//      <div className=" mb-8 md:mb-0">
//        <h2 className="text-4xl font-semibold mb-4">So, who am I?</h2>
//        <p className="text-gray-500 mb-4 text-1.5xl">
//          I am a 4rd year student at the NETAJI SUBHASH ENGINEERING COLLEGE,
//          Kolkata (under MAKAUT) , studying Computer Science. I am currently
//          looking for a new job oppertunity in the field of software development.
//          I am a self-taught web developer, and I have been working on projects
//          for the past 2 years which will given in project section.
//        </p>
//        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300  hover:scale-105">
//          Contact me
//        </button>
//      </div>
//      <div className="md:w-1/2  flex justify-center items-center  ">
//        <img
//          src={myimg}
//          alt="About Me"
//          className="w-100 md:w-60 w-100 md:h-60 rounded  object-cover mb-8 md:mb-0"
//        />
//      </div>
//    </div>