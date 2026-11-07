import { profile } from '../data/profile'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">
          {profile.name}
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar