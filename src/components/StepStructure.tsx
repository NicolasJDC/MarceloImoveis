import React from 'react';
import { Home, ArrowLeft, ArrowRight, Bed, Shield, Waves, MapPin, CheckSquare, Clock } from 'lucide-react';
import type { OnboardingFormData } from '../types/form';

interface StepStructureProps {
  formData: OnboardingFormData;
  updateData: (section: 'estrutura', field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepStructure: React.FC<StepStructureProps> = ({
  formData,
  updateData,
  onNext,
  onPrev,
}) => {
  const { estrutura } = formData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleToggleLazer = (item: string) => {
    const current = estrutura.itensLazer || [];
    if (current.includes(item)) {
      updateData('estrutura', 'itensLazer', current.filter((i) => i !== item));
    } else {
      updateData('estrutura', 'itensLazer', [...current, item]);
    }
  };

  const handleToggleSeguranca = (item: string) => {
    const current = estrutura.itensSeguranca || [];
    if (current.includes(item)) {
      updateData('estrutura', 'itensSeguranca', current.filter((i) => i !== item));
    } else {
      updateData('estrutura', 'itensSeguranca', [...current, item]);
    }
  };

  const lazerPresets = [
    'Piscina Privativa',
    'Churrasqueira Coberta',
    'Ar-Condicionado nos Quartos',
    'Wi-Fi Rápido (Home Office)',
    'Smart TV com Streaming',
    'Cozinha Completa com Utensílios',
    'Área Gourmet Integrada',
    'Espreguiçadeiras / Guarda-Sol',
    'Rede de Descanso',
    'Ducha Externa pós-praia',
    'Mesa de Jogos / Bilhar',
    'Jardim / Gramado Amplo',
  ];

  const segurancaPresets = [
    'Muros Altos e Fechados',
    'Cerca Elétrica',
    'Câmeras de Segurança Externas',
    'Portão Eletrônico Fechado',
    'Vizinhos Fixos e Conhecidos',
    'Trancas e Fechaduras Reforçadas',
    'Iluminação Externa Automática',
    'Alarme Monitorado',
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 sm:p-10 transition-all">
      {/* Cabeçalho da Seção */}
      <div className="border-b border-gray-100 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-brand-gold/15 text-brand-gold-muted text-xs font-bold rounded-md font-montserrat uppercase tracking-wider">
            Seção 3 de 4
          </span>
          <span className="text-xs text-brand-text-muted font-medium">Estrutura & Regras</span>
        </div>
        <h2 className="font-montserrat font-bold text-2xl text-brand-navy flex items-center gap-2.5">
          <Home className="w-6 h-6 text-brand-gold" />
          Estrutura Física e Segurança do Imóvel
        </h2>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          Detalhes sobre capacidade, acomodações, segurança e comodidades para encantar os hóspedes e evitar dúvidas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Pergunta 3.1: Capacidade e Camas */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              3.1
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Qual é a capacidade máxima de pessoas confortáveis?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Quantas camas de casal, solteiro e colchões avulsos a casa possui?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Capacidade Máx. (Pessoas)
              </label>
              <input
                type="text"
                value={estrutura.capacidadeMaxima}
                onChange={(e) => updateData('estrutura', 'capacidadeMaxima', e.target.value)}
                placeholder="Ex: 12 pessoas"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Camas de Casal
              </label>
              <input
                type="text"
                value={estrutura.camasCasal}
                onChange={(e) => updateData('estrutura', 'camasCasal', e.target.value)}
                placeholder="Ex: 3 camas"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Camas de Solteiro / Beliches
              </label>
              <input
                type="text"
                value={estrutura.camasSolteiro}
                onChange={(e) => updateData('estrutura', 'camasSolteiro', e.target.value)}
                placeholder="Ex: 2 beliches (4 solteiro)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Colchões Avulsos
              </label>
              <input
                type="text"
                value={estrutura.colchoesAvulsos}
                onChange={(e) => updateData('estrutura', 'colchoesAvulsos', e.target.value)}
                placeholder="Ex: 2 avulsos de solteiro"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              value={estrutura.obsAcomodacoes}
              onChange={(e) => updateData('estrutura', 'obsAcomodacoes', e.target.value)}
              placeholder="Observações de distribuição das camas por quarto (ex: Quarto 1 tem 1 casal + 1 solteiro)..."
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
            />
          </div>
        </div>

        {/* Pergunta 3.2: Quartos, Suítes, Banheiros e Garagem */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              3.2
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Quantos quartos, suítes, banheiros e vagas de garagem a casa tem?
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Total de Quartos
              </label>
              <input
                type="text"
                value={estrutura.qtdQuartos}
                onChange={(e) => updateData('estrutura', 'qtdQuartos', e.target.value)}
                placeholder="Ex: 3 quartos"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Desses, quantas Suítes?
              </label>
              <input
                type="text"
                value={estrutura.qtdSuites}
                onChange={(e) => updateData('estrutura', 'qtdSuites', e.target.value)}
                placeholder="Ex: 1 suíte"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Total de Banheiros / Lavabos
              </label>
              <input
                type="text"
                value={estrutura.qtdBanheiros}
                onChange={(e) => updateData('estrutura', 'qtdBanheiros', e.target.value)}
                placeholder="Ex: 2 banheiros + 1 lavabo externo"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Vagas de Garagem
              </label>
              <input
                type="text"
                value={estrutura.vagasGaragem}
                onChange={(e) => updateData('estrutura', 'vagasGaragem', e.target.value)}
                placeholder="Ex: 3 carros (portão fechado)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>
          </div>
        </div>

        {/* Pergunta 3.3: Lazer e Conforto */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              3.3
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Quais são os principais itens de lazer e conforto?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Clique nos itens que a casa possui para destacar na descrição e nos anúncios:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
            {lazerPresets.map((item) => {
              const isSelected = (estrutura.itensLazer || []).includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => handleToggleLazer(item)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-all ${
                    isSelected
                      ? 'border-brand-navy bg-brand-navy text-white font-semibold shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Waves className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand-gold' : 'text-gray-400'}`} />
                  <span className="truncate">{item}</span>
                </button>
              );
            })}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Detalhes adicionais do lazer (tamanho da piscina, marcas dos eletrodomésticos, etc.):
            </label>
            <input
              type="text"
              value={estrutura.detalhesLazer}
              onChange={(e) => updateData('estrutura', 'detalhesLazer', e.target.value)}
              placeholder="Ex: Piscina 6x3m com prainha para crianças, churrasqueira de alvenaria com grelha inox..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
            />
          </div>
        </div>

        {/* Pergunta 3.4: Segurança do Imóvel */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              3.4
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                O que a casa tem de segurança para deixar o cliente tranquilo?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Segurança é o fator nº 1 de decisão para famílias de classe média/alta em casas de praia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
            {segurancaPresets.map((item) => {
              const isSelected = (estrutura.itensSeguranca || []).includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => handleToggleSeguranca(item)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-all ${
                    isSelected
                      ? 'border-brand-navy bg-brand-navy text-white font-semibold shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Shield className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand-gold' : 'text-gray-400'}`} />
                  <span className="truncate">{item}</span>
                </button>
              );
            })}
          </div>

          <div>
            <input
              type="text"
              value={estrutura.detalhesSeguranca}
              onChange={(e) => updateData('estrutura', 'detalhesSeguranca', e.target.value)}
              placeholder="Outros detalhes de segurança para tranquilizar o hóspede..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
            />
          </div>
        </div>

        {/* Pergunta 3.5: Distância da Praia e Comércios */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              3.5
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Qual a distância exata até a praia e o que tem de comércio bem perto?
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                Distância até a praia (a pé / de carro)
              </label>
              <input
                type="text"
                value={estrutura.distanciaPraia}
                onChange={(e) => updateData('estrutura', 'distanciaPraia', e.target.value)}
                placeholder="Ex: 400 metros (5 min a pé) ou 2 min de carro"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Comércio próximo (mercado, padaria, farmácia)
              </label>
              <input
                type="text"
                value={estrutura.comerciosProximos}
                onChange={(e) => updateData('estrutura', 'comerciosProximos', e.target.value)}
                placeholder="Ex: Padaria a 2 quadras, mercadinho a 300m, farmácia..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
              />
            </div>
          </div>
        </div>

        {/* Pergunta 3.6: Regras Principais */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              3.6
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Quais são as regras principais da casa?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Animais de estimação, som alto e fornecimento de roupa de cama:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Aceita Pets */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Aceita Pets (Cachorro/Gato)?
              </label>
              <select
                value={estrutura.aceitaPets}
                onChange={(e) => updateData('estrutura', 'aceitaPets', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
              >
                <option value="">Selecione...</option>
                <option value="sim">Sim, de qualquer porte</option>
                <option value="sob_consulta">Apenas pequeno porte / sob consulta</option>
                <option value="nao">Não aceita pets</option>
              </select>
            </div>

            {/* Som */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-navy" />
                Limite de som / silêncio
              </label>
              <input
                type="text"
                value={estrutura.horarioLimiteSom}
                onChange={(e) => updateData('estrutura', 'horarioLimiteSom', e.target.value)}
                placeholder="Ex: Som ambiente até as 22h"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
              />
            </div>

            {/* Roupa de Cama */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Roupa de cama e banho:
              </label>
              <select
                value={estrutura.roupaDeCama}
                onChange={(e) => updateData('estrutura', 'roupaDeCama', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy bg-white"
              >
                <option value="">Selecione...</option>
                <option value="hospede_leva">Hóspede leva própria (recomendado)</option>
                <option value="fornece">A casa fornece tudo lavado</option>
                <option value="opcional_com_taxa">Opcional com taxa de lavanderia</option>
              </select>
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              value={estrutura.outrasRegras}
              onChange={(e) => updateData('estrutura', 'outrasRegras', e.target.value)}
              placeholder="Outras regras (ex: Proibido fumar dentro dos quartos, não permite festas abertas ao público)..."
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
            <span>Voltar: Operação</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-brand-emerald/20 hover:shadow-lg transition-all"
          >
            <span>Avançar: Clientes & Divulgação</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </form>
    </div>
  );
};

