import { useState } from 'react'
import { heroImages } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { LazyImage } from '@/components/ui/LazyImage'
import { Icon } from '@/components/ui/Icon'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const images = [heroImages.primary, heroImages.alternate, heroImages.secondary]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [reducedMotion])

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
              Somos uma instituição beneficente sem fins lucrativos dedicada à
              educação infantil e ao desenvolvimento social em Ribeirão das Neves,
              MG.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/pix" variant="primary">
                Doar com PIX
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="#o-que-fazemos" variant="outline">
                O que fazemos
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-brand-blue/10">
            <LazyImage
  src={images[activeIndex].src}
  alt={images[activeIndex].alt}
    className="aspect-[4/3] w-full object-cover"
    width={1200}
    height={900}
    sizes="(max-width: 1024px) 100vw, 50vw"
  />
          
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent" />
            </div>

            <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Alternar foto do hero">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Foto ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-brand-blue' : 'bg-surface-muted'
                  }`}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
