import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from "./Navbar";
import Hero from './Hero.tsx';
import Projects from './Projects.tsx';
import Links from './Links.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Links />
    <App />
    <Projects />
  </StrictMode>,
)
