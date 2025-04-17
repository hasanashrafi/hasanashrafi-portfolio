'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"

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
        <p className='text-center mx-auto dark:text-gray-400'>
          {skill.name}
        </p>
      </div>
    </motion.div>
  );
}

export default SkillCard;