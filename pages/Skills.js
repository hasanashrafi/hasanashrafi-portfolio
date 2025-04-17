
// components/Skills.js
import SkillCard from '@/app/components/templates/SkillCard';
import { frontendSkills } from '@/data/data';

import React from 'react';

function Skills() {


  return (
    <div id='skills' className="container mx-auto px-6 md:py-12 max-w-7xl ">
      <p className="text-3xl font-bold  mb-8 dark:text-gray-500">Skills</p>
      <ul className="list-none flex items-center gap-2 flex-wrap  md:justify-start justify-center ">
        {frontendSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </ul>

    </div>
  );
}

export default Skills;
