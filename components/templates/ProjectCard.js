import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ProjectCard({ project }) {
  const { name, description, stargazers_count, forks_count, language, html_url, homepage } = project
  return (
    <div className=" dark:bg-gray-900 dark:border-none shadow-md border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <p className="text-xl font-semibold mb-2">
          {name}
        </p>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Project Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1 dark:text-gray-300">
            ⭐ {stargazers_count}
          </span>
          <span className="dark:text-gray-300 flex items-center gap-1">
            🔄 {forks_count}
          </span>
          {language && (
            <span className="  px-2 py-1 bg-yellow-400 rounded-full text-black text-xs">
              {language}
            </span>
          )}
        </div>

        {/* Links */}
        <div className=" p-2 flex items-center justify-between gap-4">
          <Link
            href={html_url}
            rel="noopener noreferrer"
            className=" dark:text-gray-300 flex items-center gap-2 text-gray-600 dark:hover:text-blue-500 ease-in-out transition-all hover:text-blue-500"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
          {homepage && (
            <Link
              href={homepage}
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
  )
}

export default ProjectCard