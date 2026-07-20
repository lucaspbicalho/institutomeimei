import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks, siteConfig } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

function NavAnchor({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-brand-blue"
      >
        {label}
      </a>
    )
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-brand-blue"
    >
      {label}
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted/80 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            to="/"
            className="flex flex-col items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={`${siteConfig.name} — Página inicial`}
          >
             <img
              src="/logo.jpg"
              alt={siteConfig.name}
              className="h-16 w-auto"
            />

            <span className="mt-1 text-center text-xs text-text-muted md:text-sm">
              Instituição Espírita de Amparo à Criança
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavAnchor key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
  
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
            <Button href="/pix" variant="secondary" className="mt-2 w-full">
              Doar com PIX
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
