import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <h2>{profile.tagline}</h2>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero