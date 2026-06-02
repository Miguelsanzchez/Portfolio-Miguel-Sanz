import { motion } from 'framer-motion'
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react'
import { portfolio, type Project } from '../content/portfolio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Divider } from '../components/ui/Divider'
import { Badge } from '../components/ui/Badge'
import { fadeInUp, staggerContainer } from '../lib/animations'

const typeLabel: Record<Project['type'], string> = {
  fullstack: 'Full Stack',
  security:  'AppSec',
  academic:  'Académico',
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasDemo = Boolean(project.demo && project.demo !== '#')

  return (
    <motion.div
      variants={fadeInUp}
      className={`card group hover:border-zinc-800 transition-all duration-300 flex flex-col ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* ── Imagen del proyecto ───────────────────────────── */}
      {project.image && (
        <div className="relative overflow-hidden rounded-t-2xl h-52">
          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Gradiente inferior */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          {/* Borde superior */}
          <div
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            }}
          />
        </div>
      )}

      {/* ── Contenido ─────────────────────────────────────── */}
      <div className={`flex flex-col flex-1 ${project.image ? 'p-6 pt-4' : featured ? 'p-8' : 'p-6'}`}>

        {/* Header: badges + iconos */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" size="sm">{typeLabel[project.type]}</Badge>
            {featured && (
              <span
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full text-zinc-300"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                Destacado
              </span>
            )}
          </div>
          {/* Icono GitHub — pequeño y sutil */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-300 transition-colors"
              aria-label="Código en GitHub"
            >
              <Github size={15} />
            </a>
          )}
        </div>

        {/* Título */}
        <h3
          className={`font-bold text-zinc-200 group-hover:text-white mb-2 transition-colors ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-zinc-500 text-base leading-relaxed mb-5">{project.description}</p>

        {/* Seguridad */}
        <div
          className="mb-5 p-4 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.02)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          <p className="text-xs font-mono text-zinc-600 tracking-[0.18em] uppercase mb-2.5">
            // seguridad aplicada
          </p>
          <ul className="space-y-1.5">
            {project.securityMeasures.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm text-zinc-500">
                <CheckCircle2 size={13} className="text-zinc-500 mt-0.5 shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((t) => (
            <Badge key={t} variant="tech" size="sm">{t}</Badge>
          ))}
        </div>

        {/* Botón demo */}
        {hasDemo && (
          <div className="mt-auto">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background:
                  'linear-gradient(135deg, #d4d4d8 0%, #f0f0f2 30%, #ffffff 50%, #e8e8eb 68%, #b0b0b5 100%)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.85), 0 3px 10px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.25)',
              }}
            >
              <ExternalLink size={14} />
              Ver proyecto
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const featured = portfolio.projects.filter((p) => p.featured)
  const rest     = portfolio.projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="relative py-24 lg:py-32">
      <Divider />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="proyectos"
          title="Código real,"
          highlight="seguridad real"
          description="Full stack con AppSec integrado — cada proyecto aplica buenas prácticas desde la arquitectura."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-4"
        >
          {featured.map((p) => <ProjectCard key={p.id} project={p} featured />)}
          {rest.map((p)     => <ProjectCard key={p.id} project={p} />)}
        </motion.div>
      </div>
    </section>
  )
}
