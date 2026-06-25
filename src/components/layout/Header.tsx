import { useState } from 'react'
import { navLinks, siteConfig } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted/80 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={`${siteConfig.name} — Página inicial`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white">
              M
            </span>
            <span className="text-lg font-bold text-text">
              {siteConfig.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#ajudar" variant="secondary">Como ajudar</Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-text lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-surface-muted bg-white lg:hidden"
          aria-label="Navegação mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-base font-medium text-text hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <Button href="#ajudar" variant="secondary" className="mt-2 w-full">
              Como ajudar
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
