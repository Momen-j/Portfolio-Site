import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./Navbar";
import Hero from './Hero.tsx';
import Projects from './Projects.tsx';
import Links from './Links.tsx';
import CTA from './CTA.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='px-6 md:px-12 lg:px-20'>
    <Navbar />
    <Hero />
    <Links />
    <Projects />
    <CTA />
    </div>
  </StrictMode>,
)
