import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaStar, FaPhotoVideo } from 'react-icons/fa'

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full max-w-md mx-auto md:mx-0">
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {project.image ? (
                    <Image src={project.image} alt={project.name} width={100} height={100} priority className="object-cover w-full h-full" />
                ) : (
                    <span className="text-gray-400 dark:text-gray-500 text-lg"><FaPhotoVideo/> </span>
                )}
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white leading-tight">
                    {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-base md:text-lg">
                    {project.description || 'No description available'}
                </p>

                {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.topics.map(topic => (
                            <span
                                key={topic}
                                className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full shadow-sm"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-4">
                        {project.language && (
                            <span className="text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900 px-2 py-1 rounded">
                                {project.language}
                            </span>
                        )}
                        {project.stars > 0 && (
                            <div className="flex items-center text-yellow-500 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">
                                <FaStar className="mr-1" />
                                <span className="text-sm font-semibold">{project.stars}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex space-x-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200 bg-sky-100 dark:bg-sky-900 p-2 rounded-full transition-colors"
                            aria-label="View on GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        {project.homepage && (
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200 bg-emerald-100 dark:bg-emerald-900 p-2 rounded-full transition-colors"
                                aria-label="Visit website"
                            >
                                <FaExternalLinkAlt size={15} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 