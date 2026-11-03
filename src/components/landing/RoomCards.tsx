import React from 'react';
import { Bed, Snowflake, Baby, Shield, CheckCircle2, MessageCircle } from 'lucide-react';
import { roomDetails, houseHighlights } from '../../data/houseData';

const iconMap: Record<string, React.ReactNode> = {
  'Suíte Master Casal': <Bed className="w-5 h-5 text-brand-gold" />,
  'Quarto Família com Berço': <Baby className="w-5 h-5 text-brand-emerald" />,
  'Quarto Amigos & Crianças': <Shield className="w-5 h-5 text-brand-navy" />,
};

export const RoomCards: React.FC = () => {
  const whatsappUrl = `https://wa.me/${houseHighlights.whatsappNumber}?text=${encodeURIComponent(
    'Olá Marcelo! Gostaria de saber mais sobre os quartos e a capacidade da casa!'
  )}`;

  return (
    <section id="quartos" className="py-16 lg:py-24 bg-gradient-to-b from-white to-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-navy border border-blue-200/80 text-xs font-semibold mb-4">
            <Bed className="w-3.5 h-3.5 text-brand-gold" />
            <span>{houseHighlights.quartos} Quartos • Suíte com Ar-Condicionado • Berço para Bebê</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
            Quartos Aconchegantes para Todo Mundo
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
            Cada quarto foi pensado para garantir conforto e privacidade. Todos com ar-condicionado Split,
            ventilação natural e camas box de mola ensacada.
          </p>
        </div>

        {/* Cards dos Quartos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {roomDetails.map((room, index) => (
            <div
              key={room.nome}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Imagem do Quarto */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={room.imagem}
                  alt={room.nome}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    {iconMap[room.nome] || <Bed className="w-5 h-5 text-brand-navy" />}
                  </div>
                  <span className="text-white font-montserrat font-bold text-sm drop-shadow-md">
                    {room.nome}
                  </span>
                </div>
                {/* Badge do número */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-navy/80 backdrop-blur-sm text-white text-xs font-bold flex items-center justify-center border border-white/20">
                  {index + 1}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">{room.descricao}</p>

                {/* Lista de Itens */}
                <ul className="space-y-2">
                  {room.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Destaque Ar-Condicionado */}
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-50/80 rounded-xl border border-blue-100">
                  <Snowflake className="w-4 h-4 text-brand-navy shrink-0" />
                  <span className="text-[11px] font-semibold text-brand-navy">
                    Ar-Condicionado Split — Climatização individual
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para WhatsApp */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-sm rounded-2xl shadow-xl shadow-brand-emerald/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Perguntar Sobre os Quartos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

