import React from 'react';
import {
  ArrowUp,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Gamepad2,
  Play,
  Heart,
  Coffee,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07050C] border-t-2 border-[#2D2342] text-white relative overflow-hidden">
      {/* Somber Ribbon Bar */}
      <div className="bg-[#100C1B] text-[#CBD5E1] py-2.5 px-4 border-b border-[#2D2342] text-center font-pixel text-[11px] tracking-wider flex items-center justify-center gap-3">
        <span>🦇</span>
        <span>TRANSMISIÓN SOMBRÍA CONTINUA · NABODEV INDIE GAMES</span>
        <span>💀</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Branding & Tagline */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <div className="inline-block bg-[#161024] text-[#F1F5F9] font-gothic text-4xl sm:text-5xl px-5 py-1.5 border-2 border-[#382B54] rounded-xl shadow-spectral font-bold">
              NABODEV
            </div>

            <p className="font-cartoon text-lg text-[#A855F7] font-semibold">
              Desarrollador de Videojuegos Indie
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-sm mx-auto md:mx-0">
              Creando videojuegos retro 2D con atmósfera gótica sombría, mecánicas arcade de los 90s, pixel art detallado y composiciones de audio originales.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-4 text-center md:text-left space-y-2">
            <span className="font-gothic text-2xl text-[#E2E8F0] block mb-2 tracking-wide">
              SECCIONES:
            </span>
            <div className="flex flex-col gap-2 font-sans font-medium text-xs sm:text-sm text-[#CBD5E1]">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-[#A855F7] transition-colors cursor-pointer"
              >
                ➔ Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left hover:text-[#A855F7] transition-colors cursor-pointer"
              >
                ➔ Proyectos
              </button>
              <button
                onClick={() => scrollToSection('awards')}
                className="text-left hover:text-[#A855F7] transition-colors cursor-pointer"
              >
                ➔ Premios
              </button>
              <button
                onClick={() => scrollToSection('making-of')}
                className="text-left hover:text-[#A855F7] transition-colors cursor-pointer"
              >
                ➔ Detrás de Escenas
              </button>
              <button
                onClick={() => scrollToSection('steam-wishlist')}
                className="text-left hover:text-[#A855F7] transition-colors cursor-pointer"
              >
                ➔ Knock Time (GBA)
              </button>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-3">
            <span className="font-gothic text-2xl text-[#E2E8F0] tracking-wide">
              REDES SOCIALES & PERFILES:
            </span>

            <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
              {/* itch.io */}
              <a
                href="https://nabo-games.itch.io/"
                target="_blank"
                rel="noreferrer"
                className="btn-arcade bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-black rounded-lg shadow-nightshade flex items-center justify-center gap-2 text-center"
              >
                <Gamepad2 size={15} />
                <span>itch.io</span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@nabodev"
                target="_blank"
                rel="noreferrer"
                className="btn-arcade bg-[#881337] hover:bg-[#9F1239] text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-black rounded-lg shadow-blood flex items-center justify-center gap-2 text-center"
              >
                <Youtube size={15} />
                <span>YouTube</span>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/nabodrop"
                target="_blank"
                rel="noreferrer"
                className="btn-arcade bg-[#181126] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-[#2D2342] rounded-lg shadow-goth-sm flex items-center justify-center gap-2 text-center"
              >
                <Twitter size={15} />
                <span>Twitter/X</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nabodrop/"
                target="_blank"
                rel="noreferrer"
                className="btn-arcade bg-[#181126] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-[#2D2342] rounded-lg shadow-goth-sm flex items-center justify-center gap-2 text-center"
              >
                <Instagram size={15} />
                <span>Instagram</span>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/dev?id=6277823320637847447"
                target="_blank"
                rel="noreferrer"
                className="btn-arcade bg-[#2E1850] hover:bg-[#3D1F6A] text-[#E2E8F0] font-sans uppercase font-bold text-xs py-2 px-3 border border-[#4C1D95] rounded-lg shadow-goth-sm flex items-center justify-center gap-2 text-center"
              >
                <Play size={13} className="fill-current" />
                <span>Google Play</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fran-rome-016109172/"
                target="_blank"
                rel="noreferrer"
                className="btn-arcade bg-[#181126] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-[#2D2342] rounded-lg shadow-goth-sm flex items-center justify-center gap-2 text-center"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Studio Emblem + Back to Top Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#2D2342]">
          {/* Emblem */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#140F21] border border-[#382B54] rounded-xl p-2 text-center shadow-goth-sm flex flex-col justify-center items-center select-none">
              <span className="font-gothic text-2xl font-bold text-[#A855F7] leading-none">
                ND
              </span>
              <span className="font-pixel text-[7px] text-gray-400 mt-0.5">
                STUDIO
              </span>
            </div>

            {/* Closing text */}
            <div>
              <p className="font-cartoon text-sm font-semibold text-white flex items-center gap-1.5">
                <span>Desarrollado con dedicación</span>
                <Heart className="w-3.5 h-3.5 text-[#881337] fill-[#881337] inline" />
                <span>y café</span>
                <Coffee className="w-3.5 h-3.5 text-amber-600 inline" />
              </p>
              <p className="font-pixel text-[9px] text-[#A855F7] mt-0.5">
                NAYARIT, MÉXICO 🇲🇽 · GLOBAL GAME JAMMER
              </p>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="btn-arcade bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans uppercase font-bold text-xs tracking-wider px-6 py-2.5 border border-black rounded-xl shadow-nightshade flex items-center gap-2 cursor-pointer"
            title="Volver arriba"
          >
            <ArrowUp size={16} className="stroke-[2.2]" />
            <span>VOLVER AL INICIO</span>
          </button>
        </div>

        {/* Copyright text */}
        <div className="pt-4 border-t border-[#2D2342] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
          <p className="font-sans text-[11px] text-gray-500">
            © {currentYear} Francisco Romero Murillo (Fran Nabo) — Nabodev. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 font-pixel text-[9px] text-[#A855F7]">
            <span>INDIE GAME DEV PORTFOLIO</span>
            <span>●</span>
            <span>SOMBER GOTHIC CARTOON</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
