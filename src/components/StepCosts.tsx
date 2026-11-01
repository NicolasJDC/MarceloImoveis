import React from 'react';
import { Wrench, ArrowLeft, ArrowRight, DollarSign, Calendar, BookOpen, Smartphone, Table2, HelpCircle } from 'lucide-react';
import type { OnboardingFormData } from '../types/form';

interface StepCostsProps {
  formData: OnboardingFormData;
  updateData: (section: 'custos', field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepCosts: React.FC<StepCostsProps> = ({
  formData,
  updateData,
  onNext,
  onPrev,
}) => {
  const { custos } = formData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleToggleAgendaOption = (option: string) => {
    const current = custos.ondeAnotaAgenda || [];
    if (current.includes(option)) {
      updateData('custos', 'ondeAnotaAgenda', current.filter((item) => item !== option));
    } else {
      updateData('custos', 'ondeAnotaAgenda', [...current, option]);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 sm:p-10 transition-all">
      {/* Cabeçalho da Seção */}
      <div className="border-b border-gray-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-brand-gold/15 text-brand-gold-muted text-xs font-bold rounded-md font-montserrat uppercase tracking-wider">
            Seção 2 de 4
          </span>
          <span className="text-xs text-brand-text-muted font-medium">Gestão Operacional</span>
        </div>
        <h2 className="font-montserrat font-bold text-2xl text-brand-navy flex items-center gap-2.5">
          <Wrench className="w-6 h-6 text-brand-gold" />
          Custos e Operação da Casa
        </h2>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          Mapear os custos mensais e a rotina de limpeza/chaves garante que o imóvel funcione com precisão e sem sobrecarregar você.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Pergunta 2.1: Custos Fixos Médios */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              2.1
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Quais são os custos fixos médios da casa por mês?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Considere água, luz média, internet Wi-Fi, IPTU, piscineiro/jardineiro e manutenção recorrente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-brand-navy" />
                Valor Total Médio Estimado por Mês
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={custos.custosFixosMensais}
                  onChange={(e) => updateData('custos', 'custosFixosMensais', e.target.value)}
                  placeholder="Ex: 1.200,00 a 1.500,00"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Discriminação dos Gastos
              </label>
              <input
                type="text"
                value={custos.detalhesCustosFixos}
                onChange={(e) => updateData('custos', 'detalhesCustosFixos', e.target.value)}
                placeholder="Ex: Luz: 350, Piscineiro: 250, Internet: 120, IPTU: 180..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
              />
            </div>
          </div>
        </div>

        {/* Pergunta 2.2: Operação de Limpeza e Check-in/Check-out */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              2.2
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Quando entra um hóspede, quem faz a limpeza, entrega as chaves e faz a vistoria na saída?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Informe a pessoa de confiança responsável e quanto custa a diária de limpeza dela.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Quem executa (nome da diarista, caseiro, vizinho ou familiar)?
              </label>
              <input
                type="text"
                value={custos.responsavelOperacao}
                onChange={(e) => updateData('custos', 'responsavelOperacao', e.target.value)}
                placeholder="Ex: Dona Maria (diarista de confiança da família) e o caseiro entrega a chave"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Quanto custa o valor pago para essa diária de faxina?
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={custos.custoDiariaLimpeza}
                  onChange={(e) => updateData('custos', 'custoDiariaLimpeza', e.target.value)}
                  placeholder="Ex: 180,00 por limpeza completa"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pergunta 2.3: Agenda e Controle de Datas */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              2.3
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Hoje, onde fica anotada a agenda de datas reservadas para não dar conflito?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Selecione todos os canais que já foram utilizados para registrar reservas:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { id: 'caderno', label: 'Caderno Físico', icon: BookOpen },
              { id: 'planilha', label: 'Planilha (Excel/Sheets)', icon: Table2 },
              { id: 'celular', label: 'Agenda Celular / Whats', icon: Smartphone },
              { id: 'airbnb_booking', label: 'Calendário de Apps', icon: Calendar },
            ].map((opt) => {
              const Icon = opt.icon;
              const isSelected = (custos.ondeAnotaAgenda || []).includes(opt.id);

              return (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => handleToggleAgendaOption(opt.id)}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'border-brand-navy bg-brand-navy text-white shadow-md'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-brand-gold' : 'text-gray-500'}`} />
                  <span className="text-xs font-semibold">{opt.label}</span>
                </button>
              );
            })}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Outro formato ou observações sobre o controle da agenda:
            </label>
            <input
              type="text"
              value={custos.outroOndeAnotaAgenda}
              onChange={(e) => updateData('custos', 'outroOndeAnotaAgenda', e.target.value)}
              placeholder="Ex: Minha mãe anotava no calendário de parede da cozinha..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy transition-colors bg-white"
            />
          </div>
        </div>

        {/* Navegação */}
        <div className="pt-4 flex items-center justify-between border-t border-gray-100">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-brand-navy transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar: Preços</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-brand-emerald/20 hover:shadow-lg transition-all"
          >
            <span>Avançar: Estrutura Física</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </form>
    </div>
  );
};

