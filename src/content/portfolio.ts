// Configuración central del portfolio — edita aquí para actualizar el contenido

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  securityMeasures: string[]
  github?: string
  demo?: string
  image?: string
  featured?: boolean
  type: 'fullstack' | 'security' | 'academic'
}

export interface Education {
  id: string
  degree: string
  specialization: string
  institution: string
  location: string
  period: string
  description: string
  highlights: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  type: 'work' | 'academic' | 'personal'
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface SecurityCategory {
  name: string
  icon: string
  items: string[]
}

export interface PortfolioData {
  personal: {
    name: string
    firstName: string
    title: string
    subtitle: string
    tagline: string
    location: string
    available: boolean
    email: string
    github: string
    linkedin: string
    cv?: string
    photo?: string
  }
  about: {
    paragraphs: string[]
    highlights: { label: string; value: string }[]
  }
  education: Education[]
  skills: {
    frontend: string[]
    backend: string[]
    databases: string[]
    security: string[]
    tools: string[]
  }
  projects: Project[]
  experience: Experience[]
  securityHighlights: {
    title: string
    description: string
    categories: SecurityCategory[]
  }
}

export const portfolio: PortfolioData = {

  personal: {
    name: 'Miguel Sanz Sánchez de la Morena',
    firstName: 'Miguel',
    title: 'Full Stack Developer',
    subtitle: 'Máster en Ciberseguridad',
    tagline:
      'Construyo aplicaciones web que llegan a producción: un marketplace agrícola con Stripe, dashboards IoT en tiempo real y automatizaciones para clientes reales — con la seguridad integrada desde el primer commit.',
    location: 'Madrid',
    available: true,
    email: 'miguelsanzchez94@gmail.com',
    github: 'https://github.com/Miguelsanzchez',
    linkedin: 'https://www.linkedin.com/in/miguel-sanz-sanchez-de-la-morena/',
    photo: '/miguel.jpg',
  },


  about: {
    paragraphs: [
      'Desarrollador Full Stack con DAW y Máster en Ciberseguridad. Acabo de terminar mis prácticas en Singular Things, donde desarrollé dashboards IoT con visualización de datos de sensores en tiempo real usando React, Electron y Docker en un equipo profesional con proyectos reales de cliente.',
      'Como freelance, desarrollé automatizaciones de flujo de trabajo para VoiceUp — integrando APIs externas, bases de datos y envío automático de emails. Mi proyecto estrella es FarmerHand, un marketplace agrícola fullstack con pasarela de pago Stripe, RBAC para 3 tipos de usuario y más de 2.000 horas de desarrollo propio.',
      'Mi próximo paso es el área DevOps y DevSecOps: integrar seguridad en los pipelines de CI/CD desde el diseño y llevar esa mentalidad a la infraestructura y el despliegue.',
    ],
    highlights: [
      { label: 'Horas de proyecto', value: '+2.000' },
      { label: 'Prácticas reales', value: 'Singular Things' },
      { label: 'Formación', value: 'DAW + Máster' },
      { label: 'Disponibilidad', value: 'Inmediata' },
    ],
  },


  education: [
    {
      id: 'master-ciberseguridad',
      degree: 'Máster en Ciberseguridad',
      specialization: 'Seguridad Web · Hacking Ético · Análisis Forense',
      institution: 'ThePower Education',
      location: 'España',
      period: '2024 – 2026',
      description:
        'Formación avanzada en seguridad ofensiva y defensiva, con foco en aplicaciones web y entornos empresariales.',
      highlights: [
        'OWASP Top 10 aplicado a proyectos reales',
        'Pentesting web con Burp Suite y OWASP ZAP',
        'Criptografía aplicada y gestión de certificados TLS',
        'Seguridad en APIs REST y microservicios',
        'Análisis forense digital',
      ],
    },
    {
      id: 'daw',
      degree: 'Técnico Superior en DAW',
      specialization: 'Desarrollo de Aplicaciones Web',
      institution: 'ThePower Education',
      location: 'España',
      period: '2024 – 2026',
      description:
        'Formación técnica completa en desarrollo web full stack, desde el frontend hasta el despliegue en servidores Linux.',
      highlights: [
        'Frontend con HTML5, CSS3, JavaScript y React',
        'Backend con Node.js y APIs REST',
        'Bases de datos relacionales: MySQL y PostgreSQL',
        'Despliegue en Linux con Apache/Nginx',
        'Control de versiones con Git y GitHub',
      ],
    },
  ],


  skills: {
    frontend: ['JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Electron'],
    backend: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Stripe API'],
    databases: ['PostgreSQL', 'Supabase', 'MySQL'],
    security: [
      'OWASP Top 10',
      'JWT Auth seguro',
      'bcrypt',
      'RBAC',
      'Helmet.js',
      'Rate Limiting',
      'CORS configurado',
      'HTTPS / TLS',
      'Input Validation',
      'Burp Suite',
      'OWASP ZAP',
    ],
    tools: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'Linux CLI', 'Vite'],
  },


