import { experienceContent } from '../../data';
import './Experience.css';

function formatBoldText(text) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function Experience() {
  const { entries, heading } = experienceContent;

  return (
    <main className="experience-detail page-content">
      <section aria-labelledby="experience-title">
        <h1 id="experience-title">{heading}</h1>
      </section>

      <ol className="experience-detail-list">
        {entries.map(({ location, organisation, period, role, work }) => (
          <li key={`${role}-${organisation}`}>
            <h2>{formatBoldText(role)}</h2>
            <p className="detail-meta">
              {formatBoldText(organisation)}
              {location && <> · {formatBoldText(location)}</>}
              {period && <> · {formatBoldText(period)}</>}
            </p>
            {work?.length > 0 && <ul className="detail-list">{work.map((item) => <li key={item}>{formatBoldText(item)}</li>)}</ul>}
          </li>
        ))}
      </ol>
    </main>
  );
}

export default Experience;
