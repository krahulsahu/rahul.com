import React from "react";
import myimg from "../assets/myimg1.jpg";

const Aboutme = () => {
  return (
    <div id="about" className="min-h-screen py-20 bg-black text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 mt-20">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={myimg}
            alt="Rahul Kumar"
            className="w-80 h-100 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-indigo-600"> So,</span> Who am I
              <span className="text-indigo-600">?</span>
            </h2>
            <p className="text-lg mb-8">
              Hey there! I’m Rahul Kumar, currently in my 4th year of studying
              Computer Science at{" "}
              <span className="text-yellow-300">
                Netaji Subhash Engineering College, Kolkata (under MAKAUT).
              </span>{" "}
              I’m super passionate about technology and programming, and over
              the last two years, I’ve dedicated a lot of time to learning,
              building, and growing as a web developer and coder. I’m always
              excited about tackling new challenges and finding ways to improve
              my skills.
            </p>

            <p className="text-lg mb-8">
              I’ve taught myself full-stack web development, focusing on the{" "}
              <span className="text-yellow-300">MERN stack</span> (MongoDB,
              Express.js, React.js, and Node.js), which allows me to build both
              the front-end and back-end of web applications. I’ve worked on
              several projects, including an e-commerce website and interactive
              visual tools like sorting visualizers. These projects have
              sharpened my skills and deepened my understanding of web
              development.
            </p>

            <p className="text-lg mb-8">
              In addition to web development, I love{" "}
              <span className="text-yellow-300">competitive coding</span>. I
              regularly practice on websites like{" "}
              <span className="text-yellow-300">LeetCode</span> and{" "}
              <span className="text-yellow-300">GeeksforGeeks</span>, where I’ve
              solved over 350+ problems on LeetCode and 300+ problems on
              GeeksforGeeks. This has helped me improve my problem-solving
              skills and prepared me for technical interviews. I enjoy tackling
              tricky coding problems and finding efficient solutions.
            </p>

            <p className="text-lg mb-8">
              Right now, I’m looking for job opportunities in software
              development, where I can apply my skills, contribute to exciting
              projects, and continue growing as a developer. I’m excited about
              working with experienced teams and learning from them as I
              continue my journey in the tech world.
            </p>

            <p className="text-lg mb-8">
              When I’m not coding or working on projects, I enjoy reading about
              new tech trends and exploring topics like artificial intelligence.
              I also love trying out new programming tools and frameworks.
            </p>

            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300 hover:scale-105">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
