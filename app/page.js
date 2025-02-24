import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { getRepositories } from '@/lib/github'

export default async function Home() {
  const projects = await getRepositories()

  return (
    <div className="space-y-24 pb-20">
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  )
}