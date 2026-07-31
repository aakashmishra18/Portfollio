import { motion } from 'framer-motion';
import { services } from '../../data/portfolioData.js';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="eyebrow">services</p>
        <h2 className="section-title">What I can take off your plate.</h2>

        <div className="services__list">
          {services.map((s, i) => (
            <motion.div
              className="services__item"
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="services__index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="services__title">{s.title}</h3>
                <p className="services__desc">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
