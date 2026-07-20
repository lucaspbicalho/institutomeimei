import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { About, Projects } from '@/components/sections/Projects'
import { HowToHelp } from '@/components/sections/HowToHelp'
import { Gallery } from '@/components/sections/Gallery'

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <HowToHelp />
      <Gallery />
    </>
  )
}

export function HomeLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Ir ao conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <HomePage />
      </main>

      <Footer />
    </>
  )
}
