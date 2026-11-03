import React from 'react';
import { MessageCircle } from 'lucide-react';
import { houseHighlights } from '../../data/houseData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${houseHighlights.whatsappNumber}?text=${encodeURIComponent(
    'Olá Marcelo! Vi a casa de temporada com piscina privativa e gostaria de mais informações!'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#1DA851] rounded-full flex items-center justify-center shadow-2xl shadow-black/30 hover:shadow-black/40 transition-all transform hover:scale-110 active:scale-95 group"
      aria-label="Falar no WhatsApp"
      title="Fale com Marcelo no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current" />

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full animate-whatsapp-pulse bg-[#25D366]/40 pointer-events-none" />

      {/* Tooltip no Hover (desktop) */}
      <span className="hidden sm:flex absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
        Fale com Marcelo
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </span>
    </a>
  );
};

