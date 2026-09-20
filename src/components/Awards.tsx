import React from 'react';
import { Trophy, Calendar, Building2 } from 'lucide-react';
import { AWARDS_DATA } from '../data/portfolioData';

export const Awards: React.FC = () => {
  return (
    <section
      id="awards"
      className="py-16 md:py-24 px-4 bg-[#0B0813] bg-gothic-stripes-purple border-b-2 border-[#2D2342] relative overflow-hidden text-white"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1B122C] text-[#CBD5E1] font-pixel text-xs px-3.5 py-1.5 border border-[#382B54] shadow-goth-sm rounded-lg">
            <Trophy className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>TROFEOS Y RECONOCIMIENTOS DE GAME JAMS</span>
          </div>

          {/* H2 Title */}
          <h2 className="font-gothic text-5xl sm:text-7xl text-[#F1F5F9] goth-title-purple tracking-wider uppercase">
            PREMIOS Y RECONOCIMIENTOS
          </h2>

          {/* Description */}
          <p className="font-cartoon text-lg sm:text-2xl text-[#CBD5E1] font-medium leading-relaxed somber-card p-4 rounded-xl">
            Destacados de game jams, competencias y distinciones por diseño de mecánicas y prototipado.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AWARDS_DATA.map((award, index) => {
            return (
              <div
                key={index}
                className="somber-card rounded-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Photo / Diploma Container */}
                {award.imageUrl && (
                  <div className="relative aspect-video w-full bg-black border-b border-[#2D2342] overflow-hidden">
                    <img
                      src={award.imageUrl}
                      alt={award.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Scanlines effect on photo */}
                    <div className="absolute inset-0 bg-tv-scanlines pointer-events-none opacity-20"></div>

                    {/* Year badge */}
                    <div className="absolute top-3 left-3 bg-[#181126] text-[#E2E8F0] font-pixel text-[10px] px-2.5 py-1 border border-[#382B54] shadow-goth-sm flex items-center gap-1 rounded">
                      <Calendar className="w-3 h-3" />
                      <span>{award.year}</span>
                    </div>

                    {/* Award Honor Tag */}
                    <div className="absolute bottom-3 right-3 bg-[#881337] text-white font-pixel text-[9px] px-2.5 py-1 border border-black shadow-blood font-bold tracking-wider uppercase rounded">
                      ★ 1er LUGAR ★
                    </div>
                  </div>
                )}

                {/* Award Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Organization Tag */}
                    <div className="flex items-center gap-1.5 text-xs font-pixel text-[#A855F7] mb-2">
                      <Building2 className="w-3 h-3 text-[#A855F7]" />
                      <span className="truncate">{award.organization}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-gothic text-3xl text-[#F1F5F9] tracking-wide leading-tight mb-2 group-hover:text-[#D8B4FE] transition-colors">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Related Project Badge */}
                  {award.projectTitle && (
                    <div className="pt-3 border-t border-[#2D2342] flex items-center justify-between">
                      <span className="font-pixel text-[9px] text-gray-400">PROYECTO:</span>
                      <span className="font-sans font-bold text-xs text-[#E2E8F0] bg-[#181126] px-2.5 py-1 border border-[#2D2342] shadow-goth-sm rounded uppercase tracking-wider">
                        {award.projectTitle}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
