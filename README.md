# Axel Cerkvenih - Security Observability Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Astro-5.17.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
</div>

<div align="center">
  <h3>🔒 A modern, security-focused portfolio showcasing Application Security expertise</h3>
  <p>Built with Astro, React, and Tailwind CSS | Dark Mode Design | i18n Support (EN/ES)</p>
  <a href="https://axlcrkv.dev.ar">🌐 View Live Demo</a>
</div>

---

## 📖 Introduction

This portfolio represents the intersection of **security engineering** and **modern web development**. Designed for an Application Security Engineer transitioning from Full-Stack development, it showcases not just projects and experience, but a **security-first mindset** embedded in every aspect of the site.

### Why This Portfolio Stands Out

- **🛡️ Security by Design**: Includes RFC 9116 compliant `security.txt`, demonstrating professional security practices
- **🎨 Dark Aesthetic**: Deep dark theme (#0A0A0A) with security-themed accent colors (#00FF88)
- **🌐 Bilingual**: Full i18n support (English/Spanish) with smooth language switching
- **⚡ Performance**: Built with Astro for optimal loading times and SEO
- **🎭 Interactive**: Magic UI components with animations and particle effects
- **📱 Responsive**: Mobile-first design that works flawlessly on all devices

### What Makes It Different

Unlike traditional portfolios, this site emphasizes:
- **Security expertise** over just development skills
- **DevSecOps practices** and cloud hardening experience
- **Real-world impact** through timeline of security implementations
- **Professional presentation** suitable for AppSec roles

Perfect for security engineers, DevSecOps professionals, or developers transitioning into cybersecurity roles.

---

## 🚀 Features

- **Dark Mode Design** - Deep dark aesthetic (#0A0A0A) with security-themed accents
- **Magic UI Components** - Animated gradient text, particles, bento grid, border beams
- **Data-Driven** - Content parsed from markdown and CSV files
- **Security-First** - RFC 9116 compliant security.txt file
- **Responsive** - Mobile-first design with smooth animations
- **SEO Optimized** - Meta tags, Open Graph, and Twitter cards

## 🛠️ Tech Stack

- **Framework:** Astro 5.17.1
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Geist Sans, JetBrains Mono
- **Deployment:** Vercel

## 📋 Project Structure

```
/
├── public/
│   └── .well-known/
│       └── security.txt          # RFC 9116 security policy
├── src/
│   ├── components/
│   │   ├── ui/                   # Magic UI components
│   │   ├── Hero.astro            # Hero section with particles
│   │   ├── ProjectsGrid.tsx      # Bento grid projects
│   │   ├── TechStackMonitor.astro # Terminal-style tech display
│   │   └── Timeline.astro        # Experience timeline
│   ├── layouts/
│   │   └── BaseLayout.astro      # Base HTML layout
│   ├── lib/
│   │   ├── utils.ts              # Utility functions
│   │   └── data.ts               # Data parsers
│   ├── pages/
│   │   └── index.astro           # Main page
│   ├── styles/
│   │   └── global.css            # Global styles & theme
│   └── content/
│       └── profile/              # Profile data (markdown/CSV)
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect Astro and configure build settings
4. Deploy!

The site is configured with:
- Output: Static
- Adapter: @astrojs/vercel
- Site URL: https://axlcrkv.dev.ar

## 🔒 Security Features

- **security.txt** - RFC 9116 compliant security policy at `/.well-known/security.txt`
- **Security-focused content** - Showcases AppSec expertise and DevSecOps practices
- **Clean dependencies** - Minimal attack surface with carefully selected packages

## 📝 Customization

### Update Profile Data
Edit `/src/content/profile/Axel Cerkvenih.md` to update:
- Experience
- Technologies
- About section

### Update Projects
Edit `/src/content/profile/Axel Cerkvenih/Projects...csv` to add/remove projects

### Modify Theme Colors
Edit `/src/styles/global.css` to change:
- Background colors
- Accent colors
- Typography

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [RFC 9116 - security.txt](https://www.rfc-editor.org/rfc/rfc9116.html)

---

Built with security in mind by Axel Cerkvenih | Application Security Engineer @ Personal Pay

