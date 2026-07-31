# Aakash Mishra — Portfolio

React + Vite portfolio with dark/light theme, purple glow accents, scroll animations, and a working contact form.

## Stack
- React + Vite
- Plain CSS (component-scoped files)
- React Icons
- Framer Motion
- EmailJS (contact form)
- Netlify (deployment)

## Setup

```bash
npm install
npm run dev
```

## Before you deploy — fill these in

1. **`src/data/portfolioData.js`**
   - `personal.email`, `personal.social` (GitHub/LinkedIn/Twitter links)
   - Add real dates/school to the `education` array
   - Adjust `projects` links if any are live

2. **Contact form** — `src/components/Contact/Contact.jsx`
   - Create a free account at https://www.emailjs.com/
   - Add an email service + template, then set:
     - `EMAILJS_SERVICE_ID`
     - `EMAILJS_TEMPLATE_ID`
     - `EMAILJS_PUBLIC_KEY`

3. **Assets** — drop your real files into `public/`:
   - `favicon.png`
   - `resume.pdf`
   - `profile.png` (and anything in `src/assets/`)

## Build & Deploy

```bash
npm run build
```

Deploy the `dist/` folder to Netlify (drag-and-drop, CLI, or connect the repo — `netlify.toml` is already set up with SPA redirects), or run:

```bash
npx netlify deploy --prod
```

## Structure

```
src/
├── components/   # one folder per section (Navbar, Hero, About, Skills,
│                 # Services, Projects, Education, Contact, Footer)
├── context/      # ThemeContext (dark/light toggle, persisted to localStorage)
├── data/         # portfolioData.js — all content lives here
├── App.jsx
├── main.jsx
└── index.css     # design tokens + global styles
```
