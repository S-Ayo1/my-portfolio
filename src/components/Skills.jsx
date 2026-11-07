import { skills } from '../data/profile'

function Skills() {
  return (
    <section id="skills" className="section section-light">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-card">
              <h3>{skill.name}</h3>
              <span>{skill.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills