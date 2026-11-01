import React from 'react';
import { DollarSign, ArrowLeft, ArrowRight, Calendar, Sparkles, CreditCard } from 'lucide-react';
import type { OnboardingFormData } from '../types/form';

interface StepPricesProps {
  formData: OnboardingFormData;
  updateData: (section: 'precos', field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StepPrices: React.FC<StepPricesProps> = ({
  formData,
  updateData,
  onNext,
  onPrev,
}) => {
  const { precos } = formData;

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
            Seção 1 de 4
          </span>
          <span className="text-xs text-brand-text-muted font-medium">Gestão Anterior</span>
        </div>
        <h2 className="font-montserrat font-bold text-2xl text-brand-navy flex items-center gap-2.5">
          <DollarSign className="w-6 h-6 text-brand-gold" />
          Histórico de Preços e Faturamento
        </h2>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          Compreender os valores praticados pela sua mãe nos ajuda a manter a atratividade da casa sem deixar dinheiro na mesa.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Pergunta 1: Diárias Normais e Finais de Semana */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              1.1
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Qual era o valor da diária que sua mãe cobrava em dias de semana normais e nos finais de semana?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Informe os valores médios aproximados praticados anteriormente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Diária em Dia de Semana (Segunda a Quinta)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={precos.valorDiariaSemana}
                  onChange={(e) => updateData('precos', 'valorDiariaSemana', e.target.value)}
                  placeholder="Ex: 350,00"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Diária no Final de Semana (Sexta a Domingo)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={precos.valorDiariaFimDeSemana}
                  onChange={(e) => updateData('precos', 'valorDiariaFimDeSemana', e.target.value)}
                  placeholder="Ex: 650,00"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Observações sobre as diárias (mínimo de dias, descontos para grupos, etc.)
            </label>
            <input
              type="text"
              value={precos.obsDiarias}
              onChange={(e) => updateData('precos', 'obsDiarias', e.target.value)}
              placeholder="Ex: Exigia mínimo de 2 diárias no fim de semana..."
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy transition-colors bg-white"
            />
          </div>
        </div>

        {/* Pergunta 2: Pacotes Especiais */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              1.2
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Quanto costumavam cobrar em pacotes especiais (Réveillon, Carnaval, feriados prolongados)?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Pacotes fechados são os maiores picos de faturamento do ano.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                Pacote de Réveillon
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={precos.pacoteReveillon}
                  onChange={(e) => updateData('precos', 'pacoteReveillon', e.target.value)}
                  placeholder="Ex: 8.000 (5 a 7 dias)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-navy" />
                Pacote de Carnaval
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={precos.pacoteCarnaval}
                  onChange={(e) => updateData('precos', 'pacoteCarnaval', e.target.value)}
                  placeholder="Ex: 5.500 (4 a 5 dias)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-emerald" />
                Feriados Prolongados
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={precos.pacoteFeriados}
                  onChange={(e) => updateData('precos', 'pacoteFeriados', e.target.value)}
                  placeholder="Ex: 2.200 (3 dias)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              value={precos.obsPacotes}
              onChange={(e) => updateData('precos', 'obsPacotes', e.target.value)}
              placeholder="Detalhes adicionais sobre pacotes ou outros feriados (Páscoa, Natal, etc.)..."
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-brand-navy transition-colors bg-white"
            />
          </div>
        </div>

        {/* Pergunta 3: Média de Ocupação */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              1.3
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Em média, quantos finais de semana ou dias por mês a casa costumava ficar alugada na alta e na baixa temporada?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Estimativa da taxa de ocupação habitual da casa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Alta Temporada (Dezembro a Março)
              </label>
              <input
                type="text"
                value={precos.ocupacaoAltaTemporada}
                onChange={(e) => updateData('precos', 'ocupacaoAltaTemporada', e.target.value)}
                placeholder="Ex: Todos os finais de semana e cerca de 15 a 20 dias/mês"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Baixa Temporada (Abril a Novembro)
              </label>
              <input
                type="text"
                value={precos.ocupacaoBaixaTemporada}
                onChange={(e) => updateData('precos', 'ocupacaoBaixaTemporada', e.target.value)}
                placeholder="Ex: 1 a 2 finais de semana por mês ou apenas feriados"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
              />
            </div>
          </div>
        </div>

        {/* Pergunta 4: Taxa de Limpeza */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              1.4
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Vocês cobram taxa de limpeza separada da diária? Se sim, qual o valor?
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'sim', label: 'Sim, cobramos taxa separada' },
              { id: 'nao', label: 'Não cobramos taxa' },
              { id: 'incluso_na_diaria', label: 'Já embutido na diária' },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs sm:text-sm font-medium transition-all ${
                  precos.cobraTaxaLimpeza === opt.id
                    ? 'border-brand-navy bg-brand-navy/5 text-brand-navy font-semibold ring-1 ring-brand-navy/20'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="cobraTaxaLimpeza"
                  value={opt.id}
                  checked={precos.cobraTaxaLimpeza === opt.id}
                  onChange={(e) => updateData('precos', 'cobraTaxaLimpeza', e.target.value)}
                  className="text-brand-navy focus:ring-brand-navy"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>

          {precos.cobraTaxaLimpeza === 'sim' && (
            <div className="mt-4 pt-3 border-t border-gray-200/60 max-w-sm">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Valor da Taxa de Limpeza cobrada do hóspede:
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">R$</span>
                <input
                  type="text"
                  value={precos.valorTaxaLimpeza}
                  onChange={(e) => updateData('precos', 'valorTaxaLimpeza', e.target.value)}
                  placeholder="Ex: 200,00 por estadia"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
                />
              </div>
            </div>
          )}
        </div>

        {/* Pergunta 5: Forma de Pagamento e Caução */}
        <div className="bg-brand-bg/60 p-5 sm:p-6 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-7 h-7 rounded-lg bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
              1.5
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy font-montserrat">
                Como funciona a forma de pagamento hoje? Pede algum valor de caução?
              </h3>
              <p className="text-xs text-brand-text-muted mt-0.5">
                Ex: 50% no Pix para reservar e 50% na entrega das chaves.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-brand-navy" />
                Como era dividido o pagamento das reservas?
              </label>
              <input
                type="text"
                value={precos.formaPagamento}
                onChange={(e) => updateData('precos', 'formaPagamento', e.target.value)}
                placeholder="Ex: 50% sinal na reserva via Pix + 50% em dinheiro ou Pix no dia da entrada"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy transition-colors bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Costumavam pedir valor de Caução (garantia contra danos)?
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'sim', label: 'Sim' },
                    { id: 'nao', label: 'Não' },
                    { id: 'as_vezes', label: 'Apenas grupos grandes' },
                  ].map((c) => (
                    <label
                      key={c.id}
                      className={`flex-1 flex items-center justify-center p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${
                        precos.pedeCaucao === c.id
                          ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pedeCaucao"
                        value={c.id}
                        checked={precos.pedeCaucao === c.id}
                        onChange={(e) => updateData('precos', 'pedeCaucao', e.target.value)}
                        className="sr-only"
                      />
                      <span>{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {precos.pedeCaucao !== 'nao' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Valor ou Regra da Caução:
                  </label>
                  <input
                    type="text"
                    value={precos.valorCaucao}
                    onChange={(e) => updateData('precos', 'valorCaucao', e.target.value)}
                    placeholder="Ex: R$ 500 devolvidos após vistoria"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-navy bg-white"
                  />
                </div>
              )}
            </div>
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
            <span>Voltar</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-brand-emerald/20 hover:shadow-lg transition-all"
          >
            <span>Avançar: Custos & Operação</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </form>
    </div>
  );
};

