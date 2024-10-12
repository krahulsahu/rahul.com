import React, { useState } from "react";
import skills from "../assets/skill.json"; // Ensure this JSON is correctly structured with your provided data

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const defaultSkillCount = 8;

  const displayedSkills = showAll ? skills : skills.slice(0, defaultSkillCount);

  return (
    <div id="skill" className="min-h-screen bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 mt-20">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="mx-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-4"
              />
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        {skills.length > defaultSkillCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:scale-105 transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
        <div className="mt-6 flex justify-between text-center px-10 md:px-5">
          <div>
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
            >
              15+
            </h3>
            <p>Daily Life Projects</p>
          </div>
          <div className="hidden md:block">
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
            >
              300+
            </h3>
            <p>DSA GFG Problem Solve</p>
          </div>
          <div>
            <h3
              className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
            >
              350+
            </h3>
            <p>DSA LeetCode Problem Solve</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
