import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pixConfig } from '@/data/content'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export function PixPage() {
  const [copied, setCopied] = useState(false)

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(pixConfig.key)
      setCopied(true)
      setTimeout(() => setCopied(false), 5000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-light via-white to-brand-green-light py-16 sm:py-24">
        <Container className="max-w-2xl">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-text sm:text-4xl">{pixConfig.title}</h1>
              <p className="mt-4 text-lg text-text-muted">{pixConfig.subtitle}</p>
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
                {pixConfig.keyLabel}
              </p>
              <p className="mt-3 text-2xl font-bold text-text sm:text-3xl">
                {pixConfig.keyFormatted}
              </p>
              <p className="mt-2 text-sm text-text-muted">{pixConfig.legalName}</p>

              <Button
                type="button"
                variant="primary"
                className="mt-6 w-full"
                onClick={copyKey}
                ariaLabel="Copiar chave PIX"
              >
                Copiar chave PIX
              </Button>

              {copied && (
                <p className="mt-4 rounded-xl bg-brand-green-light p-4 text-sm text-brand-green-dark" role="status">
                  {pixConfig.copiedMessage}
                </p>
              )}

              <p className="mt-6 text-center text-sm text-text-muted">{pixConfig.instructions}</p>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
              >
                ← Voltar ao site
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
