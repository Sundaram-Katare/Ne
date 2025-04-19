import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiPostgresql } from "react-icons/si";

const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgresSQL", icon: <SiPostgresql className="text-red-500" />}
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];


const Skill = () => {
    return (
      <>
       <section className="py-16 bg-white dark:bg-gray-900">
         <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">My Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {skillsData.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">{section.category}</h3>

                        <div className="flex flex-wrap gap-4">
                            {section.skills.map((Skill, index) => (
                                <div key={index}
                                     className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm"
                                >
                                    <span className="text-xl">{Skill.icon}</span> 
                                    <span className="text-sm text-gray-800 dark:text-gray-100">{Skill.name}</span>
                                </div>
                            ))}
                        </div>
                        </div>
                ))}
            </div>
         </div>
       </section>
      </>
    );
};

export default Skill;