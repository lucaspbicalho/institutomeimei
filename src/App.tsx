import { Seo } from '@/components/Seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { About, Projects } from '@/components/sections/Projects'
import { HowToHelp } from '@/components/sections/HowToHelp'
import { Testimonials } from '@/components/sections/Testimonials'
import { Gallery } from '@/components/sections/Gallery'
import { News } from '@/components/sections/News'

function App() {
  return (
    <>
      <Seo />

      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Ir ao conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <HowToHelp />
        <Testimonials />
        <Gallery />
        <News />
      </main>

      <Footer />
    </>
  )
}

export default App
