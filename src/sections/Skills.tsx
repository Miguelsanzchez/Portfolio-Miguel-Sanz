import { motion } from 'framer-motion'
import { portfolio } from '../content/portfolio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Divider } from '../components/ui/Divider'
import { Badge } from '../components/ui/Badge'
import { fadeInUp, staggerContainer } from '../lib/animations'

function SkillGroup({ title, glyph, skills }: {
  title: string; glyph: string; skills: string[]
}) {
  return (
    <motion.div variants={fadeInUp} className="card p-6">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="font-mono text-zinc-600 text-sm">{glyph}</span>
        <h3 className="text-[11px] font-mono text-zinc-600 uppercase tracking-[0.18em]">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => <Badge key={s} variant="tech" size="sm">{s}</Badge>)}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const { skills } = portfolio

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <Divider />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="habilidades"
          title="Stack técnico"
          highlight="completo"
          description="Desarrollo full stack con enfoque diferencial en seguridad de aplicaciones web."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-4"
        >
          <SkillGroup title="Frontend"             glyph="⟨/⟩" skills={skills.frontend} />
          <SkillGroup title="Backend & APIs"        glyph="⬡"   skills={skills.backend} />
          <SkillGroup title="Bases de datos"        glyph="⊞"   skills={skills.databases} />
          <SkillGroup title="Herramientas & DevOps" glyph="⚙"   skills={skills.tools} />

          {/* Ciberseguridad — ancho completo con tinte esmeralda */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'rgba(16,185,129,0.03)',
              boxShadow:
                'inset 0 1px 0 rgba(16,185,129,0.1), 0 0 0 1px rgba(16,185,129,0.12)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-4 flex-wrap">
              <span className="font-mono text-emerald-500/70 text-sm">⬡</span>
              <h3 className="text-[11px] font-mono text-emerald-500/80 uppercase tracking-[0.18em]">
                Ciberseguridad Web
              </h3>
              <span
                className="ml-auto text-[10px] font-mono text-emerald-600 px-2.5 py-0.5 rounded-full"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  boxShadow: '0 0 0 1px rgba(16,185,129,0.15)',
                }}
              >
                Máster en Ciberseguridad · OWASP Top 10
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.security.map((s) => <Badge key={s} variant="security" size="sm">{s}</Badge>)}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
