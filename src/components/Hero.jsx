import { profile } from '../data/profile'

const initials = profile.name
  .split(' ')
  .map((word) => word[0])
  .join('')

const badges = ['React', 'Flutter', 'Dart', 'JavaScript']

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <h2>{profile.tagline}</h2>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
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

        <div className="hero-visual">
          <div className="avatar">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          {badges.map((badge, index) => (
            <span key={badge} className={`floating-badge badge-${index + 1}`}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero