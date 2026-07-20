import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks, siteConfig } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Button } from '../ui/Button'

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
        <div className="flex items-center justify-between py-3">
        <Link
          to="/"
          className="mx-auto flex flex-col items-center justify-center rounded-lg"
          aria-label={`${siteConfig.name} — Página inicial`}
        >
          <img
            src="/logo.jpg"
            alt={siteConfig.name}
            className="h-16 w-auto md:h-20"
          />

          <div className="mt-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1">
            <span className="text-xs font-semibold text-brand-blue md:text-sm">
              Instituição Espírita de Amparo à Criança
            </span>
          </div>
        </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavAnchor key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/pix" variant="secondary">Doar com PIX</Button>
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
          </Container>
        </nav>
      )}
    </header>
  )
}
