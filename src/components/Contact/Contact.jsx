import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { personal } from '../../data/portfolioData.js';
import './Contact.css';

// TODO: replace with your own EmailJS service ID, template ID, and public key
// from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_1gqf1hl';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'M8TlNsB9VEUe4VY6p';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="glow-orb contact__glow" />
      <div className="container contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="contact__copy"
        >
          <p className="eyebrow">contact</p>
          <h2 className="section-title">Have a project in mind? Let's talk.</h2>
          <p className="contact__desc">
            Send a message and I'll get back to you — or reach out directly.
          </p>

          <a className="contact__email" href={`mailto:${personal.email}`}>
            <FiMail /> {personal.email}
          </a>

          <div className="contact__social">
            <a href={personal.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={personal.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X">
              <FaXTwitter />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </label>

          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : (<><FiSend /> Send message</>)}
          </button>

          {status === 'sent' && <p className="contact__status contact__status--ok">Message sent — thanks!</p>}
          {status === 'error' && (
            <p className="contact__status contact__status--err">
              Something went wrong. Try emailing directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
