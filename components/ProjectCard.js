import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaPhotoVideo } from 'react-icons/fa'

export default function ProjectCard({ project }) {
    const { name,  language, html_url, homepage, image } = project

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col  h-full max-w-md mx-auto md:mx-0 group">
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <FaPhotoVideo className="text-gray-400 dark:text-gray-500 text-lg group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                )}
            </div>

            {/* Project Content */}
            <div className="p-2  md:p-5 flex flex-col flex-1">
                <h3 className="mb-5 text-2xl font-bold  text-gray-900 dark:text-white leading-tight hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    {name}
                </h3> 

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-4">
                        {language && (
                            <span className="text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/50 px-2 py-1 rounded hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors">
                                {language}
                            </span>
                        )}
                    </div>

                    <div className="flex space-x-3">
                        {html_url && (
                            <Link
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200 bg-sky-100 dark:bg-sky-900/50 p-2 rounded-full transition-all duration-200 hover:bg-sky-200 dark:hover:bg-sky-900 hover:scale-110"
                                aria-label="View on GitHub"
                            >
                                <FaGithub size={20} />
                            </Link>
                        )}
                        {homepage && (
                            <Link
                                href={homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full transition-all duration-200 hover:bg-emerald-200 dark:hover:bg-emerald-900 hover:scale-110"
                                aria-label="Visit website"
                            >
                                <FaExternalLinkAlt size={15} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 