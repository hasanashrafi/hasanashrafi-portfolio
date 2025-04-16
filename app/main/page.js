
import React from 'react';

import Hero from '../components/Hero';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';

import Contact from '@/pages/Contact';
import { getRepositories } from '@/lib/github';


export default async function MainPage() {
    const projects = await getRepositories()
    return (
        <div
             >
            <Hero />
            <About />
            <Skills />
            <Projects projects={projects} />
            <Contact />

        </div>
    );
} 