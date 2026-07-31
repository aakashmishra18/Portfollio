import { motion } from 'framer-motion';
import { education } from '../../data/portfolioData.js';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="eyebrow">education & experience</p>
        <h2 className="section-title">Where the skills were earned.</h2>

        <div className="education__timeline">
          {education.map((e, i) => (
            <motion.div
              className="education__item"
              key={e.institution + e.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="education__marker" />
              <div className="education__content">
                <div className="education__row">
                  <h3>{e.degree}</h3>
                  {e.period && <span className="education__period">{e.period}</span>}
                </div>
                <p className="education__institution">{e.institution}</p>
                {e.description && <p className="education__desc">{e.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
