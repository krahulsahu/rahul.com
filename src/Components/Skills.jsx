import React, { useState } from "react";
import skills from "../assets/skill.json";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  // Number of skills to show by default
  const defaultSkillCount = 8;

  // Skills to display based on the state
  const displayedSkills = showAll ? skills : skills.slice(0, defaultSkillCount);

  return (
    <section className="skills bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg"
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
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;
