import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { getRepositories } from '@/lib/github'

export default async function Home() {
  const projects = await getRepositories()

  return (
    <div className="dark:bg-gray-800 dark:text-gray-300 space-y-10 pb-20">
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </div>
  )
}