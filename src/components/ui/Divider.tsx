export function Divider() {
  return (
    <div
      aria-hidden
      className="absolute top-0 inset-x-0 h-px pointer-events-none"
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.04) 80%, transparent 100%)',
      }}
    />
  )
}
