import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {


  return (
    <div className=" container mx-auto px-6 pt-32 pb-12">
      <div className="max-w-7xl">
        <div className='w-full  flex items-center justify-between'>
          <p className="mb-10 dark:animate-none animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white dark:border-r-gray-800 pr-5 text-4xl  dark:text-gray-300 font-bold">
            Hi, I am <br />
            <span className=" bg-clip-text bg-gradient-to-r from-indigo-400  to-pink-400 text-transparent">Hasan Aashrafi</span>
          </p>
          <Image src="/images/banner.webp" alt='banner' width={350} height={350} priority className='animate-pulse' />

        </div>
        <p className="  dark:text-gray-100 text-xl text-gray-50 mb-8">
          A passionate Frontend Developer crafting beautiful and functional web experiences.
          I specialize in React, Next.js, and modern web technologies.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </a>
          <div className="flex items-center gap-4 ml-4">
            <Link
              href="https://github.com/hasanashrafi"

              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-50 hover:text-blue-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4"

              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-50 hover:text-blue-500 transition-colors"
            >
              <Linkedin className=" h-6 w-6" />
            </Link>
            <Link
              href="mailto:hasanashrafi.dev@gmail.com"
              className="dark:text-gray-400 text-gray-50 hover:text-blue-500 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;