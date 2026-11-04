import React from 'react';
import { MessageCircle, Calendar, Users, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { houseHighlights } from '../../data/houseData';

export const PriceSimulator: React.FC = () => {
  const whatsappUrl = `https://wa.me/${houseHighlights.whatsappNumber}?text=${encodeURIComponent(
    'Olá Marcelo! Gostaria de consultar valores e disponibilidade para a Casa de Temporada com piscina. Podemos conversar?'
  )}`;

  return (
    <section id="valores" className="py-16 lg:py-24 bg-gradient-to-b from-brand-bg to-white relative overflow-hidden">
      {/* Decoração de Fundo */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-brand-emerald-dark border border-emerald-200/80 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Locação Direta — Sem Intermediários</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
            Como Reservar?
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
            As diárias variam de acordo com a temporada, quantidade de pessoas e período da estadia.
            <strong className="text-brand-navy"> Fale diretamente com o Marcelo</strong> pelo WhatsApp
            para receber o melhor valor personalizado para o seu grupo.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Lado Esquerdo — O que influencia */}
            <div className="p-8 sm:p-10 space-y-6">
              <h3 className="font-montserrat font-bold text-lg text-brand-navy">
                O Que Influencia na Diária?
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Período e Temporada</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Alta temporada, feriados, férias escolares e finais de semana possuem valores diferenciados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Quantidade de Pessoas</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      A casa acomoda até 20 pessoas. O valor varia conforme o tamanho do grupo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Duração da Estadia</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Estadias mais longas podem ter condições especiais. Consulte o Marcelo para detalhes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Info adicional */}
              <div className="mt-4 p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
                <p className="text-xs text-brand-navy font-medium leading-relaxed">
                  💬 Informe ao Marcelo as <strong>datas desejadas</strong>, <strong>quantas pessoas</strong> e
                  ele retorna rapidamente com o valor e a disponibilidade.
                </p>
              </div>
            </div>

            {/* Lado Direito — CTA de Conversão */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-navy-dark p-8 sm:p-10 flex flex-col justify-center items-center text-center text-white space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MessageCircle className="w-8 h-8 text-brand-emerald fill-current" />
              </div>

              <div>
                <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl">
                  Fale com o Marcelo
                </h3>
                <p className="text-sm text-blue-200 mt-2 max-w-sm">
                  Atendimento direto e rápido pelo WhatsApp. Preço justo e sem surpresas.
                </p>
              </div>

              {/* Benefícios */}
              <div className="space-y-2.5 w-full max-w-xs text-left">
                {[
                  'Sem taxa de intermediação',
                  'Resposta rápida no WhatsApp',
                  'Valor personalizado para seu grupo',
                  'Condições especiais para estadias longas',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span className="text-xs text-blue-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Botão CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-emerald hover:bg-brand-emerald-dark text-white font-montserrat font-bold text-sm rounded-2xl shadow-xl shadow-black/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar Valores no WhatsApp</span>
              </a>

              <p className="text-[11px] text-blue-300/70">
                Atendimento: Seg a Sáb, 8h às 21h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
