
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="container mx-auto px-6 pt-32 pb-12">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-bold mb-6">
                    Hi, I'm
                    <span className="ml-2 text-blue-500">Hasan Aashrafi</span> 
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    A passionate Frontend Developer crafting beautiful and functional web experiences.
                    I specialize in React, Next.js, and modern web technologies.
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Get in Touch
                    </Link>
                    <div className="flex items-center gap-4 ml-4">
                        <Link
                            href="https://github.com/hasanashrafi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/hasan-ashrafi-7bb68bb4"
                            target="_blank"
                      
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link
                            href="mailto:hasanashrafi.dev@gmail.com"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <Mail className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}