import type { PortfolioData } from './portfolio'

export const portfolioEn: PortfolioData = {
  personal: {
    name: 'Miguel Sanz Sánchez de la Morena',
    firstName: 'Miguel',
    title: 'Full Stack Developer',
    subtitle: "Master's in Cybersecurity",
    tagline:
      'I build web applications that go to production: an agricultural marketplace with Stripe, real-time IoT dashboards and automations for real clients — with security baked in from the first commit.',
    location: 'Madrid',
    available: true,
    email: 'miguelsanzchez94@gmail.com',
    github: 'https://github.com/Miguelsanzchez',
    linkedin: 'https://www.linkedin.com/in/miguel-sanz-sanchez-de-la-morena/',
    photo: '/miguel.jpg',
  },

  about: {
    paragraphs: [
      "Full Stack Developer with a Higher Degree in Web Development (DAW) and a Master's in Cybersecurity. I recently finished my internship at Singular Things, where I built IoT dashboards with real-time sensor data visualization using React, Electron and Docker in a professional team working on real client projects.",
      'As a freelancer, I developed workflow automations for VoiceUp — integrating external APIs, databases and automatic email sending. My flagship project is FarmerHand, a full-stack agricultural marketplace with a real Stripe payment gateway, RBAC for 3 user types and over 2,000 hours of personal development.',
      'My next step is the DevOps and DevSecOps space: integrating security into CI/CD pipelines from the design phase and bringing that mindset to infrastructure and deployment.',
    ],
    highlights: [
      { label: 'Project hours',    value: '+2,000' },
      { label: 'Real internship',  value: 'Singular Things' },
      { label: 'Education',        value: "DAW + Master's" },
      { label: 'Availability',     value: 'Immediate' },
    ],
  },

  education: [
    {
      id: 'master-ciberseguridad',
      degree: "Master's in Cybersecurity",
      specialization: 'Web Security · Ethical Hacking · Digital Forensics',
      institution: 'ThePower Education',
      location: 'Spain',
      period: '2024 – 2026',
      description: 'Advanced training in offensive and defensive security, focusing on web applications and enterprise environments.',
      highlights: [
        'OWASP Top 10 applied to real projects',
        'Web pentesting with Burp Suite and OWASP ZAP',
        'Applied cryptography and TLS certificate management',
        'Security in REST APIs and microservices',
        'Digital forensics',
      ],
    },
    {
      id: 'daw',
      degree: 'Higher Degree in Web Application Development (DAW)',
      specialization: 'Web Application Development',
      institution: 'ThePower Education',
      location: 'Spain',
      period: '2024 – 2026',
      description: 'Complete technical training in full stack web development, from frontend to deployment on Linux servers.',
      highlights: [
        'Frontend with HTML5, CSS3, JavaScript and React',
        'Backend with Node.js and REST APIs',
        'Relational databases: MySQL and PostgreSQL',
        'Deployment on Linux with Apache/Nginx',
        'Version control with Git and GitHub',
      ],
    },
  ],

  skills: {
    frontend: ['JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Electron'],
    backend: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Stripe API'],
    databases: ['PostgreSQL', 'Supabase', 'MySQL'],
    security: [
      'OWASP Top 10',
      'JWT Auth',
      'bcrypt',
      'RBAC',
      'Helmet.js',
      'Rate Limiting',
      'CORS',
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
      title: 'FarmerHand – Agricultural Marketplace',
      description:
        'Full-stack marketplace for organic products with three independent portals: consumer, farmer and administrator. Modular REST API with JWT authentication and RBAC for 3 user types, real payment gateway with Stripe, and complete server-side security. Decoupled SPA frontend in vanilla JavaScript. Final degree project (DAW) with over 2,000 hours of personal development.',
      technologies: ['Node.js', 'Express', 'JavaScript', 'Supabase', 'PostgreSQL', 'Stripe', 'JWT'],
      securityMeasures: [
        'Modular REST API with JWT authentication and bcrypt password hashing',
        'RBAC: 3 independent roles (consumer · farmer · admin)',
        'Server-side security: Helmet.js + rate limiting + CORS',
        'Real payment gateway integrated with Stripe',
        'Decoupled SPA frontend with no framework dependencies',
        'Deployed on Vercel and Render with automatic HTTPS',
      ],
      github: 'https://github.com/Miguelsanzchez/farmerhand',
      demo: 'https://proyect-dom-farmerhand.vercel.app/',
      featured: true,
      type: 'academic',
    },
    {
      id: 'voiceup-automations',
      title: 'VoiceUp – Business Automations',
      description:
        'Workflow automation system for a real startup (freelance project). Integration of multiple external APIs, PostgreSQL database, monitoring dashboard, automatic email sending and calendar event synchronization. Project managed end-to-end with a real client.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'JavaScript'],
      securityMeasures: [
        'External APIs with secure credential management in .env',
        'Parameterized queries against SQL injection',
        'Audit logs for every automated action',
        'Environment variables for all secrets',
      ],
      featured: false,
      type: 'fullstack',
    },
    {
      id: 'nyw-store',
      title: 'Natos y Waor Store',
      description:
        "Frontend recreation of the e-commerce store for Madrid hip-hop duo Natos y Waor. Grid catalog with clothing, vinyl records, Blu-rays and collectibles, section navigation and responsive layout. Built with pure HTML5 and CSS3 — currently being migrated to React and TypeScript.",
      technologies: ['HTML5', 'CSS3'],
      securityMeasures: [
        'No JavaScript: minimal attack surface',
        'No external dependencies or third-party libraries',
        'Deployed on Vercel with automatic HTTPS',
      ],
      github: 'https://github.com/Miguelsanzchez/Project-5-CSS',
      demo: 'https://project5css.vercel.app/',
      featured: false,
      type: 'fullstack',
    },
    {
      id: 'portfolio',
      title: 'This Portfolio',
      description:
        'Personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion. Clean component architecture with all content editable from a single central configuration file.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      securityMeasures: [
        'No unnecessary dependencies (minimal attack surface)',
        'Content Security Policy in production',
        'No sensitive data exposed on the client',
        'Deployed on Vercel with automatic HTTPS',
      ],
      github: 'https://github.com/Miguelsanzchez/portfolio',
      featured: false,
      type: 'fullstack',
    },
  ],

  experience: [
    {
      id: 'singular-things',
      title: 'Frontend Developer – Internship',
      company: 'Singular Things',
      type: 'work',
      period: 'Feb 2026 – May 2026',
      description:
        'Development of dashboards and frontend applications for industrial IoT environments. Integration with APIs, backend and device firmware. Real-time sensor data visualization to optimize internal processes, with a company recommendation letter.',
      achievements: [
        'IoT dashboards with real-time sensor data visualization',
        'Integration with REST APIs, backend and device firmware',
        'Cross-platform desktop apps built with Electron',
        'Docker for reproducible development and deployment environments',
        'Professional Git workflow in a team with real client projects',
      ],
      technologies: ['JavaScript', 'React', 'Electron', 'Docker', 'REST APIs', 'Git'],
    },
    {
      id: 'freelance-voiceup',
      title: 'Freelance Web Developer',
      company: 'VoiceUp (client)',
      type: 'work',
      period: 'Aug 2025 – Present',
      description:
        'Workflow automation development for a startup: integration of external APIs, databases and control dashboards, with automatic email sending and calendar event management.',
      achievements: [
        'Automations that eliminate repetitive manual work in internal processes',
        'Integration of multiple external APIs (email, calendar, data)',
        'Monitoring dashboard to track automation status',
        'Autonomous project management: requirements, development and client delivery',
      ],
      technologies: ['Node.js', 'PostgreSQL', 'REST APIs', 'JavaScript', 'Express'],
    },
    {
      id: 'daw-tfg',
      title: 'Final Project – FarmerHand Marketplace',
      company: 'DAW · ThePower Education',
      type: 'academic',
      period: '2023',
      description:
        "Complete development of the FarmerHand agricultural marketplace as the Final Degree Project. Full-stack architecture with Node.js, Supabase (PostgreSQL), JWT authentication, RBAC for 3 roles and Stripe payment gateway.",
      achievements: [
        'Complete marketplace with 3 independent portals per user type',
        'Real payment gateway integrated with Stripe',
        'Modular REST API with JWT and RBAC for 3 access roles',
        'Server-side security: Helmet, rate limiting, CORS',
        'Deployed in production on Vercel and Render with HTTPS',
      ],
      technologies: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'JavaScript', 'Stripe', 'JWT'],
    },
  ],

  securityHighlights: {
    title: 'Security as the first line of code',
    description:
      "My Master's in Cybersecurity isn't just theory. Every project I build applies these principles from initial design — following the OWASP standard and industry best practices.",
    categories: [
      {
        name: 'Authentication & Authorization',
        icon: '🔐',
        items: [
          'Short-lived JWT + refresh tokens',
          'Password hashing with bcrypt',
          'Role-based access control (RBAC)',
          'Account lockout on failed attempts',
        ],
      },
      {
        name: 'Input Security',
        icon: '🛡️',
        items: [
          'Strict server-side validation',
          'XSS sanitization',
          'Parameterized queries (anti-SQLi)',
          'Payload size limits',
        ],
      },
      {
        name: 'API Security',
        icon: '🔒',
        items: [
          'Rate limiting per IP',
          'Correctly configured CORS',
          'Security headers with Helmet.js',
          'Errors without sensitive data',
        ],
      },
      {
        name: 'Infrastructure & Tools',
        icon: '⚙️',
        items: [
          'Mandatory HTTPS in production',
          'Secrets in environment variables',
          'Pentesting with Burp Suite and OWASP ZAP',
          'Docker for isolated reproducible environments',
        ],
      },
    ],
  },
}
