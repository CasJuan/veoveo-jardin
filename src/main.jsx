import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Objetivo } from './components/Objetivo'
import { Comunicaciones } from './components/Comunicaciones'
import { Preguntas } from './components/Preguntas'
import { Inscripcion } from './components/Inscripcion'
import { Footer } from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import veoveo from './img/veoveo.svg'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Hero />
      <div className="relative">
        <div className="fixed top-0 left-0 h-screen w-full -z-10 pointer-events-none overflow-hidden">
          <img
            src={veoveo}
            alt="Veo-Veo"
            className="absolute top-[10vh] left-0 opacity-5 w-[300px]"
          />
        </div>
        <Objetivo />
        <Comunicaciones />
        <Preguntas />
        <Inscripcion />
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
