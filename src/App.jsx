import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from '@/components'
import { NotFound, Home, Apartments, About } from '@/pages'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="apartments/:id" element={<Apartments />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
