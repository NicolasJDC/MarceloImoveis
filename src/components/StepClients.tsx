import React from 'react';
import { Share2, ArrowLeft, ArrowRight, MessageCircle, Instagram, Image, Globe, CheckCircle } from 'lucide-react';
import type { OnboardingFormData } from '../types/form';

interface StepClientsProps {
  formData: OnboardingFormData;
  updateData: (section: 'divulgacao', field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepClients: React.FC<StepClientsProps> = ({
  formData,
  updateData,
  onNext,
  onPrev,
}) => {
  const { divulgacao } = formData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 sm:p-10 transition-all">
      {/* Cabeçalho da Seção */}
      <div className="border-b border-gray-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-brand-gold/15 text-brand-gold-muted text-xs font-bold rounded-md font-montserrat uppercase tracking-wider">
            Seção 4 de 4
          </span>
          <span className="text-xs text-brand-text-muted font-medium">Estratégia Comercial</span>
        </div>
        <h2 className="font-montserrat font-bold text-2xl text-brand-navy flex items-center gap-2.5">
          <Share2 className="w-6 h-6 text-brand-gold" />
          Clientes Antigos e Divulgação Atual
        </h2>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          Reativar clientes satisfeitos do passado e organizar materiais visuais é a forma mais rápida de gerar reservas imediatas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Pergunta 4.1: Contatos dos Clientes Anteriores */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              4.1
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Os contatos de quem alugou a casa nos últimos 2 anos estão no seu WhatsApp ou no da sua mãe?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Conseguimos acessar esse aparelho ou histórico para extrair a lista de hóspedes que já conhecem e confiam na casa?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-brand-emerald" />
                Onde estão guardados os contatos?
              </label>
              <input
                type="text"
                value={divulgacao.ondeEstaoContatos}
                onChange={(e) => updateData('divulgacao', 'ondeEstaoContatos', e.target.value)}
                placeholder="Ex: No celular antigo da minha mãe e no meu WhatsApp..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Consegue pegar o aparelho / backup de conversas?
              </label>
              <select
                value={divulgacao.consegueAcessoAparelho}
                onChange={(e) => updateData('divulgacao', 'consegueAcessoAparelho', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
              >
                <option value="">Selecione...</option>
                <option value="sim">Sim, tenho o aparelho / histórico disponível</option>
                <option value="precisa_ajuda">Preciso de ajuda técnica para extrair</option>
                <option value="nao">Não temos mais acesso a esse aparelho</option>
              </select>
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              value={divulgacao.obsContatos}
              onChange={(e) => updateData('divulgacao', 'obsContatos', e.target.value)}
              placeholder="Observações sobre esses clientes (ex: temos cerca de 20 a 30 contatos frequentes)..."
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
            />
          </div>
        </div>

        {/* Pergunta 4.2: Cadastros Prévios em Plataformas */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              4.2
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                A casa já esteve cadastrada no Airbnb, Booking ou TemporadaLivre?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Se sim, existem avaliações positivas ou nota média que possamos resgatar como prova social?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            {[
              { id: 'sim', label: 'Sim, anúncio ativo com avaliações' },
              { id: 'apenas_no_passado', label: 'Já esteve no passado, mas pausou' },
              { id: 'nao', label: 'Nunca foi cadastrada em plataformas' },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                  divulgacao.jaCadastradaPlataformas === opt.id
                    ? 'border-brand-navy bg-brand-navy/5 text-brand-navy font-semibold ring-1 ring-brand-navy/20'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="jaCadastradaPlataformas"
                  value={opt.id}
                  checked={divulgacao.jaCadastradaPlataformas === opt.id}
                  onChange={(e) => updateData('divulgacao', 'jaCadastradaPlataformas', e.target.value)}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-navy" />
              Links ou detalhes dos anúncios antigos/atuais:
            </label>
            <input
              type="text"
              value={divulgacao.detalhesPlataformas}
              onChange={(e) => updateData('divulgacao', 'detalhesPlataformas', e.target.value)}
              placeholder="Ex: Tinha nota 4.9 no Airbnb com 12 avaliações no nome da minha mãe..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
            />
          </div>
        </div>

        {/* Pergunta 4.3: Instagram e Turbinar */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              4.3
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Qual é o @ do Instagram onde você fez os impulsionamentos no botão "turbinar"?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Quanto você costumava colocar de verba e qual foi o retorno percebido?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                @ Perfil do Instagram da Casa ou Pessoal
              </label>
              <input
                type="text"
                value={divulgacao.instagramPerfil}
                onChange={(e) => updateData('divulgacao', 'instagramPerfil', e.target.value)}
                placeholder="@exemplo.imovel ou @seu_perfil"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Verba investida no botão "Turbinar"
              </label>
              <input
                type="text"
                value={divulgacao.verbaTurbinar}
                onChange={(e) => updateData('divulgacao', 'verbaTurbinar', e.target.value)}
                placeholder="Ex: R$ 50 a R$ 100 por semana / mês"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              value={divulgacao.obsInstagram}
              onChange={(e) => updateData('divulgacao', 'obsInstagram', e.target.value)}
              placeholder="Resultado das campanhas (ex: chegaram mensagens no direct, fechei 1 reserva)..."
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
            />
          </div>
        </div>

        {/* Pergunta 4.4: Fotos e Vídeos do Imóvel */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              4.4
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Você já tem uma pasta com fotos e vídeos bons da casa?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Especialmente da área da piscina, quartos e fachada, ou vamos precisar produzir um ensaio novo?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            {[
              { id: 'ja_tem_pasta', label: 'Já tenho pasta completa com fotos boas' },
              { id: 'tem_poucas', label: 'Tenho algumas fotos, mas amadoras' },
              { id: 'precisa_tirar_novas', label: 'Precisamos tirar fotos novas profissionais' },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                  divulgacao.statusFotosVideos === opt.id
                    ? 'border-brand-navy bg-brand-navy/5 text-brand-navy font-semibold ring-1 ring-brand-navy/20'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="statusFotosVideos"
                  value={opt.id}
                  checked={divulgacao.statusFotosVideos === opt.id}
                  onChange={(e) => updateData('divulgacao', 'statusFotosVideos', e.target.value)}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5 text-brand-navy" />
              Link do Google Drive / Fotos ou observações:
            </label>
            <input
              type="text"
              value={divulgacao.linkOuObsFotos}
              onChange={(e) => updateData('divulgacao', 'linkOuObsFotos', e.target.value)}
              placeholder="Cole aqui o link do Drive / iCloud ou descreva como estão as fotos..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
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
            <span>Voltar: Estrutura</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-brand-emerald/20 hover:shadow-lg transition-all"
          >
            <span>Revisar Respostas</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </form>
    </div>
  );
};

