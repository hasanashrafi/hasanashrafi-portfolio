
// components/Skills.js
import { frontendSkills } from '@/data/data';

import React from 'react';
import SkillCard from './templates/SkillCard';

function Skills() {
 

  return (
    <div id='skills' className="container mx-auto px-2 md:py-12 max-w-7xl">
        <p className="text-3xl font-bold mb-8">Skills</p>
        <ul className="list-none flex items-center flex-wrap gap-x-2 mt-2 justify-center ">
          {frontendSkills.map((skill, index) => (
           <SkillCard key={index} skill={skill} index={index} />
          ))}
        </ul>
    
    </div>
  );
}

export default Skills;
