import React from 'react';
import { Home, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentStepIndex: number;
  totalSteps: number;
  onOpenAdmin: () => void;
  savedLocally: boolean;
  isFirebaseActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentStepIndex,
  totalSteps,
  onOpenAdmin,
  savedLocally,
  isFirebaseActive,
}) => {
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Marca */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-md shadow-brand-navy/20 relative group">
              <Home className="w-6 h-6 text-brand-gold transition-transform group-hover:scale-110" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-emerald rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-montserrat font-extrabold text-lg sm:text-xl tracking-tight text-brand-navy">
                  MARCELO<span className="text-brand-gold">.</span>IMÓVEIS
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-brand-navy border border-blue-200">
                  Diagnóstico Imobiliário
                </span>
              </div>
              <p className="text-xs text-brand-text-muted font-medium hidden sm:block">
                Onboarding e Estratégia de Locação por Temporada
              </p>
            </div>
          </div>

          {/* Status & Ações */}
          <div className="flex items-center space-x-3">
            {/* Indicador de Salvamento Automático */}
            <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200/70">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{savedLocally ? 'Progresso salvo no dispositivo' : 'Salvando...'}</span>
            </div>

            {/* Status da Conexão Firebase */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium"
                 title={isFirebaseActive ? 'Conectado à nuvem Firebase Firestore' : 'Modo Demonstração / LocalStorage (Configure o Firebase no .env)'}>
              <span className={`w-2 h-2 rounded-full ${isFirebaseActive ? 'bg-brand-emerald animate-pulse' : 'bg-brand-gold'}`}></span>
              <span className="text-gray-600">
                {isFirebaseActive ? 'Firebase Nuvem' : 'Armazenamento Seguro'}
              </span>
            </div>

            {/* Botão de Respostas / Admin */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-navy bg-blue-50 hover:bg-blue-100/80 rounded-lg border border-blue-200/80 transition-colors"
              title="Abrir painel de respostas salvas"
            >
              <Database className="w-3.5 h-3.5 text-brand-navy" />
              <span className="hidden sm:inline">Ver Respostas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Progresso Superior */}
      <div className="w-full bg-gray-100 h-1.5">
        <div
          className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-emerald h-1.5 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};

