import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="container mx-auto px-6 py-12">
      <p className="text-3xl font-bold mb-8">Featured Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project,) => (
          <div
            key={project.id}
            className=" dark:bg-gray-800 dark:border-none shadow-md border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <p className="text-xl font-semibold mb-2">{project.name}</p>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Project Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1 dark:text-gray-300">
                  ⭐ {project.stargazers_count}
                </span>
                <span className="dark:text-gray-300 flex items-center gap-1">
                  🔄 {project.forks_count}
                </span>
                {project.language && (
                  <span className="  px-2 py-1 bg-yellow-400 rounded-full text-black text-xs">
                    {project.language}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className=" p-2 flex items-center justify-between gap-4">
                <Link
                  href={project.html_url}
                 
                  rel="noopener noreferrer"
                  className=" dark:text-gray-300 flex items-center gap-2 text-gray-600 dark:hover:text-blue-500 ease-in-out transition-all hover:text-blue-500"
                >
                  <Github className="h-4 w-4" />
                  Code
                </Link>
                {project.homepage && (
                  <Link
                    href={project.homepage}
                   
                    rel="noopener noreferrer"
                    className=" dark:text-gray-300 flex items-center gap-2  text-gray-600 dark:hover:text-blue-500 ease-in-out transition-all hover:text-blue-500"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}