  projects: [
    {
      id: 'farmerhand',
      title: 'FarmerHand – Marketplace Agrícola',
      description:
        'Marketplace fullstack para productos ecológicos con tres portales independientes: consumidor, agricultor y administrador. API REST modular con autenticación JWT y RBAC para 3 tipos de usuario, pasarela de pago real con Stripe, y seguridad server-side completa. Frontend SPA desacoplado en JavaScript vanilla. TFG del Ciclo Superior de DAW con más de 2.000 horas de desarrollo propio.',
      technologies: ['Node.js', 'Express', 'JavaScript', 'Supabase', 'PostgreSQL', 'Stripe', 'JWT'],
      securityMeasures: [
        'API REST modular con autenticación JWT y hash de contraseñas con bcrypt',
        'RBAC: 3 roles independientes (consumidor · agricultor · admin)',
        'Seguridad server-side: Helmet.js + rate limiting + CORS',
        'Pasarela de pago real integrada con Stripe',
        'Frontend SPA desacoplado sin dependencias de framework',
        'Deploy en Vercel y Render con HTTPS automático',
      ],
      github: 'https://github.com/Miguelsanzchez/farmerhand',
      demo: 'https://proyect-dom-farmerhand.vercel.app/',
      featured: true,
      type: 'academic',
    },
    {
      id: 'voiceup-automations',
      title: 'VoiceUp – Automatizaciones de Negocio',
      description:
        'Sistema de automatizaciones de flujo de trabajo para una startup real (proyecto freelance). Integración de múltiples APIs externas, base de datos PostgreSQL, dashboard de monitoreo, envío automático de emails y sincronización de eventos en calendario. Proyecto gestionado de principio a fin con un cliente real.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'JavaScript'],
      securityMeasures: [
        'APIs externas con manejo seguro de credenciales en .env',
        'Consultas parametrizadas contra inyección SQL',
        'Logs de auditoría para cada acción automatizada',
        'Variables de entorno para todos los secretos',
      ],
      featured: false,
      type: 'fullstack',
    },
    {
      id: 'nyw-store',
      title: 'Tienda Natos y Waor',
      description:
        'Recreación frontend de la tienda e-commerce del dúo de hip-hop madrileño Natos y Waor. Catálogo con ropa, vinilos, Blu-ray y coleccionables, navegación por secciones y maquetación responsive. Construida con HTML5 y CSS3 puros — actualmente en proceso de migración a React y TypeScript.',
      technologies: ['HTML5', 'CSS3'],
      securityMeasures: [
        'Sin JavaScript: superficie de ataque mínima',
        'Sin dependencias externas ni librerías de terceros',
        'Deploy en Vercel con HTTPS automático',
      ],
      github: 'https://github.com/Miguelsanzchez/Project-5-CSS',
      demo: 'https://project5css.vercel.app/',
      featured: false,
      type: 'fullstack',
    },
    {
      id: 'portfolio',
      title: 'Este Portfolio',
      description:
        'Portfolio personal construido con React, TypeScript, Tailwind CSS y Framer Motion. Arquitectura de componentes limpia con todo el contenido editable desde un único archivo de configuración central.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      securityMeasures: [
        'Sin dependencias innecesarias (superficie de ataque mínima)',
        'Content Security Policy en producción',
        'Sin datos sensibles expuestos en el cliente',
        'Deploy en Vercel con HTTPS automático',
      ],
      github: 'https://github.com/Miguelsanzchez/portfolio',
      featured: false,
      type: 'fullstack',
    },
  ],


  experience: [
    {
      id: 'singular-things',
      title: 'Frontend Developer – Prácticas',
      company: 'Singular Things',
      type: 'work',
      period: 'Feb 2026 – May 2026',
      description:
        'Desarrollo de dashboards y aplicaciones frontend para entornos IoT industriales. Integración con APIs, backend y firmware de dispositivos. Visualización de datos de sensores en tiempo real para optimizar procesos internos, con carta de recomendación de la empresa.',
      achievements: [
        'Dashboards IoT con visualización de datos de sensores en tiempo real',
        'Integración con APIs REST, backend y firmware de dispositivos',
        'Desarrollo de apps de escritorio multiplataforma con Electron',
        'Docker para entornos de desarrollo y despliegue reproducibles',
        'Flujo profesional con Git en un equipo con proyectos reales de cliente',
      ],
      technologies: ['JavaScript', 'React', 'Electron', 'Docker', 'REST APIs', 'Git'],
    },
    {
      id: 'freelance-voiceup',
      title: 'Desarrollador Web Freelance',
      company: 'VoiceUp (cliente)',
      type: 'work',
      period: 'Ago 2025 – Actualidad',
      description:
        'Desarrollo de automatizaciones de flujo de trabajo para una startup: integración de APIs externas, bases de datos y dashboards de control, con envío automático de emails y gestión de eventos en calendario.',
      achievements: [
        'Automatizaciones que eliminan trabajo manual repetitivo en procesos internos',
        'Integración de múltiples APIs externas (email, calendario, datos)',
        'Dashboard de monitoreo para supervisar el estado de las automatizaciones',
        'Gestión autónoma del proyecto: requisitos, desarrollo y entrega al cliente',
      ],
      technologies: ['Node.js', 'PostgreSQL', 'REST APIs', 'JavaScript', 'Express'],
    },
    {
      id: 'daw-tfg',
      title: 'TFG – FarmerHand Marketplace',
      company: 'Ciclo Formativo DAW · ThePower Education',
      type: 'academic',
      period: '2023',
      description:
        'Desarrollo completo del marketplace agrícola FarmerHand como Trabajo Final de Grado. Arquitectura fullstack con Node.js, Supabase (PostgreSQL), autenticación JWT, RBAC para 3 roles y pasarela de pago Stripe.',
      achievements: [
        'Marketplace completo con 3 portales independientes por tipo de usuario',
        'Pasarela de pago real integrada con Stripe',
        'API REST modular con JWT y RBAC para 3 roles de acceso',
        'Seguridad server-side: Helmet, rate limiting, CORS',
        'Deploy en producción en Vercel y Render con HTTPS',
      ],
      technologies: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'JavaScript', 'Stripe', 'JWT'],
    },
  ],


  securityHighlights: {
    title: 'Seguridad como primera línea de código',
    description:
      'Mi Máster en Ciberseguridad no es solo teoría. Cada proyecto que construyo aplica estos principios desde el diseño inicial — siguiendo el estándar OWASP y las mejores prácticas de la industria.',
    categories: [
      {
        name: 'Autenticación & Autorización',
        icon: '🔐',
        items: [
          'JWT con vida útil corta + refresh tokens',
          'Hashing con bcrypt / Argon2',
          'Control de acceso basado en roles (RBAC)',
          'Bloqueo por intentos fallidos',
        ],
      },
      {
        name: 'Seguridad en Inputs',
        icon: '🛡️',
        items: [
          'Validación server-side estricta',
          'Sanitización contra XSS',
          'Consultas parametrizadas (anti-SQLi)',
          'Límite de tamaño en payloads',
        ],
      },
      {
        name: 'Seguridad en APIs',
        icon: '🔒',
        items: [
          'Rate limiting por IP',
          'CORS configurado correctamente',
          'Security headers con Helmet.js',
          'Errores sin información sensible',
        ],
      },
      {
        name: 'Infraestructura & Herramientas',
        icon: '⚙️',
        items: [
          'HTTPS obligatorio en producción',
          'Secretos en variables de entorno',
          'Pentesting con Burp Suite y OWASP ZAP',
          'Docker para entornos aislados y reproducibles',
        ],
      },
    ],
  },
}
