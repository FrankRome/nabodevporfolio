import React from 'react';
import { ArrowDown, Briefcase, User, Moon, Gamepad2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 px-4 bg-[#09070F] bg-gothic-mesh border-b-2 border-[#2D2342]"
    >
      {/* Subtle Somber Ambient Orbs */}
      <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-[#4C1D95]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#881337]/08 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Developer Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Top Status Tag */}
            <div className="inline-flex items-center gap-2.5 bg-[#140F21] text-[#CBD5E1] px-4 py-1.5 border border-[#2D2342] shadow-goth-sm rounded-lg">
              <Moon className="w-3.5 h-3.5 text-[#A855F7]" />
              <span className="font-pixel text-[10px] font-semibold tracking-wider uppercase">
                INDIE GAME DEV · TRANSMISIÓN SOMBRÍA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
            </div>

            {/* Main Gothic Heading Card */}
            <div className="relative inline-block w-full sm:w-auto">
              <div className="somber-card px-6 py-4 sm:px-8 sm:py-6 rounded-2xl relative">
                <h1 className="font-gothic text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wider text-[#F1F5F9] goth-title-spectral uppercase">
                  NABODEV
                </h1>
              </div>
            </div>

            {/* Subtitle Badge */}
            <div className="inline-block bg-[#2E1850] text-[#E2E8F0] px-4 py-2 border border-[#4C1D95] shadow-goth rounded-lg">
              <span className="font-pixel text-xs sm:text-sm tracking-wider font-bold uppercase">
                DESARROLLADOR DE VIDEOJUEGOS INDIE
              </span>
            </div>

            {/* Dark Gothic Manifesto Card */}
            <div className="relative somber-card max-w-xl text-left p-6 sm:p-7 rounded-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2D2342]">
                <span className="font-pixel text-[10px] text-[#A855F7] tracking-wider uppercase">
                  FILOSOFÍA DE JUEGO
                </span>
                <span className="font-pixel text-[10px] text-gray-400">
                  EST. NAYARIT, MX
                </span>
              </div>
              <p className="font-cartoon text-xl sm:text-2xl text-[#E2E8F0] font-medium leading-relaxed">
                “Programador indie que transforma ideas raras en juegos aún más raros con estética gótica y esencia arcade de los 90s.”
              </p>
              <div className="mt-4 pt-3 border-t border-[#2D2342] flex flex-wrap gap-2 text-xs font-pixel">
                <span className="bg-[#181126] text-[#CBD5E1] px-3 py-1 border border-[#2D2342] shadow-goth-sm rounded">🇲🇽 Nayarit, MX</span>
                <span className="bg-[#181126] text-[#CBD5E1] px-3 py-1 border border-[#2D2342] shadow-goth-sm rounded">🎮 GameMaker & Godot</span>
                <span className="bg-[#181126] text-[#E11D48] px-3 py-1 border border-[#2D2342] shadow-goth-sm rounded">🎵 Chiptune & OST</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-projects-cta"
                onClick={() => scrollTo('projects')}
                className="btn-arcade bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans uppercase font-bold text-sm sm:text-base px-7 py-3.5 border-2 border-black rounded-xl shadow-nightshade flex items-center gap-2.5 cursor-pointer"
              >
                <Briefcase className="w-5 h-5 stroke-[2.2]" />
                <span>VER MI TRABAJO</span>
              </button>

              <button
                id="hero-about-cta"
                onClick={() => scrollTo('about')}
                className="btn-arcade bg-[#181226] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white font-sans uppercase font-bold text-sm sm:text-base px-7 py-3.5 border-2 border-[#382B54] rounded-xl shadow-goth flex items-center gap-2.5 cursor-pointer"
              >
                <User className="w-5 h-5 stroke-[2.2]" />
                <span>SOBRE MÍ</span>
              </button>
            </div>
          </div>

          {/* Right Column: Somber Gothic Display Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Gothic Frame Card */}
              <div className="somber-card p-4 sm:p-5 rounded-2xl relative">
                {/* Upper Frame Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2D2342]">
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-[#A855F7]" />
                    <span className="font-pixel text-[10px] text-[#A855F7] tracking-wider uppercase">
                      CRIPTA DE PERFIL
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#9F1239] animate-pulse"></span>
                    <span className="font-pixel text-[9px] text-gray-400">DEV</span>
                  </div>
                </div>

                {/* Profile Photo Display */}
                <div className="relative border-2 border-black rounded-xl overflow-hidden bg-black aspect-square">
                  <img
                    src="https://devuego.lat/fotos/fran-romero-nabodev.jpg"
                    alt="Fran Romero - Nabodev"
                    className="w-full h-full object-cover object-center grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-50 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Scanlines overlay */}
                  <div className="absolute inset-0 bg-tv-scanlines pointer-events-none opacity-20"></div>

                  {/* Player 1 Tag */}
                  <div className="absolute bottom-2 left-2 bg-black/90 text-[#CBD5E1] font-pixel text-[10px] px-2.5 py-1 border border-[#382B54] shadow-goth-sm rounded">
                    P1: FRAN (NABODEV)
                  </div>
                </div>

                {/* Lower Information Bar */}
                <div className="mt-3 bg-[#181126] p-3 border border-[#2D2342] rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-gothic text-2xl sm:text-3xl text-[#F1F5F9] block tracking-wide leading-none">
                      FRAN ROMERO
                    </span>
                    <span className="font-pixel text-[9px] text-gray-400 block mt-1">
                      GAME DESIGNER & CODER
                    </span>
                  </div>

                  {/* System Status Indicators */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#5B21B6] border border-black shadow-[0_0_8px_#5B21B6]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#9F1239] border border-black shadow-[0_0_8px_#9F1239]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 text-center flex flex-col items-center justify-center">
          <button
            onClick={() => scrollTo('steam-wishlist')}
            className="group inline-flex flex-col items-center gap-2 text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
            id="scroll-to-knock-time"
          >
            <span className="font-pixel text-[10px] tracking-wider bg-[#140F21] text-[#CBD5E1] px-4 py-1.5 border border-[#2D2342] shadow-goth-sm group-hover:border-[#5B21B6] transition-colors font-bold uppercase rounded-lg">
              DESCENDER: KNOCK TIME (GBA) ▼
            </span>
            <div className="p-2 bg-[#181226] border border-[#2D2342] shadow-goth-sm rounded-full group-hover:translate-y-1 transition-transform text-[#A855F7]">
              <ArrowDown className="w-4 h-4 stroke-[2.2]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
