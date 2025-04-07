import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { getRepositories } from '@/lib/github'

export default async function Home() {
  const projects = await getRepositories()
  console.log(projects)
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