'use client'
import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"


function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
                scale: [null, 1.1, 1.2],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
    >
      <div className=' flex flex-col items-center justify-center '>
        <li className=" flex justify-center   dark:text-gray-300  w-36 text-center  text-black rounded-full p-2 text-sm ">
          <Image className='bg-white rounded-full p-0.5' width={50} height={50} src={skill.image} loading='lazy' alt={skill.name} />
        </li>
        <p className='text-center mx-auto'>
          {skill.name}
        </p>
      </div>
    </motion.div>
  );
}

export default SkillCard;