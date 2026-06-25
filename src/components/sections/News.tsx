import { newsArticles } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LazyImage } from '@/components/ui/LazyImage'
import { Icon } from '@/components/ui/Icon'
import { FadeIn } from '@/components/ui/FadeIn'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function News() {
  return (
    <section
      id="noticias"
      className="bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="news-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="news-heading"
            title="Notícias"
            subtitle="Fique por dentro das novidades, eventos e campanhas do Instituto Meimei."
          />
        </FadeIn>

        <ul className="grid gap-6 md:grid-cols-3">
          {newsArticles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 0.08}>
              <li className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="overflow-hidden">
                  <LazyImage
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={375}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <time
                    dateTime={article.date}
                    className="text-xs font-medium text-brand-blue"
                  >
                    {formatDate(article.date)}
                  </time>
                  <h3 className="mt-2 text-lg font-bold text-text group-hover:text-brand-blue">
                    <a href={article.href} className="focus-visible:rounded">
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-dark"
                  >
                    Ler mais
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  )
}
