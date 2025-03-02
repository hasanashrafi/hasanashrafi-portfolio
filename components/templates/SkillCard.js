import React from 'react'
import Image from 'next/image';

function SkillCard({skill,index}) {
  return (
    <div>
     <ul >
              <li className="flex flex-col items-center ease-in-out hover:scale-110 transition-all duration-500  dark:text-gray-300  w-36 text-center  text-black rounded-full p-2 m-2 text-sm ">
              <Image width={50} height={50} src={skill.image} loading='lazy' alt={skill.name} />
               <span >
                {skill.name}
               </span>
              </li>
            </ul>
    </div>
  )
}

export default SkillCard