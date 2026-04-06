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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Hero/>
    <Objetivo/>
    <Comunicaciones/>
    <Preguntas/>
    <Inscripcion/>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
