# Miguel Sanz Sánchez de la Morena — Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

🌐 **Live:** [portfolio-miguelsanz.vercel.app](https://portfolio-miguelsanz.vercel.app)

## Tech stack

- **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll animations
- **Vite** for bundling

## Project structure

```
src/
  content/portfolio.ts   ← single source of truth for all content
  sections/              ← one component per page section
  components/            ← reusable UI components (Badge, SectionTitle...)
  lib/animations.ts      ← shared Framer Motion variants
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the build locally
```

## Deploy

```bash
npm i -g vercel
vercel --prod
```

## Contact

[miguelsanzchez94@gmail.com](mailto:miguelsanzchez94@gmail.com) · [LinkedIn](https://www.linkedin.com/in/miguel-sanz-sanchez-de-la-morena/) · [GitHub](https://github.com/Miguelsanzchez)
