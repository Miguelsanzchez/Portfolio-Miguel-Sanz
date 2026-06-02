import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`flex flex-col gap-3 mb-12 ${alignClass}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={`text-zinc-500 text-base leading-relaxed ${align === 'center' ? 'max-w-xl' : 'max-w-lg'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
