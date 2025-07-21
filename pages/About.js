
import React from 'react'

function About() {
  return (
    <section className="w-full bg-gray-50 dark:bg-neutral-900 py-12 sm:py-16 px-2 sm:px-4 flex justify-center">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center border-2 border-black dark:border-white px-6 sm:px-8 py-2 rounded-lg bg-white dark:bg-black shadow text-gray-900 dark:text-gray-100">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-8 w-full">
          
          <div className="w-full">
            <p className="text-base sm:text-lg text-gray-900 dark:text-gray-100 text-center md:text-left max-w-xl mx-auto">
              I am a software developer with a passion for building scalable and efficient systems. I have experience with a variety of programming languages and technologies, including JavaScript and React. I am always looking to learn and improve my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About