'use client'
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-6 pb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl">
        <div className='w-full md:flex md:flex-row flex flex-col-reverse items-center justify-between'>
          <motion.div className='' variants={itemVariants}>
            <motion.p
              className="mb-10 dark:animate-none animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white dark:border-r-gray-800 pr-5 text-4xl dark:text-gray-400 font-bold"
              variants={itemVariants}
            >
              Hi, I am <br />
              <span className="bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent">
                Hasan Aashrafi
              </span>
            </motion.p>

            <motion.p
              className="dark:text-gray-400 text-xl text-gray-50 mb-8"
              variants={itemVariants}
            >
              A passionate Frontend Developer crafting beautiful and functional web experiences.
              I specialize in React, Next.js, and modern web technologies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/banner.webp"
              alt='banner'
              width={350}
              height={350}
              priority
              className='mx-auto animate-pulse'
            />
          </motion.div>
        </div>

        <motion.div
          className="flex items-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="bg-blue-500 dark:bg-gray-700 dark:text-gray-400 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
          >
            Get in Touch
          </motion.a>

          <motion.div
            className="flex items-center gap-4 ml-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link
                href="https://github.com/hasanashrafi"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-50 hover:text-blue-500 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link
                href="https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-50 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link
                href="mailto:hasanashrafi.dev@gmail.com"
                className="dark:text-gray-400 text-gray-50 hover:text-blue-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;