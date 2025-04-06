'use client'
import { motion } from 'framer-motion';
import ProjectCard from './templates/ProjectCard';

export default function Projects({ projects }) {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: 'easeInOut',
      }}
      className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeInOut',
          }}
          className=" dark:bg-gray-800  rounded-lg p-2"
        >
       <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}