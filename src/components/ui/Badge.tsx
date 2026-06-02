import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'security' | 'tech' | 'outline' | 'white'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  const base = 'inline-flex items-center font-medium rounded-full'

  const variants = {
    default:  'bg-zinc-900 text-zinc-400 border border-zinc-800',
    security: 'bg-white/5 text-zinc-300 border border-white/10',
    tech:     'bg-white/5 text-zinc-300 border border-white/8',
    outline:  'bg-transparent text-zinc-500 border border-zinc-800',
    white:    'bg-white text-black',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}
