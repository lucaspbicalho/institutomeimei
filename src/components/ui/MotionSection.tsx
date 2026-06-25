import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { defaultTransition } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MotionSectionProps {
  children: ReactNode
  className?: string
  id?: string
  variants?: Variants
  ariaLabelledBy?: string
}

export function MotionSection({
  children,
  className = '',
  id,
  variants,
  ariaLabelledBy,
}: MotionSectionProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <section id={id} className={className} aria-labelledby={ariaLabelledBy}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={className}
      aria-labelledby={ariaLabelledBy}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={defaultTransition}
    >
      {children}
    </motion.section>
  )
}
