import { projects, whatWeDoIntro } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LazyImage } from '@/components/ui/LazyImage'
import { FadeIn } from '@/components/ui/FadeIn'

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              id="about-heading"
              title="Nossa missão"
              subtitle="Fundado em 2009, o Instituto Meimei une pessoas pelo ideal da transformação pessoal e social por meio da educação e da vivência cristã."
              align="left"
            />

            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Nossa escola está localizada em uma chácara em Justinópolis, região de
                Ribeirão das Neves, oferecendo educação infantil de qualidade com
                profissionais em constante formação.
              </p>
              <p>
                Trabalhamos com pedagogia fundamentada no amor, no respeito ao ser
                humano e na diversidade, transmitindo valores éticos e comprometidos
                com a formação integral do ser.
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Pedagogia do amor', 'Educação pela natureza', 'Formação integral', 'Amparo à família'].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-medium text-text"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <LazyImage
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80"
              alt="Espaço verde da chácara escolar do Instituto Meimei"
              className="rounded-2xl object-cover shadow-lg aspect-[4/3] w-full"
              width={800}
              height={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export function Projects() {
  return (
    <section
      id="o-que-fazemos"
      className="bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading id="projects-heading" title="O que Fazemos" align="left" />
          <div className="mb-10 max-w-3xl space-y-4 text-text-muted leading-relaxed">
            {whatWeDoIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <li className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={500}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-brand-blue-light px-3 py-1 text-xs font-semibold text-brand-blue">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-text">{project.title}</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  )
}
