import React, { useState } from 'react';
import { Sparkles, Gamepad2, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';

export const Projects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  const handleOpenTrailer = (url: string, title: string) => {
    setActiveVideo({ url, title });
  };

  const handleCloseTrailer = () => {
    setActiveVideo(null);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 bg-[#09070F] bg-gothic-mesh border-b-2 border-[#2D2342] relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#140F21] text-[#CBD5E1] font-pixel text-xs px-3.5 py-1.5 border border-[#2D2342] shadow-goth-sm rounded-lg">
            <Gamepad2 className="w-4 h-4 text-[#A855F7]" />
            <span>CATÁLOGO DE VIDEOJUEGOS INDIE</span>
          </div>

          {/* H2 Title */}
          <h2 className="font-gothic text-5xl sm:text-7xl text-[#F1F5F9] goth-title-spectral tracking-wider uppercase">
            MIS PROYECTOS
          </h2>

          {/* Description */}
          <p className="font-cartoon text-lg sm:text-2xl text-[#CBD5E1] font-medium leading-relaxed somber-card p-4 rounded-xl">
            Son simples, divertidos y están hechos con dedicación y atmósfera arcade retro 🦇
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenTrailer={handleOpenTrailer}
            />
          ))}
        </div>

        {/* Final CTA Button: Ver mas proyectos */}
        <div className="text-center pt-6">
          <a
            href="https://nabo-games.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arcade inline-flex items-center gap-3 bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans uppercase font-bold text-sm sm:text-base px-8 py-3.5 border-2 border-black rounded-xl shadow-nightshade"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Ver más proyectos en itch.io</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>
      </div>

      {/* Video Trailer Modal */}
      <VideoModal
        isOpen={!!activeVideo}
        videoUrl={activeVideo?.url || null}
        title={activeVideo?.title}
        onClose={handleCloseTrailer}
      />
    </section>
  );
};
