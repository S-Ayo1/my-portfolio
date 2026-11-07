import { projects } from '../data/profile'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects