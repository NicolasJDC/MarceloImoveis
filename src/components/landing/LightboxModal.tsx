import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import type { PropertyImage } from '../../data/houseData';

interface LightboxModalProps {
  images: PropertyImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in p-2 sm:p-4">
      {/* Botão Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Fechar"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Contador no Topo */}
      <div className="absolute top-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold font-mono border border-white/15">
        Foto {currentIndex + 1} de {images.length}
      </div>

      {/* Botão Foto Anterior */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-all hover:scale-110"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Conteúdo Central da Foto */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2 relative">
        <img
          src={currentImg.url}
          alt={currentImg.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl transition-all"
        />

        {/* Legenda na base */}
        <div className="mt-3 text-center max-w-2xl px-4">
          <h3 className="font-montserrat font-bold text-base sm:text-lg text-white">
            {currentImg.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 font-light">
            {currentImg.description}
          </p>
        </div>
      </div>

      {/* Botão Foto Próxima */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-all hover:scale-110"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};

