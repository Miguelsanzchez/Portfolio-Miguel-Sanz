import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { portfolio } from '../../content/portfolio'

const navLinks = [
  { label: 'Skills',      href: '#skills' },
  { label: 'Proyectos',   href: '#proyectos' },
  { label: 'Seguridad',   href: '#seguridad' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto',    href: '#contacto' },
]

export function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={scrolled ? {
          background: 'rgba(0,0,0,0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
        } : undefined}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, #ffffff, #d4d4d8)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              <span className="text-[10px] font-black text-black tracking-tighter">MS</span>
            </div>
            <span className="font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors text-sm">
              {portfolio.personal.firstName} Sanz
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-zinc-600 hover:text-zinc-200 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Derecha desktop */}
          <div className="hidden md:flex items-center gap-4">
            {portfolio.personal.available && (
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Disponible
              </span>
            )}
            {/* CTA */}
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="px-4 py-2 text-sm font-semibold text-black rounded-lg transition-all duration-150 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(to bottom, #ffffff, #d4d4d8)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 3px rgba(0,0,0,0.4)',
              }}
            >
              Contactar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden"
            style={{
              background: 'rgba(4,4,4,0.96)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-zinc-500 hover:text-white rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${portfolio.personal.email}`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-semibold text-center text-black rounded-lg"
                style={{ background: 'linear-gradient(to bottom, #ffffff, #d4d4d8)' }}
              >
                Contactar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
