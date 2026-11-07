import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer