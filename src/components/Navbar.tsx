import React, { useState } from 'react';
import { Gamepad2, Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateToSection?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 bg-[#0D0917]/95 backdrop-blur-sm border-b-2 border-[#2D2342] shadow-goth">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Gothic Logo: Gamepad + Bat / Zap + NABODEV */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="group flex items-center gap-2"
          id="logo-link"
        >
          <div className="relative">
            <div className="bg-[#181226] text-[#F1F5F9] font-gothic text-3xl sm:text-4xl px-4 py-1 border-2 border-[#3E3159] shadow-spectral flex items-center gap-2 transition-all group-hover:border-[#7C3AED] group-hover:shadow-nightshade">
              <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] text-[#E2E8F0]" />
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#A855F7] fill-[#A855F7] stroke-[1.5]" />
              <span className="tracking-wide uppercase font-bold text-white">
                NABODEV
              </span>
            </div>
            {/* Somber Badge */}
            <div className="absolute -top-2.5 -right-3 bg-[#881337] text-[9px] font-pixel text-[#E2E8F0] px-2 py-0.5 border border-black shadow-blood flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse"></span>
              <span>DEV</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links (Somber Gothic) */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-2.5 font-sans text-xs lg:text-sm tracking-wider uppercase font-semibold">
          <button
            onClick={() => handleNavClick('about')}
            className="px-3.5 py-1.5 bg-[#161024] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white border border-[#2D2342] shadow-goth-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="px-3.5 py-1.5 bg-[#251642] hover:bg-[#351F5C] text-[#E2E8F0] hover:text-white border border-[#4C1D95] shadow-goth-sm hover:-translate-y-0.5 transition-all cursor-pointer font-bold"
          >
            Proyectos
          </button>
          <button
            onClick={() => handleNavClick('awards')}
            className="px-3.5 py-1.5 bg-[#161024] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white border border-[#2D2342] shadow-goth-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Premios
          </button>
          <button
            onClick={() => handleNavClick('making-of')}
            className="px-3.5 py-1.5 bg-[#161024] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white border border-[#2D2342] shadow-goth-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Making Of
          </button>
          <button
            onClick={() => handleNavClick('steam-wishlist')}
            className="px-3.5 py-1.5 bg-[#4C1D95] text-white hover:bg-[#5B21B6] border border-[#6D28D9] shadow-goth-sm hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Knock Time</span>
            <span className="text-[9px] font-pixel bg-[#161024] text-[#A855F7] px-1.5 py-0.5 border border-[#382B54]">
              GBA
            </span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Somber Crimson Push Button */}
          <button
            onClick={() => handleNavClick('projects')}
            id="navbar-cta-btn"
            className="hidden sm:flex items-center gap-2 bg-[#881337] hover:bg-[#9F1239] text-[#F1F5F9] font-sans font-bold text-xs lg:text-sm tracking-wider uppercase px-4 py-2 border-2 border-black shadow-blood btn-arcade cursor-pointer"
          >
            <Gamepad2 size={17} className="stroke-[2.2]" />
            <span>JUGAR DEMOS</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 bg-[#1A122B] text-[#E2E8F0] border-2 border-[#3E3159] shadow-goth-sm active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={20} className="stroke-[2.5]" /> : <Menu size={20} className="stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#120D1E] border-2 border-[#2D2342] shadow-goth-lg space-y-2.5 font-sans uppercase font-bold text-sm animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 border-b border-[#2D2342]">
            <span className="text-xs font-pixel text-[#A855F7]">NAVEGACIÓN</span>
            <span className="text-[10px] bg-[#881337] text-white px-2 py-0.5 border border-black font-pixel">MENU</span>
          </div>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-3 py-2 bg-[#1B142A] hover:bg-[#2B1D42] text-[#CBD5E1] border border-[#2D2342] shadow-goth-sm flex items-center justify-between"
          >
            <span>Sobre Mí</span>
            <span className="text-xs font-pixel text-[#A855F7]">01</span>
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="w-full text-left px-3 py-2 bg-[#2E1850] hover:bg-[#3C1E6A] text-white border border-[#4C1D95] shadow-goth-sm flex items-center justify-between"
          >
            <span>Proyectos</span>
            <span className="text-xs font-pixel text-[#CBD5E1]">02</span>
          </button>
          <button
            onClick={() => handleNavClick('awards')}
            className="w-full text-left px-3 py-2 bg-[#1B142A] hover:bg-[#2B1D42] text-[#CBD5E1] border border-[#2D2342] shadow-goth-sm flex items-center justify-between"
          >
            <span>Premios</span>
            <span className="text-xs font-pixel text-[#A855F7]">03</span>
          </button>
          <button
            onClick={() => handleNavClick('making-of')}
            className="w-full text-left px-3 py-2 bg-[#1B142A] hover:bg-[#2B1D42] text-[#CBD5E1] border border-[#2D2342] shadow-goth-sm flex items-center justify-between"
          >
            <span>Making Of</span>
            <span className="text-xs font-pixel text-[#A855F7]">04</span>
          </button>
          <button
            onClick={() => handleNavClick('steam-wishlist')}
            className="w-full text-left px-3 py-2 bg-[#4C1D95] text-white hover:bg-[#5B21B6] border border-[#6D28D9] shadow-goth-sm flex items-center justify-between"
          >
            <span>Knock Time (GBA)</span>
            <span className="text-xs font-pixel text-[#CBD5E1]">05</span>
          </button>
        </div>
      )}
    </header>
  );
};
