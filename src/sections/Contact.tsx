import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import { Divider } from '../components/ui/Divider'
import { fadeInUp, staggerContainer } from '../lib/animations'

export function Contact() {
  const { personal } = portfolio

  return (
    <section id="contacto" className="relative overflow-hidden py-24 lg:py-32">
      <Divider />

      {/* Halo de fondo */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeInUp} className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] mb-5">
            contacto
          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-white">
            ¿Hablamos?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Busco oportunidades como Full Stack Developer con especialización en ciberseguridad.
            Si tienes una oferta o proyecto interesante, escríbeme.
          </motion.p>

          {/* Email */}
          <motion.div variants={fadeInUp} className="mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 px-7 py-4 text-black font-semibold rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm"
              style={{
                background: 'linear-gradient(to bottom, #ffffff, #d4d4d8)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 16px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              <Mail size={16} />
              {personal.email}
            </a>
          </motion.div>

          {/* Sociales */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
            {[
              { href: personal.github,   Icon: Github,   label: 'GitHub' },
              { href: personal.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-zinc-600 hover:text-zinc-200 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Disponible */}
          <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Disponible · Incorporación inmediata · España
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 pt-8 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <p className="text-[10px] text-zinc-800 font-mono tracking-[0.2em]">
          REACT · TYPESCRIPT · TAILWIND CSS · FRAMER MOTION
        </p>
      </motion.div>
    </section>
  )
}
