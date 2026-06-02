import { motion } from 'framer-motion'
import { CheckCircle2, Shield } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import { useStrings } from '../i18n/strings'
import { Divider } from '../components/ui/Divider'
import { fadeInUp, staggerContainer } from '../lib/animations'

export function SecurityHighlights() {
  const { securityHighlights } = usePortfolio()
  const t = useStrings()

  return (
    <section id="seguridad" className="relative py-24 lg:py-32 overflow-hidden">
      <Divider />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
            <Shield size={13} className="text-emerald-500" />
            <p className="text-[10px] font-mono text-emerald-600 uppercase tracking-[0.25em]">
              security highlights
            </p>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            {securityHighlights.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-zinc-500 text-sm leading-relaxed max-w-xl">
            {securityHighlights.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {securityHighlights.categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeInUp}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(16,185,129,0.03)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(16,185,129,0.12)',
              }}
            >
              <div className="text-lg mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-[11px] text-emerald-400/80 mb-4 uppercase tracking-[0.15em] leading-snug">
                {cat.name}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
                    <CheckCircle2 size={11} className="text-emerald-500/60 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Strip inferior */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl"
          style={{
            background: 'rgba(16,185,129,0.03)',
            boxShadow: 'inset 0 1px 0 rgba(16,185,129,0.12), 0 0 0 1px rgba(16,185,129,0.1)',
          }}
        >
          <div className="flex items-center gap-3">
            <Shield size={16} className="text-emerald-500/70 shrink-0" />
            <div>
              <p className="font-semibold text-zinc-200 text-sm">{t.security.owasp}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{t.security.owaspSub}</p>
            </div>
          </div>
          <a
            href="#proyectos"
            className="shrink-0 px-4 py-2 text-xs font-mono text-emerald-500/70 hover:text-emerald-400 rounded-lg transition-all duration-200"
            style={{ background: 'rgba(16,185,129,0.05)', boxShadow: '0 0 0 1px rgba(16,185,129,0.15)' }}
          >
            {t.security.viewProjects}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
