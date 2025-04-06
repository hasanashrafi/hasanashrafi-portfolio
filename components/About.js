import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=' container mx-auto px-6 py-12 '>
      <p className='text-3xl font-bold mb-8 dark:text-gray-500'>About Me</p>
      <div className=' mx-auto flex flex-col md:flex-row items-center gap-x-3 '>
        <Image
          src="/profile.jpg"
          width={1000}
          height={1000}
          className='size-72 mb-5 rounded-full shadow-lg object-cover'
          alt="profile"
          
          loading="lazy"
        />

        <div>
          <p className='dark:text-gray-400 text-lg text-wrap text-opacity-80 text-gray-50'>
            I am a software developer with a passion for building scalable and efficient systems.
            I have experience with a  programming languages and
            technologies, including JavaScript, and React. I am always looking to learn
            and improve my skills
          </p>
        </div>
      </div>
    </div>
  )
}

export default About