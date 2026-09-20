import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SteamWishlist } from './components/SteamWishlist';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { MakingOf } from './components/MakingOf';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09070F] bg-gothic-mesh text-[#E2E8F0] antialiased selection:bg-[#5B21B6] selection:text-white font-sans">
      {/* Gothic Dark Marquee Banner */}
      <div className="bg-[#120D1E] text-[#CBD5E1] border-b-2 border-[#2D2342] py-2 px-3 text-center font-pixel text-[10px] sm:text-xs overflow-hidden select-none flex items-center justify-center gap-2 sm:gap-4 shadow-goth-sm">
        <span className="flex items-center gap-1.5 text-[#E2E8F0]">
          <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse inline-block shadow-[0_0_8px_#A855F7]"></span>
          <span>TRANSMISIÓN SOMBRÍA · GOTHIC ARCADE</span>
        </span>
        <span className="text-[#6D28D9] hidden sm:inline">✦</span>
        <span className="hidden sm:inline font-bold text-[#E2E8F0] tracking-wider">
          NABODEV · DESARROLLADOR DE VIDEOJUEGOS INDIE
        </span>
        <span className="text-[#6D28D9] hidden sm:inline">✦</span>
        <span className="text-[#94A3B8] flex items-center gap-1">
          <span>CRIPTA DE DESARROLLO</span>
          <span>🦇</span>
        </span>
      </div>

      {/* Navbar with Somber Gothic styling */}
      <Navbar />

      {/* Single-Page Landing Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section (id="hero") */}
        <Hero />

        {/* 2. Knock Time Showcase (id="steam-wishlist") */}
        <SteamWishlist />

        {/* 3. Sobre Mí & Habilidades (id="about") */}
        <AboutMe />

        {/* 4. Proyectos & Trailers (id="projects") */}
        <Projects />

        {/* 5. Premios y Reconocimientos (id="awards") */}
        <Awards />

        {/* 6. Detrás de Escenas / Making Of (id="making-of") */}
        <MakingOf />
      </main>

      {/* 7. Footer / Redes Sociales & Back to Top */}
      <Footer />
    </div>
  );
}
