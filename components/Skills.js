// components/Skills.js
import React from 'react';

function Skills() {
  const frontendSkills = [
    'SPA',
    'MUI',
    'API',
    'RWD',
    'React',
    'Redux',
    'Next.js',
    'mongoDB',
    'HTML/CSS',
    'bootstrap',
    'JavaScript',
    'Git-Github',
    'ReactQuery',
    'TailwindCss',
    'Accessibility',
    'Redux-toolkit',
  ];

  return (
    <div id='skills' className=" container mx-auto px-4 md: py-12 max-w-7xl">
      <div>
        <p className="text-3xl font-bold mb-8">Skills</p>
        <ul className="list-none flex items-center flex-wrap gap-x-3 mt-2 justify-center md:justify-start ">
          {frontendSkills.map((skill, index) => (
            <li key={index} className="hover:bg-blue-800 ease-in-out transition-all duration-500 dark:hover:bg-gray-800 dark:text-gray-300 dark:bg-gray-600 w-36 text-center bg-blue-500 rounded-full p-2 m-1 text-lg text-white">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;