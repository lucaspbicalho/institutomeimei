import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HomeLayout } from '@/pages/HomePage'
import { PixPage } from '@/pages/PixPage'
import { ApadrinhePage } from '@/pages/ApadrinhePage'

function PixLayout() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PixPage />
        <ApadrinhePage />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Seo />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/pix" element={<PixLayout />} />
        <Route path="/apadrinhe" element={<ApadrinhePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
