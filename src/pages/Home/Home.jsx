import { Link } from 'react-router-dom';
import { experienceContent, homeContent, socialIconPaths } from '../../data';
import './Home.css';

function Home() {
  const { contactHeading, contacts, image, introduction, name, resume } = homeContent;
  const { entries: experience, heading: experienceHeading } = experienceContent;

  return (
    <main className="home">
      <section aria-labelledby="introduction-heading" className="introduction">
        <div className="introduction-copy">
          <h1 id="introduction-heading">{name}</h1>
          {introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="resume-actions">
            <a className="resume-button" href={resume.path} rel="noreferrer" target="_blank">
              {resume.label}
            </a>
            <a
              aria-label={resume.downloadLabel}
              className="resume-download"
              download={resume.fileName}
              href={resume.path}
              title={resume.downloadLabel}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 3v11M7.5 10.5 12 15l4.5-4.5M5 20h14" />
              </svg>
            </a>
          </div>
        </div>
        <figure className="introduction-image">
          <img alt={image.alt} decoding="async" fetchPriority="high" height="900" src={image.src} width="1600" />
        </figure>
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading"><Link to="/experience">{experienceHeading}</Link></h2>
        <ol className="experience-list">
          {experience.map(({ organisation, period, role }) => (
            <li key={`${role}-${organisation}`}>
              <h3>{role}</h3>
              <p>{organisation}</p>
              {period && <p className="experience-period">{period}</p>}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading">{contactHeading}</h2>
        <ul className="contact-list">
          {contacts.map(({ href, icon, label }) => (
            <li key={href}>
              <a aria-label={label} href={href} rel="noreferrer" target={href.startsWith('http') ? '_blank' : undefined} title={label}>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d={socialIconPaths[icon]} /></svg>
                <span className="visually-hidden">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
