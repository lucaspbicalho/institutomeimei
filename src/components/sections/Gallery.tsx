import { galleryImages } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LazyImage } from '@/components/ui/LazyImage'
import { FadeIn } from '@/components/ui/FadeIn'

export function Gallery() {
  return (
    <section
      id="galeria"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="gallery-heading"
            title="Galeria"
            subtitle="Veja o que acontece por aqui — momentos de aprendizagem, alegria e comunidade."
          />
        </FadeIn>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.05}>
              <li className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {image.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    <p className="text-xs font-medium text-white sm:text-sm">
                      {image.caption}
                    </p>
                  </div>
                )}
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  )
}
