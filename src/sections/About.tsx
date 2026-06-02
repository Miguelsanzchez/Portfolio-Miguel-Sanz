import { motion } from 'framer-motion'
import { portfolio } from '../content/portfolio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Divider } from '../components/ui/Divider'
import { fadeInUp, staggerContainer } from '../lib/animations'

export function About() {
  const { about, personal } = portfolio

  return (
    <section id="sobre-mi" className="relative py-24 lg:py-32">
      <Divider />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">

          {/* ── Columna izquierda: foto ──────────────────── */}
          {personal.photo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center lg:items-start gap-6"
            >
              <div
                className="relative rounded-2xl overflow-hidden w-56 lg:w-full aspect-[3/4]"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(99,102,241,0.15), 0 24px 48px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.06)',
                }}
              >
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* overlay sutil */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 60%, rgba(9,9,11,0.4) 100%)',
                  }}
                />
              </div>

              {/* Badge nombre bajo la foto */}
              <div
                className="w-full rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-0.5">
                  {personal.location}
                </p>
                <p className="text-sm font-semibold text-zinc-300">{personal.name}</p>
                <p className="text-xs text-indigo-400">{personal.title}</p>
              </div>
            </motion.div>
          )}

          {/* ── Columna derecha: texto + stats ───────────── */}
          <div>
            <SectionTitle
              eyebrow="sobre mí"
              title="Desarrollador orientado"
              highlight="a la seguridad"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-4 mb-8"
            >
              {about.paragraphs.map((p, i) => (
                <motion.p key={i} variants={fadeInUp} className="text-zinc-500 leading-relaxed text-sm">
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-3"
            >
              {about.highlights.map((item) => (
                <motion.div key={item.label} variants={fadeInUp} className="card p-6 hover:border-zinc-800 transition-colors">
                  <p className="text-2xl font-black text-white mb-1">{item.value}</p>
                  <p className="text-xs text-zinc-600">{item.label}</p>
                </motion.div>
              ))}

              <motion.div
                variants={fadeInUp}
                className="col-span-2 p-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                <p className="text-[10px] font-mono text-zinc-600 mb-1.5 uppercase tracking-widest">
                  Perfil diferencial
                </p>
                <p className="text-sm text-zinc-300 font-medium">
                  Full Stack + DAW + Máster en Ciberseguridad
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  AppSec y desarrollo seguro integrado desde la arquitectura
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
