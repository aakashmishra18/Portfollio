export const personal = {
  name: 'Aakash Mishra',
  role: 'Full Stack Developer',
  tagline: 'I build real-time apps, secure APIs, and platforms end to end.',
  location: 'India',
  email: 'mishraaakash623@gmail.com', // TODO: replace with your real email
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/aakashmishra18',
    linkedin: 'https://www.linkedin.com/in/aakash-mishra-00117722b/',
    twitter: 'https://x.com/mishra_aakashm',
  },
};

export const about = {
  summary:
    "I'm a full-stack developer who works comfortably across the whole stack — React on the frontend, Node.js/Express on the backend, and MySQL, PostgreSQL, or SQLite underneath, depending on what the project needs. I like taking a system from a rough idea to something deployed and actually running: wiring up authentication, fixing the bug that only shows up in production, and hardening the parts that touch money or user data.",
  highlights: [
    { label: 'Full Stack Developer Intern', value: 'Particle14' },
    { label: 'Focus', value: 'React · Node/Express' },
    { label: 'Databases', value: 'MySQL · PostgreSQL · MongoDB' },
  ],
};

export const skills = [
  { category: 'Frontend', items: ['React', 'CSS / CSS Modules'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite'] },
  { category: 'Auth & Security', items: ['JWT', 'bcrypt', 'Role-Based Access Control', 'HMAC'] },
  { category: 'Realtime & Infra', items: ['Socket.io', 'Redis', 'Nginx', 'DigitalOcean', 'PM2'] },
  { category: 'Tooling', items: ['Github', 'Netlify', 'Postman'] },
];

export const services = [
  {
    title: 'Full-Stack Web Apps',
    description:
      'End-to-end builds with React on the frontend and Node/Express on the backend, from schema design to deployment.',
  },
  {
    title: 'Authentication & Security',
    description:
      'JWT-based auth systems, bcrypt password hashing, role-based access control, and audits that close gaps like unprotected admin routes.',
  },
  {
    title: 'Real-Time Systems',
    description:
      'Socket.io-powered chat and live-data features, backend by Node.js with database MySQL, built to handle concurrent users cleanly.',
  },
];

export const projects = [
  {
  title: 'Portfolio Website',
  description:
    'A responsive personal portfolio website showcasing my projects, technical skills, and contact information. Built with clean HTML, CSS, and JavaScript, featuring a modern UI, smooth animations, and a fully responsive design.',
  stack: ['HTML', 'CSS', 'JavaScript'],
  link: 'https://portfollio-18.netlify.app/',
},
  {
    title: 'NectMate',
    description:
      'A college social network deployed to production on DigitalOcean. Debugged a cross-platform push notification failure (service worker mismatch and skip-logic bug blocking FCM delivery) and tuned Nginx for caching, security headers, and gzip.',
    stack: ['React', 'Node.js', 'MySQL', 'Redis', 'Nginx'],
    link: 'https://nectmate.com',
  },
  {
    title:'Todo-App',
    description:"A simple task manager with a deliberately over-the-top late-90s web aesthetic: tiled starfield background, beveled Windows 95 buttons, scrolling marquee banners, blinking under construction badges, and a rainbow-animated title. Under the hood it's plain HTML/CSS/JavaScript with no frameworks or build step — tasks are stored in localStorage, so your list persists across page reloads",
    Stack: ['HTML', 'CSS', 'vanilla JavaScript'],
    link:'https://to-do-app-gi.netlify.app/'
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A full chat app with live messaging via Socket.io, Prisma ORM over MySQL, and a React 18 frontend — including a fix for a StrictMode duplicate-key bug in the message listener.',
    stack: ['React', 'Node.js', 'Express', 'Socket.io', 'Prisma', 'MySQL'],
    link: '#',
  },
  {
    title: 'Employee Management System',
    description:
      'A backend covering eight database tables with role-based access control across four roles (admin, HR, manager, employee) and JWT authentication.',
    stack: ['Node.js', 'Express', 'MySQL', 'JWT'],
    link: '#',
  },

  {
    title: 'JWT Auth System',
    description:
      'A standalone authentication service with SQLAlchemy models and bcrypt password hashing, built to be dropped into other FastAPI projects.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'bcrypt'],
    link: '#',
  },
  
];

export const education = [
  {
    degree: 'Full Stack Developer Intern',
    institution: 'Particle14',
    period: '', // TODO: add dates
    description: 'Hands-on Backend, Frontend, and database work across production systems.',
  },
  // TODO: add your degree(s) / school here, e.g.
  // { degree: 'B.Tech, Computer Science', institution: 'Your University', period: '2021 — 2025', description: '' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
