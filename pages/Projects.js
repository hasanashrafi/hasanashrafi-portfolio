'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../app/components/templates/ProjectCard';

export default function Projects({ projects }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mx-auto max-w-7xl mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center"
    >
      <motion.h2
        variants={itemVariants}
        className="col-span-full text-3xl px-2 font-bold mb-8"
      >
        Projects
      </motion.h2>

      {projects && projects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="rounded-lg px-3"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}