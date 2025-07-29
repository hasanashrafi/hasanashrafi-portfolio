'use client'
import React from 'react';
import Image from 'next/image';

function SkillCard({ skill }) {
  return (
   
      <div className='flex flex-col items-center justify-center'>
        <div className="flex justify-center  w-28 text-center text-black rounded-full p-2 text-sm">
          <Image
            className='bg-white dark:bg-gray-700 rounded-full p-1.5'
            width={50}
            height={50}
            src={skill.image}
            loading='lazy'
            alt={skill.name}
          />
        </div>
        <p className='text-center mx-auto text-zinc-700 dark:text-gray-400'>
          {skill.name}
        </p>
      </div>
    
  );
}

export default SkillCard;