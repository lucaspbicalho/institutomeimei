import { helpOptions } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { FadeIn } from '@/components/ui/FadeIn'

export function HowToHelp() {
  return (
    <section
      id="ajudar"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="help-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="help-heading"
            title="Como ajudar"
            subtitle="Existem diversas formas de participar do nosso trabalho. Cada contribuição faz a diferença na vida das crianças."
            titleClassName="text"
            subtitleClassName="text/90"
          />
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpOptions.map((option, index) => (
            <FadeIn key={option.id} delay={index * 0.08}>
              <li className="flex flex-col rounded-2xl bg-brand-blue p-6 shadow-md transition-shadow hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-blue">
                  <Icon name={option.icon} className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {option.title}
                </h3>

                <p className="mt-2 flex-1 text-sm text-white/90 leading-relaxed">
                  {option.description}
                </p>

                <Button
                  href={option.href}
                  variant="outline"
                  className="mt-6 w-full text-xs sm:text-sm border-white text-white hover:bg-white hover:text-brand-blue"
                >
                  {option.cta}
                </Button>

              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  )
}