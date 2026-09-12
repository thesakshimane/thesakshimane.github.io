import { codeContent } from '../../data';
import './Code.css';

function Code() {
  return (
    <main className="page-content">
      <section aria-labelledby="code-heading">
        <h1 id="code-heading">{codeContent.heading}</h1>
        <p className="muted-text">{codeContent.description}</p>
        <svg aria-label="Turning gears" className="project-gears" role="img" viewBox="0 0 88 52">
          <g transform="translate(28 27)"><g className="gear gear-large"><circle cx="0" cy="0" r="11" /><circle cx="0" cy="0" r="4" /><path d="M0-11V-16M0 11V16M11 0H16M-11 0H-16M7.8-7.8l3.5-3.5M-7.8 7.8l-3.5 3.5M7.8 7.8l3.5 3.5M-7.8-7.8l-3.5-3.5" /></g></g>
          <g transform="translate(57 34)"><g className="gear gear-small"><circle cx="0" cy="0" r="8" /><circle cx="0" cy="0" r="3" /><path d="M0-8V-12M0 8V12M8 0H12M-8 0H-12M5.7-5.7l2.8-2.8M-5.7 5.7l-2.8 2.8M5.7 5.7l2.8 2.8M-5.7-5.7l-2.8-2.8" /></g></g>
        </svg>
      </section>
    </main>
  );
}

export default Code;
