import { primusExperience } from '../../data/portfolioContent';
import './PrimusTechsystems.css';

function PrimusTechsystems() {
  const { heading, meta, work, workHeading } = primusExperience;

  return (
    <main className="experience-detail page-content">
      <section aria-labelledby="experience-title">
        <h1 id="experience-title">{heading}</h1>
        <p className="detail-meta">{meta}</p>
      </section>

      <section aria-labelledby="work-heading">
        <h2 id="work-heading">{workHeading}</h2>
        <ul className="detail-list">{work.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </main>
  );
}

export default PrimusTechsystems;
