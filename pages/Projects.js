'use client'
import ProjectCard from '@/components/ProjectCard';
import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const Projects = memo(function Projects({ projects }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        damping: 15,
      },
    },
  };

  if (!projects || projects.length === 0) {
    return (
      <section className="w-full bg-gray-50 dark:bg-neutral-900 py-12 sm:py-16 px-2 sm:px-4 flex justify-center" id="projects">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center border-2 border-black dark:border-white px-6 sm:px-8 py-2 rounded-lg bg-white dark:bg-black shadow text-gray-900 dark:text-gray-100">Portfolio</h2>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300">No projects found.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-50 dark:bg-neutral-900 py-12 sm:py-16 px-2 sm:px-4 flex justify-center" id="projects">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center border-2 border-black dark:border-white px-6 sm:px-8 py-2 rounded-lg bg-white dark:bg-black shadow text-gray-900 dark:text-gray-100">Portfolio</h2>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full"
        >
          {projects && projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={itemVariants}
              className="rounded-lg px-3"
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;