import { siteConfig } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { LazyImage } from '@/components/ui/LazyImage'
import { Icon } from '@/components/ui/Icon'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue-light via-white to-brand-green-light"
      aria-labelledby="hero-heading"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl" />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
              Instituição Espírita de Amparo à Criança
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              Educação com{' '}
              <span className="text-brand-blue">amor</span> e{' '}
              <span className="text-brand-green">transformação</span>
            </h1>

            <p className="mt-6 text-lg text-text-muted leading-relaxed sm:text-xl">
              {siteConfig.tagline}. Atendemos crianças e famílias em situação de
              vulnerabilidade social com educação infantil de qualidade em Ribeirão
              das Neves, MG.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#ajudar" variant="primary">
                Como ajudar
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="#projetos" variant="outline">
                Conheça nossos projetos
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-brand-blue/10">
              <LazyImage
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80"
                alt="Crianças em atividade educativa ao ar livre no Instituto Meimei"
                className="aspect-[4/3] w-full object-cover"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg sm:-bottom-6 sm:-left-6 sm:p-5">
              <p className="text-2xl font-bold text-brand-green">15+</p>
              <p className="text-sm text-text-muted">anos transformando vidas</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
