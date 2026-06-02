import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Divider } from '../components/ui/Divider'
import { fadeInUp, staggerContainer } from '../lib/animations'

const meta: Record<string, { glyph: string }> = {
  'master-ciberseguridad': { glyph: '◈' },
  'daw':                   { glyph: '◇' },
}

export function Education() {
  const { education } = portfolio

  return (
    <section id="formacion" className="relative py-24 lg:py-32">
      <Divider />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="formación"
          title="Base técnica"
          highlight="sólida"
          description="Formación oficial reglada que une el desarrollo web profesional con la ciberseguridad aplicada."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-5"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              className="card p-8 hover:border-zinc-800 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-lg text-zinc-600 font-mono">{meta[edu.id]?.glyph ?? '◇'}</span>
                <span className="text-[11px] font-mono text-zinc-600 px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.04)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                  {edu.period}
                </span>
              </div>

              <div className="flex items-start gap-3 mb-1">
                <GraduationCap size={18} className="text-zinc-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-zinc-100 leading-snug">{edu.degree}</h3>
                  <p className="text-sm text-zinc-600 mt-0.5">{edu.specialization}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3 mb-4 pl-8">
                <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <MapPin size={11} />{edu.institution}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <Calendar size={11} />{edu.location}
                </span>
              </div>

              <p className="text-sm text-zinc-500 leading-relaxed mb-5 pl-8">{edu.description}</p>

              <ul className="space-y-2">
                {edu.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-zinc-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
