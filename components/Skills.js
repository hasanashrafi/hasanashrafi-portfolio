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
    <div id='skills' className="mt-4 p-2 max-w-4xl md:max-w-7xl">
      <div>
        <p className="text-2xl font-bold">Skills</p>
        <ul className="list-none flex items-center flex-wrap gap-x-3 mt-2 justify-center">
          {frontendSkills.map((skill, index) => (
            <li key={index} className="w-36 text-center bg-blue-500 rounded-full p-2 m-1 text-lg text-white">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;