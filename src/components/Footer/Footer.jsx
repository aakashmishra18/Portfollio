import { personal } from '../../data/portfolioData.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} {personal.name}. Built with React &amp; Vite.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
