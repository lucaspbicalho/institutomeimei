import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  ariaLabel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-brand-green text-white hover:bg-brand-green-dark shadow-sm hover:shadow-md',
  outline:
    'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue-light',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue'

  const styles = `${base} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={styles} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
