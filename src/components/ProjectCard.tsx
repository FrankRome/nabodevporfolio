import React from 'react';
import { Play, Tv, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenTrailer: (url: string, title: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenTrailer }) => {
  return (
    <div className="somber-card rounded-2xl flex flex-col justify-between overflow-hidden group">
      {/* Top Media Container */}
      <div className="relative aspect-video w-full bg-black border-b border-[#2D2342] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-300"
          referrerPolicy="no-referrer"
        />

        {/* Scanlines overlay */}
        <div className="absolute inset-0 bg-tv-scanlines pointer-events-none opacity-20"></div>

        {/* Cartridge ID Badge */}
        <div className="absolute top-3 left-3 bg-[#181126] text-[#CBD5E1] font-pixel text-[9px] font-bold px-2.5 py-1 border border-[#382B54] shadow-goth-sm rounded">
          #{project.id} CARTRIDGE
        </div>

        {/* Trailer quick badge if available */}
        {project.trailerUrl && (
          <button
            onClick={() => onOpenTrailer(project.trailerUrl!, project.title)}
            className="absolute bottom-3 right-3 bg-[#881337] hover:bg-[#9F1239] text-[#F1F5F9] font-sans uppercase font-bold text-[11px] px-2.5 py-1 border border-black shadow-blood flex items-center gap-1 cursor-pointer rounded transition-colors"
          >
            <Tv className="w-3 h-3" />
            <span>TRAILER</span>
          </button>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-pixel text-[9px] bg-[#110D1D] text-[#CBD5E1] px-2 py-0.5 border border-[#2D2342] rounded shadow-goth-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-gothic text-3xl text-[#F1F5F9] tracking-wide leading-none mb-2 group-hover:text-[#D8B4FE] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons: JUGAR, TRAILER, INFO */}
        <div className="pt-3 border-t border-[#2D2342] flex flex-wrap gap-2">
          {/* JUGAR -> demoLink */}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arcade flex-1 min-w-[85px] bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-black rounded-lg shadow-nightshade flex items-center justify-center gap-1.5 text-center"
          >
            <Play className="w-3 h-3 fill-white" />
            <span>JUGAR</span>
          </a>

          {/* TRAILER -> opens modal */}
          {project.trailerUrl && (
            <button
              onClick={() => onOpenTrailer(project.trailerUrl!, project.title)}
              className="btn-arcade flex-1 min-w-[85px] bg-[#881337] hover:bg-[#9F1239] text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-black rounded-lg shadow-blood flex items-center justify-center gap-1.5 text-center cursor-pointer"
            >
              <Tv className="w-3 h-3" />
              <span>TRAILER</span>
            </button>
          )}

          {/* INFO -> projectLink */}
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arcade flex-1 min-w-[85px] bg-[#181126] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white font-sans uppercase font-bold text-xs py-2 px-3 border border-[#2D2342] rounded-lg shadow-goth-sm flex items-center justify-center gap-1.5 text-center"
          >
            <ExternalLink className="w-3 h-3" />
            <span>INFO</span>
          </a>
        </div>
      </div>
    </div>
  );
};
