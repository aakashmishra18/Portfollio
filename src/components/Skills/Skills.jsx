import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData.js';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="eyebrow">skills</p>
        <h2 className="section-title">Tools I reach for, grouped by where they earn their keep.</h2>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <motion.div
              className="skills__card"
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="skills__tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
