import { useLanguage } from './LanguageContext'

export const strings = {
  es: {
    nav: [
      { label: 'Skills',      href: '#skills' },
      { label: 'Proyectos',   href: '#proyectos' },
      { label: 'Seguridad',   href: '#seguridad' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Contacto',    href: '#contacto' },
    ],
    hero: {
      available: 'Disponible para trabajar en España',
      hello: 'Hola, soy',
      viewProjects: 'Ver proyectos',
      contact: 'Contactar',
      terminalAvailable: '✓  Disponible · Incorporación inmediata',
    },
    about: {
      eyebrow: 'sobre mí',
      title: 'Desarrollador orientado',
      highlight: 'a la seguridad',
      profileLabel: 'Perfil diferencial',
      profileValue: 'Full Stack + DAW + Máster en Ciberseguridad',
      profileSub: 'AppSec y desarrollo seguro integrado desde la arquitectura',
    },
    education: {
      eyebrow: 'formación',
      title: 'Base técnica',
      highlight: 'sólida',
      description: 'Formación oficial reglada que une el desarrollo web profesional con la ciberseguridad aplicada.',
    },
    skills: {
      eyebrow: 'habilidades',
      title: 'Stack técnico',
      highlight: 'completo',
      description: 'Desarrollo full stack con enfoque diferencial en seguridad de aplicaciones web.',
      databases: 'Bases de datos',
      tools: 'Herramientas & DevOps',
      security: 'Ciberseguridad Web',
      securityBadge: 'Máster en Ciberseguridad · OWASP Top 10',
    },
    projects: {
      eyebrow: 'proyectos',
      title: 'Código real,',
      highlight: 'seguridad real',
      description: 'Full stack con AppSec integrado — cada proyecto aplica buenas prácticas desde la arquitectura.',
      featured: 'Destacado',
      securityLabel: '// seguridad aplicada',
      viewProject: 'Ver proyecto',
      githubLabel: 'Código en GitHub',
      typeLabels: { fullstack: 'Full Stack', security: 'AppSec', academic: 'Académico' } as Record<string, string>,
    },
    experience: {
      eyebrow: 'experiencia',
      title: 'Proyectos',
      highlight: 'relevantes',
      description: 'Experiencia profesional y trabajos académicos que demuestran criterio técnico real.',
      typeLabels: { academic: 'Académico', work: 'Laboral', personal: 'Personal' } as Record<string, string>,
    },
    security: {
      owasp: 'OWASP Top 10 awareness certificado',
      owaspSub: 'Máster en Ciberseguridad · Aplicado en cada proyecto',
      viewProjects: 'Ver proyectos →',
    },
    contact: {
      title: '¿Hablamos?',
      description: 'Busco oportunidades como Full Stack Developer con especialización en ciberseguridad. Si tienes una oferta o proyecto interesante, escríbeme.',
      available: 'Disponible · Incorporación inmediata · España',
    },
  },

  en: {
    nav: [
      { label: 'Skills',      href: '#skills' },
      { label: 'Projects',    href: '#proyectos' },
      { label: 'Security',    href: '#seguridad' },
      { label: 'Experience',  href: '#experiencia' },
      { label: 'Contact',     href: '#contacto' },
    ],
    hero: {
      available: 'Available to work in Spain',
      hello: "Hi, I'm",
      viewProjects: 'View projects',
      contact: 'Contact',
      terminalAvailable: '✓  Available · Immediate start',
    },
    about: {
      eyebrow: 'about me',
      title: 'Security-oriented',
      highlight: 'developer',
      profileLabel: 'Unique profile',
      profileValue: "Full Stack + DAW + Master's in Cybersecurity",
      profileSub: 'AppSec and secure development integrated from the architecture',
    },
    education: {
      eyebrow: 'education',
      title: 'Strong technical',
      highlight: 'foundation',
      description: 'Official accredited training combining professional web development with applied cybersecurity.',
    },
    skills: {
      eyebrow: 'skills',
      title: 'Complete tech',
      highlight: 'stack',
      description: 'Full stack development with a differential focus on web application security.',
      databases: 'Databases',
      tools: 'Tools & DevOps',
      security: 'Web Security',
      securityBadge: "Master's in Cybersecurity · OWASP Top 10",
    },
    projects: {
      eyebrow: 'projects',
      title: 'Real code,',
      highlight: 'real security',
      description: 'Full stack with integrated AppSec — every project applies best practices from the architecture.',
      featured: 'Featured',
      securityLabel: '// security applied',
      viewProject: 'View project',
      githubLabel: 'Code on GitHub',
      typeLabels: { fullstack: 'Full Stack', security: 'AppSec', academic: 'Academic' } as Record<string, string>,
    },
    experience: {
      eyebrow: 'experience',
      title: 'Relevant',
      highlight: 'work',
      description: 'Professional experience and academic projects that demonstrate real technical judgment.',
      typeLabels: { academic: 'Academic', work: 'Work', personal: 'Personal' } as Record<string, string>,
    },
    security: {
      owasp: 'OWASP Top 10 awareness certified',
      owaspSub: "Master's in Cybersecurity · Applied in every project",
      viewProjects: 'View projects →',
    },
    contact: {
      title: "Let's talk?",
      description: "I'm looking for opportunities as a Full Stack Developer with cybersecurity specialization. If you have an interesting offer or project, reach out.",
      available: 'Available · Immediate start · Spain',
    },
  },
}

export function useStrings() {
  const { lang } = useLanguage()
  return strings[lang]
}
