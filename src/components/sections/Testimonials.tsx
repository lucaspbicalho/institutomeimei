import { testimonials } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/ui/FadeIn'

export function Testimonials() {
  return (
    <section
      className="bg-brand-blue-light py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="testimonials-heading"
            title="Depoimentos"
            subtitle="Histórias de transformação de famílias, educadores e voluntários."
          />
        </FadeIn>

        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <li className="rounded-2xl bg-white p-6 shadow-sm">
                <blockquote className="text-text-muted leading-relaxed">
                  <p className="before:content-['\201C'] after:content-['\201D']">
                    {item.quote}
                  </p>
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-text">
                      {item.author}
                    </cite>
                    <p className="text-xs text-text-muted">{item.role}</p>
                  </div>
                </footer>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  )
}
