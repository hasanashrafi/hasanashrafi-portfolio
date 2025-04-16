'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

export default function MainPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
    
      <Contact />
    </motion.div>
  );
} 