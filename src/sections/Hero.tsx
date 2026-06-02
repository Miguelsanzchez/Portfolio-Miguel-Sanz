import { motion } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import { fadeInUp, staggerContainer } from '../lib/animations'

const terminalLines = [
  { isCommand: true,  text: 'whoami' },
  { isCommand: false, text: portfolio.personal.name },
  { isCommand: true,  text: 'cat titulo.txt' },
  { isCommand: false, text: `${portfolio.personal.title} · ${portfolio.personal.subtitle}` },
  { isCommand: true,  text: 'cat disponibilidad.txt' },
  { isCommand: false, text: '✓  Disponible · Incorporación inmediata' },
  { isCommand: true,  text: '' },
]

export function Hero() {
  const { personal } = portfolio

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Orb indigo */}
      <motion.div
        className="absolute -top-20 right-0 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 65% 25%, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb violeta */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 70%, rgba(139,92,246,0.07) 0%, rgba(99,102,241,0.03) 50%, transparent 80%)',
        }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Línea inferior plateada */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.2) 30%, rgba(255,255,255,0.12) 50%, rgba(139,92,246,0.2) 70%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Izquierda ─────────────────────────────────── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            {/* Badge disponible — verde */}
            {personal.available && (
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 mb-10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
                  Disponible para trabajar en España
                </span>
              </motion.div>
            )}

            {/* Nombre cromado */}
            <motion.div variants={fadeInUp}>
              <p className="text-zinc-700 font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
                Hola, soy
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 relative">
                <span className="text-chrome">{personal.name}</span>
                <span
                  className="absolute inset-0 rounded-sm pointer-events-none"
                  style={{
                    background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)',
                    animation: 'glint 8s ease-in-out infinite',
                    animationDelay: '2s',
                  }}
                />
              </h1>
            </motion.div>

            {/* Título — añado color al subtítulo */}
            <motion.div variants={fadeInUp} className="mb-5 space-y-0.5">
              <p className="text-lg sm:text-xl font-medium text-zinc-200">{personal.title}</p>
              <p className="text-lg sm:text-xl font-medium text-indigo-400">+ {personal.subtitle}</p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-md">
              {personal.tagline}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-1.5 text-zinc-700 text-[11px] font-mono mb-10 tracking-wider">
              <MapPin size={10} />
              {personal.location}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 text-black text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff, #d4d4d8)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 3px 10px rgba(0,0,0,0.45)',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              >
                Ver proyectos
                <ArrowDown size={14} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-zinc-400 hover:text-zinc-200 text-sm font-medium rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 0 0 1px rgba(255,255,255,0.08)',
                }}
              >
                Contactar
              </a>
            </motion.div>
          </motion.div>

          {/* ── Terminal ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#050505',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(99,102,241,0.1), 0 24px 48px rgba(0,0,0,0.6)',
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3.5"
                style={{
                  background: 'linear-gradient(to bottom, #0d0d0d, #080808)',
                  boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full"
                      style={{ background: 'linear-gradient(to bottom, #3f3f46, #27272a)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}
                    />
                  ))}
                </div>
                <span className="flex-1 text-center text-[11px] text-zinc-700 font-mono">
                  miguel@portfolio — zsh
                </span>
              </div>

              <div className="p-7 font-mono text-sm space-y-1 min-h-[260px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.38, duration: 0.3 }}
                  >
                    {line.isCommand ? (
                      <div className="flex items-center gap-2.5">
                        <span className="text-indigo-500">›</span>
                        <span className="text-zinc-300">
                          {line.text === ''
                            ? <span className="cursor-blink text-zinc-600">▊</span>
                            : line.text}
                        </span>
                      </div>
                    ) : (
                      <div className="text-zinc-600 pl-5 pb-2 text-xs">{line.text}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.6 }}
              className="mt-4 flex items-center gap-2 px-4 py-2.5 rounded-xl w-fit"
              style={{
                background: 'rgba(99,102,241,0.05)',
                boxShadow: 'inset 0 1px 0 rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.1)',
              }}
            >
              <span className="text-[11px] font-mono text-indigo-400/70">
                OWASP Top 10 aware · AppSec oriented
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          <span className="text-[9px] font-mono tracking-[0.35em] uppercase">scroll</span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={11} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
