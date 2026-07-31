import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { personal } from '../../data/portfolioData.js';
import './Hero.css';

const codeLines = [
  { indent: 0, text: 'const developer = {' },
  { indent: 1, text: `name: '${personal.name}',` },
  { indent: 1, text: `role: '${personal.role}',` },
  { indent: 1, text: `stack: ['React', 'Node.js', 'FastAPI'],` },
  { indent: 1, text: `status: 'open to work',` },
  { indent: 0, text: '};' },
];

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="glow-orb hero__glow" />
      <div className="container hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero__copy"
        >
          <p className="eyebrow">available for opportunities</p>
          <h1 className="hero__title">
            Hi, I'm {personal.name.split(' ')[0]} —
            <br />
            <span className="hero__title-accent">{personal.role}</span>
          </h1>
          <p className="hero__tagline">{personal.tagline}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={personal.resumeUrl} className="btn btn-ghost" download>
              <FiDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="hero__terminal"
        >
          <div className="hero__terminal-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="hero__terminal-label">profile.js</span>
          </div>
          <pre className="hero__terminal-body">
            {codeLines.map((line, i) => (
              <motion.div
                key={line.text}
                className="hero__code-line"
                style={{ paddingLeft: `${line.indent * 20}px` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.18 }}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.span
              className="hero__cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            />
          </pre>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
