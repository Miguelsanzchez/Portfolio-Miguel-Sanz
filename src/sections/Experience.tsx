import { motion } from 'framer-motion'
import { CheckCircle2, Calendar } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Divider } from '../components/ui/Divider'
import { Badge } from '../components/ui/Badge'
import { fadeInUp, staggerContainer } from '../lib/animations'

const typeConfig = {
  academic: { label: 'Académico', variant: 'outline' as const },
  work:     { label: 'Laboral',   variant: 'white'   as const },
  personal: { label: 'Personal',  variant: 'outline' as const },
}

export function Experience() {
  const { experience } = portfolio

  return (
    <section id="experiencia" className="relative py-24 lg:py-32">
      <Divider />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="experiencia"
          title="Proyectos"
          highlight="relevantes"
          description="Experiencia profesional y trabajos académicos que demuestran criterio técnico real."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Línea de timeline */}
          <div className="absolute left-[15px] top-6 bottom-6 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}
          />

          <div className="space-y-6">
            {experience.map((exp) => {
              const config = typeConfig[exp.type]

              return (
                <motion.div key={exp.id} variants={fadeInUp} className="sm:pl-12 relative">
                  {/* Dot de timeline */}
                  <div
                    className="absolute left-[9px] top-6 w-[13px] h-[13px] rounded-full hidden sm:block"
                    style={{
                      background: 'linear-gradient(to bottom, #3f3f46, #1a1a1e)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 0 0 3px rgba(0,0,0,1)',
                    }}
                  />

                  <div className="card p-6 hover:border-zinc-800 transition-all duration-200">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-zinc-100 text-sm leading-snug">{exp.title}</h3>
                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                          <span className="text-xs text-zinc-500">{exp.company}</span>
                          <span className="flex items-center gap-1 text-[11px] text-zinc-700">
                            <Calendar size={10} />{exp.period}
                          </span>
                        </div>
                      </div>
                      <Badge variant={config.variant} size="sm">{config.label}</Badge>
                    </div>

                    <p className="text-xs text-zinc-500 leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-zinc-500">
                          <CheckCircle2 size={11} className="text-zinc-600 mt-0.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => <Badge key={t} variant="outline" size="sm">{t}</Badge>)}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
