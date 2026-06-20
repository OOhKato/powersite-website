# Powerwise AI — Website

This student project focuses on redesigning and rebuilding the Powerwise.site website with a modern look and improved performance. Because it is a startup the main goal is to attract new investors for additional funding.

## Goals
- Improve user experience (UX)
- Create a clean, responsive user interface (UI)
- Build a maintainable and scalable codebase

## Scope
- Analyze the current website
- Design a new UI/UX concept
- Implement the frontend using modern technologies
- Optimize performance, accessibility, and SEO

## Tech Stack
- **React** — Component-based UI
- **Vite** — Fast development build tool with HMR
- **Tailwind CSS v4** — Utility-first styling
- **JavaScript (JSX)** — Application logic

## Project Structure
```
src/
├── components/
│   ├── home/                        # Homepage-specific sections
│   │   ├── Hero.jsx                 # Landing section with DarkVeil background
│   │   ├── Problem.jsx              # Problem statement (3-card MagicBento)
│   │   ├── AboutUs.jsx              # Who We Are (4-card MagicBento)
│   │   ├── Approach.jsx             # Why Powerwise (7-card bento grid)
│   │   ├── OurProcess.jsx           # 4-step process (Demo → Autonomy)
│   │   └── MarketOpportunity.jsx    # TAM/SAM/SOM cards (unused, kept for reuse)
│   ├── DarkVeil.jsx                 # WebGL animated background (ogl/GLSL)
│   ├── DarkVeil.css
│   ├── MagicBento.jsx               # Interactive card grid with spotlight & particles
│   ├── MagicBento.css
│   ├── InvestorCTA.jsx              # Pitch deck CTA + Use of Funds panel
│   ├── Navbar.jsx                   # Navigation with Light/Dark toggle
│   ├── Footer.jsx                   # Footer with cooperation logos (GZDN, THD)
│   ├── Section.jsx                  # PageSection / PageContainer / SectionHeader helpers
│   ├── SubpageLayout.jsx            # Navbar + Footer wrapper for subpages
│   ├── ScrollToTop.jsx              # Scroll-to-top on route change
│   ├── Sidebar.jsx
│   ├── Contact.jsx                  # Contact form
│   ├── Team.jsx                     # Team members (used on /team)
│   ├── News.jsx                     # News & updates (used on /news)
│   ├── Solution.jsx                 # Solutions overview (used on /solutions)
│   ├── Timeline.jsx                 # Project milestones (used on /timeline)
│   └── BusinessModel.jsx            # Business model (unused, kept for reuse)
├── pages/
│   ├── HomePage.jsx                 # / → Hero, Problem, AboutUs, Approach, OurProcess
│   ├── InvestorsPage.jsx            # /investors → MarketSize, Traction, InvestorCTA
│   ├── TeamPage.jsx                 # /team
│   ├── SolutionsPage.jsx            # /solutions
│   ├── NewsPage.jsx                 # /news
│   ├── TimelinePage.jsx             # /timeline
│   ├── ContactPage.jsx              # /contact
│   ├── ImprintPage.jsx              # /imprint
│   └── DataPolicyPage.jsx           # /data-policy
├── assets/
│   ├── logos/
│   │   ├── gzdn.svg                 # Gründerzentrum Deggendorf Nord
│   │   └── thd.svg                  # Technische Hochschule Deggendorf
│   └── hero.png
├── ThemeContext.jsx                  # Light/Dark mode state
├── nav.js                           # Shared navLinks & sidebarLinks
├── App.jsx                          # Router + ThemeProvider
├── main.jsx
└── index.css
```



## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Outcome
A modern, user-friendly, and high-performance website for Powerwise.site — featuring a Dark/Light Mode toggle, placeholder-ready sections, and a consistent green & black design system.
