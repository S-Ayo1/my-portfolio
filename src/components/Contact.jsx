import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          I'm open to opportunities, collaborations and conversations about
          building great apps. Feel free to reach out.
        </p>
        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              {profile.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact