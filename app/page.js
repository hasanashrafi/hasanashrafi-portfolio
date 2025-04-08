
import { getRepositories } from '@/lib/github'
import Hero from './components/Hero'
import About from '@/pages/About'
import Skills from '@/pages/Skills'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

export default async function Home() {
  const projects = await getRepositories()

  return (
    <div className="min-h-screen dark:bg-gray-900   dark:text-gray-300 space-y-10 ">
      <div className='backdrop-blur-3xl'>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </div>
    </div>
  )
}