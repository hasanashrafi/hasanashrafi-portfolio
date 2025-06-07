import { Suspense } from 'react'
import { getRepositories } from '@/lib/github'
import Hero from './components/Hero'
import About from '@/pages/About'
import Skills from '@/pages/Skills'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

// Loading component for Projects
function ProjectsLoading() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-300 space-y-10">
      <div className='backdrop-blur-3xl'>
        <Hero />
        <About />
        <Skills />
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default async function Home() {
  const projects = await getRepositories()

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-300 space-y-10">
      <div className='backdrop-blur-3xl'>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<ProjectsLoading />}>
          <Projects projects={projects} />
        </Suspense>
        <Contact />
      </div>
    </div>
  )
}

