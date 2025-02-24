import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='max-w-4xl md:max-w-7xl p-2 mx-auto flex items-center gap-x-3 '>
      <Image src="/profile.jpg" width={300} height={100} className='h-64 rounded-md shadow-md' alt="profile" priority />
      <p>
        <p className='text-3xl font-bold'>About Me</p>
        <p className='text-lg text-justify text-opacity-80 text-gray-700'>I am a software developer with a passion for building scalable and
       efficient systems. I have experience with a variety of programming languages and
       technologies, including JavaScript, Python, and React. I am always looking to learn
       and improve my skills, and I am excited to contribute to a team that shares my
       passion for innovation and excellence.</p>
      </p>
    </div>
  )
}

export default About