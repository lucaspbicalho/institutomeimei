import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pixConfig, siteConfig } from '@/data/content'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ribeirão das Neves',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
}

export function Seo() {
  const location = useLocation()
  const isPix = location.pathname === '/pix'

  const pageTitle = isPix
    ? `${pixConfig.title} — ${siteConfig.name}`
    : `${siteConfig.name} — Educação e Amparo à Criança`

  const description = isPix
    ? `Doe ao ${siteConfig.name} via PIX. Chave CNPJ ${pixConfig.keyFormatted}.`
    : siteConfig.description

  useEffect(() => {
    document.title = pageTitle

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', pageTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', `${siteConfig.url}${location.pathname}`, true)
    setMeta('og:locale', 'pt_BR', true)
    setMeta('twitter:card', 'summary_large_image')

    const scriptId = 'json-ld-org'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [pageTitle, description, location.pathname])

  return null
}
