import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
    return (
        <section className="relative w-full h-auto min-h-[60vh] flex flex-col md:flex-row items-stretch max-w-none pb-8 md:pb-0 ">
            {/* Mobile BG Image */}
            <div className="absolute inset-0 md:hidden -z-10 ">
                <Image src="/images/banner.webp" alt="Banner" fill className="object-cover w-full h-full" priority />
                <div className="absolute inset-0 " />
            </div>
            {/* Left: Info */}
            <div className="pt-5 flex-1 flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:px-12 bg-gray-100/90 dark:bg-neutral-900/90 md:bg-gray-100 md:dark:bg-neutral-900 z-10 min-w-[0] max-w-full md:max-w-[600px] shadow-xl md:rounded-none rounded-b-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 text-center md:text-left">Hi, I am</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 text-center md:text-left">Hasan Ashrafi</h2>
                <div className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 text-center md:text-left">Front-end Developer / UI Designer</div>
                <div className="flex gap-4 mb-6 justify-center md:justify-start">
                    <a href="https://github.com/hasanashrafi" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><Github className="size-7" /></a>
                    <a href="https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><Linkedin className="size-7" /></a>
                    <a href="mailto:hasanashrafi.dev@gmail.com" className="hover:text-sky-500"><Mail className="size-7" /></a>
                </div>
                <a href="#contact" className="inline-block px-8 py-3 bg-black text-white rounded shadow hover:bg-sky-600 transition font-semibold border-2 border-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-sky-500 dark:hover:text-white mb-4 md:mb-0">Contact Me</a>
            </div>
            {/* Right: Photo */}
            <div className="flex-1 flex items-center justify-center bg-black relative overflow-hidden py-8 md:py-0 md:bg-black">
                <Image src="/profile.jpg" alt="Profile" width={340} height={340} className="w-1/2 h-auto rounded-2xl shadow-2xl object-cover border-8 border-white dark:border-neutral-900" priority />
            </div>
        </section>
    );
}

export default Hero; 