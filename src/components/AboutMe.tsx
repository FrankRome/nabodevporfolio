import React from 'react';
import { Code, Sparkles, Users, Coffee, Cpu, Gamepad2 } from 'lucide-react';
import { SKILL_CATEGORIES, TECH_BADGES } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'code':
        return <Code className="w-6 h-6 text-[#D8B4FE] stroke-[2]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#CBD5E1] stroke-[2]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#FDA4AF] stroke-[2]" />;
      case 'coffee':
        return <Coffee className="w-6 h-6 text-[#E2E8F0] stroke-[2]" />;
      default:
        return <Gamepad2 className="w-6 h-6 text-[#D8B4FE] stroke-[2]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 bg-[#09070F] bg-gothic-mesh border-b-2 border-[#2D2342] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-block bg-[#140F21] text-[#CBD5E1] font-pixel text-xs px-3.5 py-1.5 border border-[#2D2342] shadow-goth-sm rounded-lg">
            EXPEDIENTE DEL DESARROLLADOR
          </div>

          {/* H2 Title */}
          <h2 className="font-gothic text-5xl sm:text-7xl text-[#F1F5F9] goth-title-purple tracking-wider uppercase">
            SOBRE MÍ
          </h2>

          {/* Subtitle */}
          <h3 className="font-cartoon text-lg sm:text-xl text-[#CBD5E1] font-semibold somber-card inline-block px-5 py-2 rounded-xl">
            Fran Romero – Desarrollador de Videojuegos
          </h3>
        </div>

        {/* Somber Storyboard Panel */}
        <div className="somber-card p-6 sm:p-8 rounded-2xl relative">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2D2342] pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-[#2E1850] text-[#E2E8F0] font-pixel text-[11px] px-2.5 py-1 border border-[#4C1D95] rounded shadow-goth-sm">
                CRÓNICA 01
              </span>
              <span className="font-gothic text-2xl sm:text-3xl text-white tracking-wide">
                ORIGEN & FILOSOFÍA INDIE
              </span>
            </div>
            <span className="font-pixel text-[10px] bg-[#181126] text-[#A855F7] px-2.5 py-1 border border-[#382B54] rounded shadow-goth-sm">
              NAYARIT, MX
            </span>
          </div>

          {/* Bio Content */}
          <div className="space-y-5 text-[#CBD5E1] font-sans text-sm sm:text-base leading-relaxed">
            <p className="font-cartoon text-xl sm:text-2xl font-semibold text-[#F1F5F9] leading-relaxed">
              Soy un desarrollador indie de videojuegos de Nayarit, México 🇲🇽. Me apasiona programar, diseñar juegos, componer música y dar vida a universos con arte pixel y atmósfera retro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {/* Stack 1 */}
              <div className="bg-[#110D1D] p-4 border border-[#2D2342] rounded-xl shadow-goth-sm hover:border-[#5B21B6] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💻</span>
                  <h4 className="font-gothic text-2xl text-[#E2E8F0] tracking-wide">Tecnologías</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-gray-300">
                  JavaScript, TypeScript, C#, Python
                </p>
              </div>

              {/* Stack 2 */}
              <div className="bg-[#110D1D] p-4 border border-[#2D2342] rounded-xl shadow-goth-sm hover:border-[#5B21B6] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🎮</span>
                  <h4 className="font-gothic text-2xl text-[#E2E8F0] tracking-wide">Motores de Juego</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-gray-300">
                  GameMaker Studio 2, Unity, Godot
                </p>
              </div>

              {/* Stack 3 */}
              <div className="bg-[#110D1D] p-4 border border-[#2D2342] rounded-xl shadow-goth-sm hover:border-[#5B21B6] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🎵</span>
                  <h4 className="font-gothic text-2xl text-[#E2E8F0] tracking-wide">Música y Sonido</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-gray-300">
                  Producción y composición para videojuegos
                </p>
              </div>
            </div>

            <p className="border-l-2 border-[#5B21B6] bg-[#140F21] p-3.5 border border-[#2D2342] rounded-xl text-[#E2E8F0] text-sm">
              He participado en game jams nacionales e internacionales y compartido mi experiencia en charlas sobre desarrollo indie.
            </p>
          </div>
        </div>

        {/* 4 Skill Cards - Somber Style */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-gothic text-3xl sm:text-4xl text-[#F1F5F9] tracking-wide uppercase inline-block somber-card px-6 py-2 rounded-xl">
              HABILIDADES PRINCIPALES
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((skill, index) => {
              return (
                <div
                  key={skill.id}
                  className="somber-card p-5 rounded-xl flex flex-col justify-between transform hover:-translate-y-1 transition-transform group"
                >
                  <div>
                    {/* Icon header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-[#1C152B] border border-[#382B54] rounded-lg shadow-goth-sm">
                        {getIcon(skill.iconName)}
                      </div>
                      <span className="font-pixel text-[10px] text-[#A855F7] bg-[#140F21] px-2 py-0.5 border border-[#2D2342] rounded shadow-goth-sm font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="font-gothic text-2xl sm:text-3xl text-white mb-2 tracking-wide group-hover:text-[#D8B4FE] transition-colors">
                      {skill.title}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2D2342]">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-pixel text-[9px] bg-[#140F21] px-2 py-0.5 border border-[#2D2342] rounded text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stack & Tools Inventory */}
        <div className="somber-card p-6 sm:p-8 rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#2D2342]">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#A855F7]" />
              <h3 className="font-gothic text-2xl sm:text-3xl text-white tracking-wide">
                INVENTARIO DE STACK & HERRAMIENTAS
              </h3>
            </div>
            <span className="font-pixel text-[10px] bg-[#2E1850] text-[#E2E8F0] px-3 py-1 border border-[#4C1D95] rounded shadow-goth-sm">
              TECNOLOGÍAS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5">
            {TECH_BADGES.map((badge) => (
              <div
                key={badge.name}
                className="p-3 bg-[#110D1D] border border-[#2D2342] rounded-xl shadow-goth-sm hover:border-[#5B21B6] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-sans font-medium text-xs sm:text-sm text-white truncate">{badge.name}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B21B6] shrink-0 border border-black" />
                </div>
                <span className="font-pixel text-[9px] text-[#A855F7] bg-[#181126] px-2 py-0.5 border border-[#2D2342] rounded inline-block w-fit">
                  {badge.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
