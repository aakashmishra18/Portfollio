import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/portfolioData.js';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow">projects</p>
        <h2 className="section-title">A few things I've shipped and debugged in production.</h2>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.a
              className="projects__card"
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <div className="projects__card-head">
                <h3>{p.title}</h3>
                <FiArrowUpRight className="projects__card-icon" />
              </div>
              <p className="projects__card-desc">{p.description}</p>
              <div className="projects__stack">
                {p.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
