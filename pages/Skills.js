
// components/Skills.js
import SkillCard from '@/app/components/templates/SkillCard';
import { frontendSkills } from '@/data/data';
import React from 'react';

function Skills() {
  return (
    <section className="w-full bg-white dark:bg-neutral-950 py-12 sm:py-16 px-2 sm:px-4 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center border-2 border-black dark:border-white px-6 sm:px-8 py-2 rounded-lg bg-gray-50 dark:bg-black shadow text-gray-900 dark:text-gray-100">Skills</h2>
        </div>
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
