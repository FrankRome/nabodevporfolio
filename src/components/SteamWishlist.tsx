import React from 'react';
import { ExternalLink, Play, Trophy, Skull } from 'lucide-react';
import { KNOCK_TIME_DATA } from '../data/portfolioData';

export const SteamWishlist: React.FC = () => {
  return (
    <section
      id="steam-wishlist"
      className="py-16 md:py-24 px-4 bg-[#0B0813] bg-gothic-stripes border-b-2 border-[#2D2342] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          {/* Top Badge */}
          <div className="inline-block bg-[#1B122C] text-[#CBD5E1] font-pixel text-xs px-4 py-1.5 border border-[#382B54] shadow-goth-sm rounded-lg">
            <span className="flex items-center gap-2">
              <Skull className="w-3.5 h-3.5 text-[#A855F7]" />
              {KNOCK_TIME_DATA.badge}
            </span>
          </div>

          {/* H2 Title */}
          <h2 className="font-gothic text-5xl sm:text-7xl text-[#F1F5F9] goth-title-purple tracking-wider uppercase">
            {KNOCK_TIME_DATA.title}
          </h2>

          {/* Short Description */}
          <p className="font-cartoon text-lg sm:text-2xl text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed somber-card p-4 rounded-xl">
            {KNOCK_TIME_DATA.shortDescription}
          </p>
        </div>

        {/* Somber Gothic GBA Cartridge Showcase Card */}
        <div className="somber-card p-6 sm:p-8 rounded-2xl relative">
          {/* Status Indicator Tag */}
          <div className="absolute -top-3.5 right-4 sm:right-8 bg-[#881337] text-[#E2E8F0] font-pixel text-xs px-3.5 py-1.5 border border-black shadow-blood flex items-center gap-2 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse inline-block" />
            <span>{KNOCK_TIME_DATA.status}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Game Artwork with GBA badge */}
            <div className="md:col-span-6 relative">
              <div className="relative border-2 border-[#2D2342] rounded-xl shadow-goth overflow-hidden bg-black group">
                <img
                  src={KNOCK_TIME_DATA.imageUrl}
                  alt={KNOCK_TIME_DATA.title}
                  className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Scanlines overlay */}
                <div className="absolute inset-0 bg-tv-scanlines pointer-events-none opacity-20"></div>

                {/* Image Badge: GBA */}
                <div className="absolute top-3 left-3 bg-[#181126] text-[#E2E8F0] font-pixel text-xs font-bold px-2.5 py-1 border border-[#382B54] shadow-goth-sm rounded">
                  {KNOCK_TIME_DATA.imageBadge}
                </div>
              </div>
            </div>

            {/* Right: Card Details & Links */}
            <div className="md:col-span-6 space-y-5">
              <div className="border-b border-[#2D2342] pb-3">
                <div className="flex items-center gap-2 text-[#A855F7] font-pixel text-[11px] mb-1">
                  <Trophy className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>GAMEBOY ADVANCE SHOWCASE</span>
                </div>
                <h3 className="font-gothic text-4xl sm:text-5xl text-[#F1F5F9] tracking-wide">
                  {KNOCK_TIME_DATA.title}
                </h3>
              </div>

              {/* Long Description */}
              <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {KNOCK_TIME_DATA.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-[#181126] text-[#CBD5E1] font-pixel text-[10px] px-2.5 py-1 border border-[#2D2342] shadow-goth-sm rounded">
                  BEAT 'EM UP
                </span>
                <span className="bg-[#181126] text-[#A855F7] font-pixel text-[10px] px-2.5 py-1 border border-[#2D2342] shadow-goth-sm rounded">
                  GBA ROM / RETRO
                </span>
                <span className="bg-[#181126] text-[#94A3B8] font-pixel text-[10px] px-2.5 py-1 border border-[#2D2342] shadow-goth-sm rounded">
                  LATINOAMÉRICA 🇻🇪
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                {/* Probar la Demo */}
                <a
                  href={KNOCK_TIME_DATA.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arcade flex-1 min-w-[190px] bg-[#4C1D95] hover:bg-[#5B21B6] text-white font-sans uppercase font-bold text-xs sm:text-sm py-3 px-4 border-2 border-black shadow-nightshade flex items-center justify-center gap-2 text-center rounded-xl"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Probar la Demo</span>
                </a>

                {/* Ver en itch.io */}
                <a
                  href={KNOCK_TIME_DATA.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arcade flex-1 min-w-[190px] bg-[#181226] hover:bg-[#251A3D] text-[#CBD5E1] hover:text-white font-sans uppercase font-bold text-xs sm:text-sm py-3 px-4 border-2 border-[#382B54] shadow-goth flex items-center justify-center gap-2 text-center rounded-xl"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver en itch.io</span>
                </a>
              </div>

              {/* Footer Note */}
              <div className="pt-2 text-center sm:text-left">
                <span className="font-cartoon text-sm font-semibold text-[#CBD5E1] bg-[#140F21] px-3.5 py-1.5 border border-[#2D2342] rounded-lg inline-block">
                  {KNOCK_TIME_DATA.footerNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
