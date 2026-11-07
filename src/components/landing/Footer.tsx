import React from 'react';
import { Home, MessageCircle, MapPin, Phone } from 'lucide-react';
import { houseHighlights } from '../../data/houseData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${houseHighlights.whatsappNumber}?text=${encodeURIComponent(
    'Olá Marcelo! Gostaria de consultar datas e valores para a Casa de Temporada no Guarujá (Praia de Pernambuco)!'
  )}`;

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Sobre a Casa', href: '#sobre' },
    { label: 'Fotos (21)', href: '#galeria' },
    { label: 'Quartos', href: '#quartos' },
    { label: 'Comodidades', href: '#lazer' },
    { label: 'Privacidade', href: '#seguranca' },
    { label: 'Consultar Valores', href: '#valores' },
  ];

  return (
    <footer className="bg-brand-navy-dark text-white">
      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Coluna 1 — Marca */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                <Home className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="font-montserrat font-extrabold text-base tracking-tight">
                  MARCELO<span className="text-brand-gold">.</span>HOSPEDAGENS
                </span>
                <p className="text-[10px] text-blue-300/60 font-medium">
                  Locação Direta com o Proprietário
                </p>
              </div>
            </a>
            <p className="text-sm text-blue-200/60 leading-relaxed max-w-xs">
              Casa de temporada exclusiva com piscina privativa e cascata na Praia de Pernambuco, Guarujá/SP.
              A apenas 500m da praia para famílias e grupos de até 20 pessoas.
            </p>
          </div>

          {/* Coluna 2 — Links Rápidos */}
          <div>
            <h4 className="font-montserrat font-bold text-sm text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Localização */}
          <div>
            <h4 className="font-montserrat font-bold text-sm text-white mb-4">
              Localização
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-100 font-semibold leading-tight">
                    {houseHighlights.endereco}
                  </p>
                  <p className="text-xs text-blue-200/70 mt-0.5">
                    {houseHighlights.bairro}, {houseHighlights.cidade}
                  </p>
                  <p className="text-[11px] text-blue-200/50">
                    CEP {houseHighlights.cep}
                  </p>
                </div>
              </div>
              <p className="text-xs text-emerald-300/90 leading-relaxed font-medium pl-6">
                🌊 {houseHighlights.distanciaPraia}
              </p>
              <p className="text-[11px] text-blue-200/60 leading-relaxed pl-6">
                🛍️ {houseHighlights.comercios}
              </p>
            </div>
          </div>

          {/* Coluna 4 — Contato */}
          <div>
            <h4 className="font-montserrat font-bold text-sm text-white mb-4">
              Fale Conosco
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-sm text-blue-200/70">{houseHighlights.whatsappDisplay}</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white text-xs font-bold rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-200/40 text-center sm:text-left">
            © {currentYear} Marcelo Hospedagens — Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-blue-200/30">
            Fotos reais do imóvel na Praia de Pernambuco, Guarujá.
          </p>
        </div>
      </div>
    </footer>
  );
};

