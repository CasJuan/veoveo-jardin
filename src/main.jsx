import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Objetivo } from './components/Objetivo'
import { Comunicaciones } from './components/Comunicaciones'
import { Preguntas } from './components/Preguntas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Hero/>
    <Objetivo/>
    <Comunicaciones/>
    <Preguntas/>
  </StrictMode>,
)
