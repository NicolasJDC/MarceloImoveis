import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Sparkles, Moon, Sun, Users, Bed, Car, Eye, CheckCircle2, MapPin } from 'lucide-react';
import { houseHighlights } from '../../data/houseData';

export const Hero: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'night' | 'day' | 'living'>('night');

  const photos = {
    night: {
      url: '/assets/762334d5-88fa-45bd-a00a-d05d714bf5c8.JPG',
      badge: '🏊 Piscina Iluminada à Noite (LED Azul & Cascata)',
      desc: 'Momentos inesquecíveis com iluminação cenográfica e cascata.',
    },
    day: {
      url: '/assets/d3b5402e-1508-4278-ac77-5645dd492010.JPG',
      badge: '☀️ Piscina Durante o Dia com Gradil de Proteção',
      desc: 'Segurança com vidro temperado, sol o dia todo e espreguiçadeiras.',
    },
    living: {
      url: '/assets/6c854b59-b3c0-47da-a64e-d64f774be5a6.JPG',
      badge: '🛋️ Sala em Porcelanato com Smart TV',
      desc: 'Amplo espaço de convivência integrado com sofás aconchegantes.',
    },
  };

  const whatsappMessage = encodeURIComponent(
    'Olá Marcelo! Gostaria de consultar datas e valores para a Casa de Temporada no Guarujá (Praia de Pernambuco) para até 20 pessoas!'
  );

  return (
    <section id="sobre" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-brand-bg">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Coluna da Esquerda: Textos & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-navy border border-blue-200/80 text-xs font-semibold shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Praia de Pernambuco, Guarujá • Locação Direta com Proprietário</span>
            </div>

            {/* Título Principal */}
            <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-brand-navy leading-tight">
              Casa de Temporada no Guarujá com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-emerald">
                Piscina e Cascata
              </span>
              , para até 20 pessoas, perto da praia
            </h1>

            {/* Subtítulo */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Desfrute de dias tranquilos no Balneário Praia de Pernambuco, a apenas <strong>500 metros do mar</strong> (6 a 8 min a pé).
              Casa completa com piscina privativa iluminada em LED, ar-condicionado Split em todos os quartos,
              berço para bebê, varanda gourmet, muros altos, portão eletrônico e monitoramento por câmeras para total privacidade.
            </p>

            {/* Pílulas de Destaques */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-xs">
                <Users className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] font-semibold text-gray-700">Até 20 pessoas</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-xs">
                <MapPin className="w-4 h-4 text-brand-navy shrink-0" />
                <span className="text-[11px] font-semibold text-gray-700">500m da Praia</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-emerald shrink-0" />
                <span className="text-[11px] font-semibold text-gray-700">100% com Ar Split</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100 shadow-xs">
                <Car className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] font-semibold text-gray-700">3 Vagas Cobertas</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={`https://wa.me/${houseHighlights.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-brand-emerald/30 hover:shadow-2xl hover:shadow-brand-emerald/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar Datas no WhatsApp</span>
              </a>

              <a
                href="#galeria"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-50 text-brand-navy font-montserrat font-bold text-xs sm:text-sm rounded-2xl border border-gray-200/90 shadow-sm hover:border-brand-navy/30 transition-all"
              >
                <Eye className="w-4 h-4 text-brand-gold" />
                <span>Ver Todas as 21 Fotos</span>
              </a>
            </div>

            {/* Garantia */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Locação direta com o Marcelo
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-navy" /> Imóvel 100% verificado
              </span>
            </div>
          </div>

          {/* Coluna da Direita: Showcase Fotográfico */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 group">
              {/* Imagem Principal */}
              <img
                src={photos[activePhoto].url}
                alt={photos[activePhoto].badge}
                className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Botões de Alternância */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1 rounded-xl border border-white/20">
                <button
                  onClick={() => setActivePhoto('night')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${activePhoto === 'night'
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'text-gray-200 hover:text-white'
                    }`}
                >
                  <Moon className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Noite</span>
                </button>
                <button
                  onClick={() => setActivePhoto('day')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${activePhoto === 'day'
                      ? 'bg-brand-emerald text-white shadow-md'
                      : 'text-gray-200 hover:text-white'
                    }`}
                >
                  <Sun className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Dia</span>
                </button>
                <button
                  onClick={() => setActivePhoto('living')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${activePhoto === 'living'
                      ? 'bg-white text-brand-navy shadow-md'
                      : 'text-gray-200 hover:text-white'
                    }`}
                >
                  <span>Sala</span>
                </button>
              </div>

              {/* Legenda */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30 text-white mb-1.5">
                  {photos[activePhoto].badge}
                </span>
                <p className="text-xs text-gray-200 font-light leading-relaxed">
                  {photos[activePhoto].desc}
                </p>
              </div>
            </div>

            {/* Badge Flutuante */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-subtle">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-brand-emerald" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-extrabold text-brand-navy font-montserrat">
                  Privacidade Total
                </span>
                <span className="block text-[11px] text-gray-500 font-medium">
                  Muros altos e portão fechado
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
