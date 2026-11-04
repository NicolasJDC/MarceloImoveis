import React, { useState } from 'react';
import { Home, MessageCircle, Menu, X } from 'lucide-react';
import { houseHighlights } from '../../data/houseData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${houseHighlights.whatsappNumber}?text=${encodeURIComponent(
    'Olá Marcelo! Gostaria de consultar datas disponíveis e valores para a Casa de Temporada no Guarujá (Praia de Pernambuco)!'
  )}`;

  const navLinks = [
    { label: 'Sobre a Casa', href: '#sobre' },
    { label: 'Fotos (21)', href: '#galeria' },
    { label: 'Quartos', href: '#quartos' },
    { label: 'Comodidades', href: '#lazer' },
    { label: 'Privacidade', href: '#seguranca' },
    { label: 'Reservar', href: '#valores' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Marca */}
          <a href="#" className="flex items-center space-x-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-md shadow-brand-navy/20 relative transition-transform group-hover:scale-105">
              <Home className="w-6 h-6 text-brand-gold" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-emerald rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-montserrat font-extrabold text-base sm:text-lg tracking-tight text-brand-navy">
                  MARCELO GUARUJÁ<span className="text-brand-gold">.</span>TEMPORADA
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-brand-emerald-dark border border-emerald-200">
                  Direto com Proprietário
                </span>
              </div>
              <p className="text-[11px] text-brand-text-muted font-medium hidden sm:block">
                Praia de Pernambuco, Guarujá • A 500m do mar
              </p>
            </div>
          </a>

          {/* Links Desktop */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-gray-700 hover:text-brand-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-xs rounded-xl shadow-md shadow-brand-emerald/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar no WhatsApp</span>
            </a>
          </div>

          {/* Menu Mobile */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-emerald text-white rounded-xl shadow-sm"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-navy rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-brand-bg hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-emerald text-white font-montserrat font-bold text-sm rounded-xl shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp com Marcelo</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
