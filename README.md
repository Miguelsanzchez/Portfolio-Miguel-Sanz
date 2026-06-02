# Portfolio — Miguel Sánchez

Portfolio web profesional para Full Stack Developer con Máster en Ciberseguridad.

**Stack:** React · TypeScript · Tailwind CSS · Framer Motion · Vite

---

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

---

## Editar contenido

**Todo el contenido está en un único archivo:**

```
src/content/portfolio.ts
```

### Datos personales

```ts
personal: {
  name: 'Tu nombre',
  email: 'tu@email.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  available: true,  // muestra/oculta el badge "Disponible"
}
```

### Añadir un proyecto

Agrega un objeto al array `projects` en `portfolio.ts`:

```ts
{
  id: 'mi-proyecto',
  title: 'Nombre del proyecto',
  description: 'Descripción breve.',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  securityMeasures: [
    'Descripción de medida de seguridad 1',
    'Descripción de medida de seguridad 2',
  ],
  github: 'https://github.com/tu-usuario/mi-proyecto',
  demo: 'https://mi-demo.vercel.app',
  featured: false,  // true = ocupa el ancho completo
  type: 'fullstack', // 'fullstack' | 'security' | 'academic'
}
```

### Editar skills

Edita los arrays en `skills`:

```ts
skills: {
  frontend: ['React', 'TypeScript', ...],
  backend: ['Node.js', 'Express', ...],
  databases: ['PostgreSQL', ...],
  security: ['OWASP Top 10', 'XSS Prevention', ...],
  tools: ['Git', 'Docker', ...],
}
```

---

## Deploy en Vercel

```bash
# Instala Vercel CLI (si no lo tienes)
npm i -g vercel

# Deploy
vercel
```

O conecta el repositorio en [vercel.com](https://vercel.com) para deploy automático en cada push.

---

## Estructura del proyecto

```
src/
  content/
    portfolio.ts      # ← fuente única de todo el contenido
  components/
    ui/               # Badge, SectionTitle (reutilizables)
    layout/           # Header
  sections/           # Hero, About, Education, Skills, Projects,
                      # SecurityHighlights, Experience, Contact
  lib/
    animations.ts     # Variantes Framer Motion compartidas
```
