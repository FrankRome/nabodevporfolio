import React from 'react';
import { Film, Calendar, ArrowRight, Camera } from 'lucide-react';
import { MAKING_OF_DATA, PROJECTS_DATA } from '../data/portfolioData';

export const MakingOf: React.FC = () => {
  // Helper to find project by id
  const getProjectById = (projectId: number) => {
    if (projectId <= 0) return null;
    return PROJECTS_DATA.find((p) => p.id === projectId) || null;
  };

  return (
    <section
      id="making-of"
      className="py-16 md:py-24 px-4 bg-[#09070F] bg-gothic-mesh border-b-2 border-[#2D2342] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#881337] text-white font-pixel text-xs px-3.5 py-1.5 border border-black shadow-blood rounded-lg">
            <Film className="w-4 h-4" />
            <span>BITÁCORA TÉCNICA · DETRÁS DE CÁMARAS</span>
          </div>

          {/* H2 Title */}
          <h2 className="font-gothic text-5xl sm:text-7xl text-[#F1F5F9] goth-title-blood tracking-wider uppercase">
            DETRÁS DE ESCENAS
          </h2>

          {/* Description */}
          <p className="font-cartoon text-lg sm:text-2xl text-[#CBD5E1] font-medium leading-relaxed somber-card p-4 rounded-xl">
            Un vistazo al proceso creativo y técnico detrás de mis juegos, mostrando el desarrollo y la evolución de cada proyecto.
          </p>
        </div>

        {/* Making Of Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAKING_OF_DATA.map((item) => {
            const relatedProject = getProjectById(item.projectId);

            return (
              <div
                key={item.id}
                className="somber-card rounded-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Media frame */}
                <div className="relative aspect-video w-full bg-black border-b border-[#2D2342] overflow-hidden">
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Scanlines */}
                  <div className="absolute inset-0 bg-tv-scanlines pointer-events-none opacity-20"></div>

                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#181126] text-[#CBD5E1] font-pixel text-[9px] px-2.5 py-1 border border-[#382B54] shadow-goth-sm flex items-center gap-1 font-bold rounded">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>

                  {/* Camera icon badge */}
                  <div className="absolute bottom-3 right-3 bg-black/90 text-[#CBD5E1] p-1.5 border border-[#382B54] shadow-goth-sm rounded">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-gothic text-2xl sm:text-3xl text-[#F1F5F9] tracking-wide leading-snug mb-2 group-hover:text-[#D8B4FE] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Link to Related Project */}
                  {relatedProject && (
                    <div className="pt-3 border-t border-[#2D2342]">
                      <a
                        href={relatedProject.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-arcade inline-flex items-center justify-between w-full bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans font-bold uppercase text-xs px-3.5 py-2.5 border border-black rounded-lg shadow-nightshade"
                      >
                        <span>Ver Proyecto ({relatedProject.title})</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
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
