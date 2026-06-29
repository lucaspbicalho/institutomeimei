import { stats } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FadeIn } from '@/components/ui/FadeIn'

export function Stats() {
  return (
    <section className="bg-brand-blue py-12 sm:py-16" aria-label="Nossos números">
      <Container>
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <li className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    formatLocale={stat.formatLocale}
                  />
                </p>
                <p className="mt-2 text-sm text-white/80 sm:text-base">{stat.label}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  )
}
