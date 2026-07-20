interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-surface-muted bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}