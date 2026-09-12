import { miscContent } from '../../data';
import './Misc.css';

function Misc() {
  const { heading, leadership, leadershipHeading, programs, programsHeading } = miscContent;

  return (
    <main className="misc page-content">
      <section aria-labelledby="misc-heading">
        <h1 id="misc-heading">{heading}</h1>
      </section>

      <section aria-labelledby="programs-heading">
        <h2 id="programs-heading">{programsHeading}</h2>
        <ol className="misc-list">
          {programs.map(({ details, focus, location, name, period }) => (
            <li key={name}>
              <div className="misc-list-header"><h3>{name}</h3><p>{period}</p></div>
              <p className="misc-meta">{location}</p>
              <p className="misc-focus">{focus}</p>
              <p>{details}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="leadership-heading">
        <h2 id="leadership-heading">{leadershipHeading}</h2>
        <ol className="misc-list">
          {leadership.map(({ details, meta, name, period }) => (
            <li key={name}>
              <div className="misc-list-header"><h3>{name}</h3><p>{period}</p></div>
              {meta && <p className="misc-meta">{meta}</p>}
              <p>{details}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default Misc;
