import React from 'react';
import { ArrowRight, Sparkles, Building2, User, Phone, Mail, ShieldCheck } from 'lucide-react';
import type { OnboardingFormData } from '../types/form';

interface StepIntroProps {
  formData: OnboardingFormData;
  updateData: (section: 'identificacao', field: string, value: any) => void;
  onNext: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({
  formData,
  updateData,
  onNext,
}) => {
  const { identificacao } = formData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 sm:p-10 transition-all">
      {/* Banner de Boas-vindas */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy p-6 sm:p-8 text-white mb-8 shadow-md">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-brand-gold/15 rounded-full blur-2xl"></div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold-light text-xs font-semibold mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Diagnóstico Exclusivo • Marcelo Imóveis</span>
          </div>
          <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
            Alinhamento Estratégico para Locação de Temporada
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
            Este formulário foi estruturado para entender a fundo o histórico de faturamento, custos de operação,
            segurança e pontos fortes do seu imóvel. Com esses dados, definiremos a melhor estratégia de preços,
            anúncios profissionais e atração de hóspedes de alto padrão.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <h2 className="font-montserrat font-bold text-xl text-brand-navy flex items-center gap-2">
            <User className="w-5 h-5 text-brand-gold" />
            Dados Iniciais de Identificação
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-muted mt-1">
            Preencha seus dados para vincular as respostas e mantermos contato direto durante a gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Nome do Responsável */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-brand-text mb-2">
              Seu Nome Completo <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                value={identificacao.nomeResponsavel}
                onChange={(e) => updateData('identificacao', 'nomeResponsavel', e.target.value)}
                placeholder="Ex: João Silva"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-brand-bg/40 focus:bg-white"
              />
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-brand-text mb-2">
              WhatsApp para Contato <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                required
                value={identificacao.whatsapp}
                onChange={(e) => updateData('identificacao', 'whatsapp', e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-brand-bg/40 focus:bg-white"
              />
            </div>
          </div>

          {/* Nome / Identificador da Casa */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-brand-text mb-2">
              Nome ou Apelido do Imóvel <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                value={identificacao.nomeOuIdentificadorImovel}
                onChange={(e) => updateData('identificacao', 'nomeOuIdentificadorImovel', e.target.value)}
                placeholder="Ex: Casa da Praia, Casa com Piscina, etc."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-brand-bg/40 focus:bg-white"
              />
            </div>
          </div>

          {/* E-mail (Opcional) */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-brand-text mb-2">
              E-mail <span className="text-gray-400 text-xs font-normal">(opcional)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                value={identificacao.email || ''}
                onChange={(e) => updateData('identificacao', 'email', e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-brand-bg/40 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Garantia de Privacidade */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-brand-navy text-xs sm:text-sm">
          <ShieldCheck className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Sigilo total garantido:</strong> As informações inseridas neste formulário serão utilizadas
            exclusivamente pela equipe <strong>Marcelo Imóveis</strong> para modelar a precificação e a operação da sua casa.
          </p>
        </div>

        {/* Botão de Avanço */}
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-sm rounded-xl shadow-lg shadow-brand-emerald/25 hover:shadow-xl hover:shadow-brand-emerald/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Iniciar Questionário</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </form>
    </div>
  );
};

