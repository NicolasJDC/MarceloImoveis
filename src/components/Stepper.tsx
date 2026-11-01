import React from 'react';
import { DollarSign, Wrench, Home, Share2, Check, User, ClipboardCheck } from 'lucide-react';
import type { StepKey } from '../types/form';

interface StepperProps {
  currentStep: StepKey;
  onSelectStep: (step: StepKey) => void;
  completedSteps: Set<StepKey>;
}

export const Stepper: React.FC<StepperProps> = ({
  currentStep,
  onSelectStep,
  completedSteps,
}) => {
  const steps: { id: StepKey; title: string; subtitle: string; icon: React.ElementType }[] = [
    { id: 'intro', title: 'Início', subtitle: 'Identificação', icon: User },
    { id: 'precos', title: '1. Preços', subtitle: 'Histórico & Diárias', icon: DollarSign },
    { id: 'custos', title: '2. Operação', subtitle: 'Custos & Limpeza', icon: Wrench },
    { id: 'estrutura', title: '3. Estrutura', subtitle: 'Quartos & Lazer', icon: Home },
    { id: 'divulgacao', title: '4. Divulgação', subtitle: 'Contatos & Fotos', icon: Share2 },
    { id: 'revisao', title: 'Revisão', subtitle: 'Conferir & Enviar', icon: ClipboardCheck },
  ];

  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl p-3 sm:p-5 shadow-card mb-8">
      {/* Visualização Mobile: Resumo do passo atual */}
      <div className="flex md:hidden items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm shadow-sm">
            {currentIndex + 1}/{steps.length}
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">
              Passo {currentIndex + 1} de {steps.length}
            </span>
            <h3 className="font-montserrat font-bold text-base text-brand-navy">
              {steps[currentIndex].title}: {steps[currentIndex].subtitle}
            </h3>
          </div>
        </div>
      </div>

      {/* Visualização Desktop: Stepper completo e clicável */}
      <nav aria-label="Progresso do formulário" className="hidden md:block">
        <ol className="flex items-center justify-between relative">
          {steps.map((step, idx) => {
            const isCurrent = step.id === currentStep;
            const isCompleted = completedSteps.has(step.id);
            const Icon = step.icon;

            return (
              <li key={step.id} className="flex-1 relative">
                {/* Linha conectora entre etapas */}
                {idx !== 0 && (
                  <div
                    className={`absolute top-5 -left-1/2 w-full h-[2px] -z-0 transition-colors duration-300 ${
                      idx <= currentIndex ? 'bg-brand-emerald' : 'bg-gray-200'
                    }`}
                  />
                )}

                <button
                  type="button"
                  onClick={() => onSelectStep(step.id)}
                  className={`group relative flex flex-col items-center w-full focus:outline-none transition-all duration-200 ${
                    isCurrent ? 'scale-105' : 'hover:opacity-90'
                  }`}
                >
                  {/* Círculo do Ícone */}
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 z-10 ${
                      isCurrent
                        ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/30 ring-4 ring-brand-navy/10'
                        : isCompleted
                        ? 'bg-brand-emerald text-white shadow-md shadow-brand-emerald/20'
                        : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                    }`}
                  >
                    {isCompleted && !isCurrent ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>

                  {/* Rótulos do Passo */}
                  <div className="mt-2 text-center">
                    <span
                      className={`block text-xs font-montserrat font-bold transition-colors ${
                        isCurrent
                          ? 'text-brand-navy'
                          : isCompleted
                          ? 'text-brand-emerald-dark'
                          : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="block text-[11px] text-gray-500 font-medium">
                      {step.subtitle}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

