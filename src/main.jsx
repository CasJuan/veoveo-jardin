import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Objetivo } from './components/Objetivo'
import { Comunicaciones } from './components/Comunicaciones'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Hero/>
    <div className='bg-[#FFD757] '>
    <Objetivo/>
    <Comunicaciones/>
    </div>
  </StrictMode>,
)
