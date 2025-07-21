
import React from 'react';


import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';

import Contact from '@/pages/Contact';
import { getRepositories } from '@/lib/github';


export default async function MainPage() {
    const projects = await getRepositories()
    return (
        <div className='dark:bg-gray-900' >
            <About />
            <Skills />
            <Projects projects={projects} />
            <Contact />
        </div>
    );
} 