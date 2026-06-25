import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, defaultTransition } from '@/lib/motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  )
}
