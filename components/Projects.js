
import ProjectCard from './templates/ProjectCard'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="container mx-auto px-6 py-12">
      <p className="text-3xl font-bold mb-8">Featured Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project,) => (
        <ProjectCard project={project}  key={project.id}/> 
        ))}
      </div>
    </section>
  )
}