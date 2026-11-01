import React from 'react';
import { ClipboardCheck, ArrowLeft, Send, Edit3, User, DollarSign, Wrench, Home, Share2, Loader2, CheckCircle2 } from 'lucide-react';
import type { OnboardingFormData, StepKey } from '../types/form';

interface StepReviewProps {
  formData: OnboardingFormData;
  onGoToStep: (step: StepKey) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  onPrev: () => void;
}

export const StepReview: React.FC<StepReviewProps> = ({
  formData,
  onGoToStep,
  onSubmit,
  isSubmitting,
  onPrev,
}) => {
  const { identificacao, precos, custos, estrutura, divulgacao } = formData;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 sm:p-10 transition-all">
      {/* Cabeçalho */}
      <div className="border-b border-gray-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-brand-emerald/15 text-brand-emerald-dark text-xs font-bold rounded-md font-montserrat uppercase tracking-wider">
            Etapa Final
          </span>
          <span className="text-xs text-brand-text-muted font-medium">Conferência dos Dados</span>
        </div>
        <h2 className="font-montserrat font-bold text-2xl text-brand-navy flex items-center gap-2.5">
          <ClipboardCheck className="w-6 h-6 text-brand-gold" />
          Revisão do Diagnóstico do Imóvel
        </h2>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          Confira abaixo o resumo das informações preenchidas. Se precisar ajustar algum detalhe, clique em "Editar".
        </p>
      </div>

      <div className="space-y-6">
        {/* Bloco 0: Identificação */}
        <div className="p-5 rounded-2xl bg-brand-bg/70 border border-gray-100">
          <div className="flex items-center justify-between mb-3 border-b border-gray-200/60 pb-2">
            <h3 className="font-montserrat font-bold text-sm text-brand-navy flex items-center gap-2">
              <User className="w-4 h-4 text-brand-navy" />
              Identificação do Responsável
            </h3>
            <button
              onClick={() => onGoToStep('intro')}
              className="text-xs font-semibold text-brand-navy hover:text-brand-navy-light flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> Editar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div><span className="text-gray-500 block">Responsável:</span> <strong className="text-gray-800">{identificacao.nomeResponsavel || 'Não informado'}</strong></div>
            <div><span className="text-gray-500 block">WhatsApp:</span> <strong className="text-gray-800">{identificacao.whatsapp || 'Não informado'}</strong></div>
            <div><span className="text-gray-500 block">Imóvel:</span> <strong className="text-gray-800">{identificacao.nomeOuIdentificadorImovel || 'Não informado'}</strong></div>
          </div>
        </div>

        {/* Bloco 1: Preços */}
        <div className="p-5 rounded-2xl bg-brand-bg/70 border border-gray-100">
          <div className="flex items-center justify-between mb-3 border-b border-gray-200/60 pb-2">
            <h3 className="font-montserrat font-bold text-sm text-brand-navy flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-brand-gold" />
              1. Histórico de Preços e Faturamento
            </h3>
            <button
              onClick={() => onGoToStep('precos')}
              className="text-xs font-semibold text-brand-navy hover:text-brand-navy-light flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> Editar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div><span className="text-gray-500 block">Diária Semana / Fim de Semana:</span> <span className="font-medium">{precos.valorDiariaSemana || '-'} / {precos.valorDiariaFimDeSemana || '-'}</span></div>
            <div><span className="text-gray-500 block">Pacote Réveillon / Carnaval:</span> <span className="font-medium">{precos.pacoteReveillon || '-'} / {precos.pacoteCarnaval || '-'}</span></div>
            <div><span className="text-gray-500 block">Ocupação Alta / Baixa:</span> <span className="font-medium">{precos.ocupacaoAltaTemporada || '-'} | {precos.ocupacaoBaixaTemporada || '-'}</span></div>
            <div><span className="text-gray-500 block">Taxa de Limpeza / Caução:</span> <span className="font-medium">Limpeza: {precos.cobraTaxaLimpeza === 'sim' ? `R$ ${precos.valorTaxaLimpeza}` : precos.cobraTaxaLimpeza || '-'} | Caução: {precos.pedeCaucao || '-'}</span></div>
          </div>
        </div>

        {/* Bloco 2: Custos */}
        <div className="p-5 rounded-2xl bg-brand-bg/70 border border-gray-100">
          <div className="flex items-center justify-between mb-3 border-b border-gray-200/60 pb-2">
            <h3 className="font-montserrat font-bold text-sm text-brand-navy flex items-center gap-2">
              <Wrench className="w-4 h-4 text-brand-navy" />
              2. Custos e Operação da Casa
            </h3>
            <button
              onClick={() => onGoToStep('custos')}
              className="text-xs font-semibold text-brand-navy hover:text-brand-navy-light flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> Editar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div><span className="text-gray-500 block">Custos Fixos Mensais:</span> <span className="font-medium">{custos.custosFixosMensais || 'Não informado'}</span></div>
            <div><span className="text-gray-500 block">Responsável Limpeza & Vistoria:</span> <span className="font-medium">{custos.responsavelOperacao || 'Não informado'}</span></div>
            <div><span className="text-gray-500 block">Valor pago diária de limpeza:</span> <span className="font-medium">{custos.custoDiariaLimpeza || 'Não informado'}</span></div>
            <div><span className="text-gray-500 block">Controle da Agenda:</span> <span className="font-medium">{(custos.ondeAnotaAgenda || []).join(', ') || 'Não especificado'}</span></div>
          </div>
        </div>

        {/* Bloco 3: Estrutura */}
        <div className="p-5 rounded-2xl bg-brand-bg/70 border border-gray-100">
          <div className="flex items-center justify-between mb-3 border-b border-gray-200/60 pb-2">
            <h3 className="font-montserrat font-bold text-sm text-brand-navy flex items-center gap-2">
              <Home className="w-4 h-4 text-brand-navy" />
              3. Estrutura Física e Segurança
            </h3>
            <button
              onClick={() => onGoToStep('estrutura')}
              className="text-xs font-semibold text-brand-navy hover:text-brand-navy-light flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> Editar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div><span className="text-gray-500 block">Capacidade / Quartos / Banheiros / Vagas:</span> <span className="font-medium">{estrutura.capacidadeMaxima || '-'} | {estrutura.qtdQuartos || '-'} qts ({estrutura.qtdSuites || '0'} suíte) | {estrutura.qtdBanheiros || '-'} banh | {estrutura.vagasGaragem || '-'}</span></div>
            <div><span className="text-gray-500 block">Distância Praia / Comércios:</span> <span className="font-medium">{estrutura.distanciaPraia || '-'} | {estrutura.comerciosProximos || '-'}</span></div>
            <div className="sm:col-span-2"><span className="text-gray-500 block">Itens de Lazer Selecionados:</span> <span className="font-medium text-brand-navy">{(estrutura.itensLazer || []).join(', ') || 'Nenhum selecionado'}</span></div>
            <div className="sm:col-span-2"><span className="text-gray-500 block">Itens de Segurança:</span> <span className="font-medium text-brand-navy">{(estrutura.itensSeguranca || []).join(', ') || 'Nenhum selecionado'}</span></div>
            <div><span className="text-gray-500 block">Regras (Pets / Som / Roupa de Cama):</span> <span className="font-medium">Pets: {estrutura.aceitaPets || '-'} | Som: {estrutura.horarioLimiteSom || '-'} | Roupa de cama: {estrutura.roupaDeCama || '-'}</span></div>
          </div>
        </div>

        {/* Bloco 4: Divulgação */}
        <div className="p-5 rounded-2xl bg-brand-bg/70 border border-gray-100">
          <div className="flex items-center justify-between mb-3 border-b border-gray-200/60 pb-2">
            <h3 className="font-montserrat font-bold text-sm text-brand-navy flex items-center gap-2">
              <Share2 className="w-4 h-4 text-brand-navy" />
              4. Clientes Antigos e Divulgação Atual
            </h3>
            <button
              onClick={() => onGoToStep('divulgacao')}
              className="text-xs font-semibold text-brand-navy hover:text-brand-navy-light flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" /> Editar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div><span className="text-gray-500 block">Histórico de Contatos Antigos:</span> <span className="font-medium">{divulgacao.ondeEstaoContatos || '-'} ({divulgacao.consegueAcessoAparelho || '-'})</span></div>
            <div><span className="text-gray-500 block">Cadastros em Plataformas:</span> <span className="font-medium">{divulgacao.jaCadastradaPlataformas || '-'}</span></div>
            <div><span className="text-gray-500 block">Instagram & Verba Turbinar:</span> <span className="font-medium">{divulgacao.instagramPerfil || '-'} ({divulgacao.verbaTurbinar || '-'})</span></div>
            <div><span className="text-gray-500 block">Status de Fotos & Vídeos:</span> <span className="font-medium">{divulgacao.statusFotosVideos || '-'}</span></div>
          </div>
        </div>
      </div>

      {/* Aviso de Confirmação */}
      <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
          <strong>Tudo pronto para o envio:</strong> Ao clicar no botão abaixo, suas respostas serão gravadas com segurança no banco de dados e você poderá notificar a equipe <strong>Marcelo Imóveis</strong> instantaneamente via WhatsApp.
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="pt-6 flex items-center justify-between border-t border-gray-100">
        <button
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar: Divulgação</span>
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-brand-emerald/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Gravando no Banco de Dados...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Confirmar e Enviar Diagnóstico</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

