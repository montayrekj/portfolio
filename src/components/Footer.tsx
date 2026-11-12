import { ColorStrip } from './Marks';

export default function Footer() {
  return (
    <footer className="slug">
      <ColorStrip className="slug__strip" />
      <div className="slug__row">
        <span>
          <b>© {new Date().getFullYear()} King Joshua Montayre</b>
        </span>
        <span>
          Built with React + Vite ·{' '}
          <a href="https://github.com/montayrekj/portfolio" target="_blank" rel="noreferrer">
            source on GitHub
          </a>
        </span>
        <span className="slug__links">
          <a href="https://www.linkedin.com/in/king-joshua-montayre/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/montayrekj" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#top">Back to top</a>
        </span>
      </div>
    </footer>
  );
}
