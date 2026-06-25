import {
  footerLinkGroups,
  siteConfig,
  socialLinks,
} from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-text text-white" aria-labelledby="footer-heading">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="footer-heading" className="text-xl font-bold">
              {siteConfig.name}
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {siteConfig.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Icon name="map" className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-green" />
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-green" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Redes sociais
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-blue"
                  aria-label={social.label}
                >
                  <Icon
                    name={social.icon as 'facebook' | 'instagram' | 'youtube'}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-4">
              <p className="text-sm font-medium">Horário de atendimento</p>
              <p className="mt-1 text-sm text-white/70">
                Segunda a sexta, das 8h às 17h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 sm:flex-row sm:text-left">
          <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Instituição Espírita de Amparo à Criança</p>
        </div>
      </Container>
    </footer>
  )
}
