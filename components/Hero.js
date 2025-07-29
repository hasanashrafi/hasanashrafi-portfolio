import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
    return (
        <section className="relative max-w-7xl mx-auto min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
            {/* Black/White Accent Background */}
            
            {/* Left: Info */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:px-12  py-8 md:py-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white mb-2 text-center md:text-left leading-tight">
                    Hi, I am <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">Hasan Ashrafi</span>
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
                    <span className="inline-block px-3 py-1 rounded-xl bg-black text-white dark:bg-white dark:text-black shadow-md">
                        Front-end Developer
                    </span>
                </div>
                <div className="flex gap-5 mb-8 justify-center md:justify-start">
                    <Link href="https://github.com/hasanashrafi" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                <Github className="size-7" />
                            </span>
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="group hover:scale-110 transition-transform">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                <Linkedin className="size-7" />
                            </span>
                        </a>
                    </Link>
                    <Link href="mailto:hasanashrafi.dev@gmail.com" passHref legacyBehavior>
                        <a className="group hover:scale-110 transition-transform">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                <Mail className="size-7" />
                            </span>
                        </a>
                    </Link>
                </div>
                <Link href="#contact" passHref legacyBehavior>
                    <a className="inline-block px-10 py-3 bg-black text-white rounded-full shadow-lg hover:bg-white hover:text-black border-2 border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:border-white transition font-bold mb-4 md:mb-0">
                        Contact Me
                    </a>
                </Link>
            </div>
            {/* Right: Photo */}
            <div className="relative z-10 flex-1 flex items-center justify-center py-8 md:py-0">
                <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-black via-gray-700 to-white p-1 dark:from-white dark:via-gray-300 dark:to-black shadow-2xl">
                    <Image src="/profile.jpg" alt="Profile" fill sizes="(max-width: 768px) 208px, 320px" className="rounded-full object-cover border-4 border-white dark:border-black" />
                </div>
            </div>
        </section>
    );
}

export default Hero; 