import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description || 'No description available'}
                </p>

                {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.topics.map(topic => (
                            <span
                                key={topic}
                                className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {project.language && (
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                {project.language}
                            </span>
                        )}
                        {project.stars > 0 && (
                            <div className="flex items-center text-yellow-500">
                                <FaStar className="mr-1" />
                                <span className="text-sm">{project.stars}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex space-x-2">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            aria-label="View on GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        {project.homepage && (
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                aria-label="Visit website"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 