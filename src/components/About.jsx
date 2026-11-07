import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        {profile.about.map((paragraph, index) => (
          <p key={index} className="about-text">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default About