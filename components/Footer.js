import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className="w-full bg-black text-white py-8 mt-16">
            <div className="container mx-auto flex flex-col items-center gap-4 max-w-7xl px-6">
                <div className="flex gap-6 mb-2">
                    <a href="https://github.com/hasanashrafi" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><Github className="size-6" /></a>
                    <a href="https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><Linkedin className="size-6" /></a>
                    <a href="mailto:hasanashrafi.dev@gmail.com" className="hover:text-sky-400"><Mail className="size-6" /></a>
                </div>
                <div className="text-sm text-gray-400">&copy; 2024 Hasan Ashrafi. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer; 