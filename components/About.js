import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=' container mx-auto px-6 py-12'>
      <p className='text-3xl font-bold mb-8'>About Me</p>
      <div className=' mx-auto flex flex-col md:flex-row items-center gap-x-3 '>
        <Image src="/profile.jpg" width={300} height={100} className='  mb-5 rounded-full shadow-md' alt="profile" priority />
        <div>
          <p className='dark:text-gray-300 text-lg text-pretty text-opacity-80 text-gray-700'>I am a software developer with a passion for building scalable and
            efficient systems. <br/>
            I have experience with a variety of programming languages and
            technologies, including JavaScript, Python, and React.<br/> I am always looking to learn
            and improve my skills, and I am excited to contribute to a team that shares my
            passion for innovation and excellence.</p>
        </div>
      </div>
    </div>
  )
}

export default About