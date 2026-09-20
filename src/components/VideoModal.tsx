import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Tv } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string | null;
  title?: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoUrl,
  title,
  onClose,
}) => {
  // Extract YouTube ID
  const getEmbedUrl = (url: string | null): string | null => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      let videoId = '';
      if (parsed.hostname.includes('youtube.com')) {
        videoId = parsed.searchParams.get('v') || '';
      } else if (parsed.hostname.includes('youtu.be')) {
        videoId = parsed.pathname.slice(1);
      }
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } catch {
      return null;
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && embedUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with dark gothic atmospheric feel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Container: Somber Gothic Theater Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
            className="relative w-full max-w-3xl somber-card rounded-2xl z-10 overflow-hidden"
          >
            {/* Header / Title Bar */}
            <div className="bg-[#181126] border-b border-[#2D2342] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-[#A855F7]" />
                <span className="font-gothic text-2xl text-[#E2E8F0] tracking-wide">
                  {title ? `TRAILER: ${title.toUpperCase()}` : 'TRANSMISIÓN DE VIDEO'}
                </span>
              </div>
              <button
                id="close-video-modal-btn"
                onClick={onClose}
                className="bg-[#881337] hover:bg-[#9F1239] text-[#F1F5F9] border border-black rounded-lg px-3 py-1 font-sans uppercase font-bold text-xs transition-colors shadow-blood flex items-center gap-1 cursor-pointer"
                aria-label="Cerrar video"
              >
                <X className="w-3.5 h-3.5" />
                <span>CERRAR</span>
              </button>
            </div>

            {/* Video Iframe Container (16:9 ratio) */}
            <div className="relative w-full aspect-video bg-black p-2.5">
              <iframe
                src={embedUrl}
                title={title || 'Trailer de Videojuego'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border border-[#2D2342] rounded-lg"
              />
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#120D1E] border-t border-[#2D2342] px-4 py-2 flex items-center justify-between font-pixel text-[9px] text-[#A855F7]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse inline-block" />
                REPRODUCTOR OFICIAL
              </span>
              <span>NABODEV · INDIE GAME SHOWCASE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
