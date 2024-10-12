import React from 'react'
import myimg from '../assets/myimg.jpg'
import resume2 from "../assets/projectImg/resume2.png";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen py-20 bg-black text-white text-center flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <img
          src={myimg}
          alt="my image"
          className="mx-auto w-48 h-48 rounded-full border-2 border-gray-300 object-cover hover:scale-105 "
        />
        <h2 className="mt-4 text-4xl font-semibold text-white">Hi,</h2>
        <h2 className="mt-4 text-4xl font-semibold text-gray-800">
          I'm <span className="text-indigo-600">Rahul Kumar</span>, ...........
        </h2>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Aspiring Software Engineer
          <span className="text-indigo-600"> | Competitive Coder | </span> MERN
          Stack Developer
        </h2>

        <p className="mt-4 text-lg text-gray-500 px-4 md:px-32">
          Hello! I’m Rahul Kumar, a passionate and ambitious BTech student
          specializing in Computer Science & Engineering. With a deep-rooted
          interest in technology and programming, I have dedicated my academic
          journey to mastering full-stack web development and competitive
          coding. As someone who thrives in the dynamic and ever-evolving tech
          world, I constantly seek new challenges and opportunities to grow as a
          software developer.
        </p>
        <p className="mt-4 text-lg text-gray-400 px-4 md:px-32">
          I’m particularly skilled in full-stack development, with expertise in
          the MERN (MongoDB, Express.js, React.js, Node.js) stack. Over the
          course of my education, I’ve gained hands-on experience building
          real-world applications and solving algorithmic problems that have
          helped me sharpen my technical skills and logical thinking. My
          projects are a reflection of my passion for web development and my
          ability to apply theoretical knowledge to practical solutions.
        </p>
        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          <div className="rounded-lg p-4 shadow-lg hover:bg-white hover:shadow-2xl border-2 border-blue-500 transition duration-300">
            <h3 className="text-xl font-medium text-blue-700 mb-2">
              Programming Languages
            </h3>
            <p className="text-gray-700">
              Strong proficiency in <span className="font-semibold">Java</span>,{" "}
              <span className="font-semibold">C++</span>, and{" "}
              <span className="font-semibold">JavaScript</span>, essential in
              academic and project work.
            </p>
          </div>

          <div className=" rounded-lg p-4 shadow-lg hover:bg-green-100 hover:shadow-2xl border-2 border-blue-500 transition duration-300">
            <h3 className="text-xl font-medium text-green-700 mb-2">
              Web Development
            </h3>
            <p className="text-gray-700">
              Proficient in <span className="font-semibold">React.js</span> for
              building dynamic front-end applications, and{" "}
              <span className="font-semibold">Node.js</span> and{" "}
              <span className="font-semibold">Express.js</span>
              for efficient back-end systems.
            </p>
          </div>

          <div className=" rounded-lg p-4 shadow-lg hover:bg-yellow-50 hover:shadow-2xl border-2 border-blue-500 transition duration-300">
            <h3 className="text-xl font-medium text-yellow-700 mb-2">
              Databases
            </h3>
            <p className="text-gray-700">
              Solid experience with{" "}
              <span className="font-semibold">MongoDB</span> and{" "}
              <span className="font-semibold">MySQL</span>
              for designing and managing databases in complex web applications.
            </p>
          </div>

          <div className=" rounded-lg p-4 shadow-lg hover:bg-purple-50 hover:shadow-2xl border-2 border-blue-500 transition duration-300">
            <h3 className="text-xl font-medium text-purple-700 mb-2">
              Competitive Programming
            </h3>
            <p className="text-gray-700">
              Solved <span className="font-semibold">350+</span> questions on{" "}
              <span className="font-semibold">LeetCode</span>
              and <span className="font-semibold">300+</span> on{" "}
              <span className="font-semibold">GeeksforGeeks</span>, enhancing
              problem-solving and algorithm optimization skills.
            </p>
          </div>
        </div>

        <div className="mt-8 space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300  hover:scale-105">
            Contact With Me
          </button>
          <a
            href={resume2}
            download="resume2.png"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home
