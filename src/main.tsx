import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import CTA from "./CTA.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto px-8">
      <Navbar />
      <Hero />
      <Projects />
      <CTA />
    </div>
  </StrictMode>
);
