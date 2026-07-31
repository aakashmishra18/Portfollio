import { motion } from 'framer-motion';
import { about } from '../../data/portfolioData.js';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="eyebrow">about</p>
        <div className="about__grid">
          <motion.p
            className="about__summary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {about.summary}
          </motion.p>

          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {about.highlights.map((h) => (
              <div className="about__highlight" key={h.label}>
                <span className="about__highlight-label">{h.label}</span>
                <span className="about__highlight-value">{h.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
