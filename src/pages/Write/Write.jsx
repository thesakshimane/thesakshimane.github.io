import { writeContent } from '../../data/portfolioContent';
import './Write.css';

function Write() {
  const baseUrl = import.meta.env.BASE_URL;
  const { description, heading, posts } = writeContent;

  return (
    <main className="page-content">
      <section aria-labelledby="write-heading">
        <h1 id="write-heading">{heading}</h1>
        <p className="muted-text">{description}</p>
        <div className="blog-list">
          {posts.map(({ description: postDescription, image, path, title }) => (
            <a className="blog-card" href={`${baseUrl}${path}`} key={path}>
              <img alt="" src={`${baseUrl}${image}`} />
              <div>
                <h2>{title}</h2>
                <p>{postDescription}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Write;
