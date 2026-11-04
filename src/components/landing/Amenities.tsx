import React from 'react';
import { Waves, Wifi, UtensilsCrossed, ShieldCheck, Sparkles } from 'lucide-react';
import { amenitiesList } from '../../data/houseData';

const categoryIcons: Record<string, React.ReactNode> = {
  'Lazer & Bem-estar': <Waves className="w-6 h-6 text-brand-emerald" />,
  'Conforto & Tecnologia': <Wifi className="w-6 h-6 text-brand-navy" />,
  'Cozinha Completa': <UtensilsCrossed className="w-6 h-6 text-brand-gold" />,
  'Segurança & Privacidade': <ShieldCheck className="w-6 h-6 text-brand-navy-dark" />,
};

const categoryColors: Record<string, { bg: string; border: string; badge: string }> = {
  'Lazer & Bem-estar': { bg: 'bg-emerald-50/50', border: 'border-emerald-100', badge: 'bg-emerald-100 text-brand-emerald' },
  'Conforto & Tecnologia': { bg: 'bg-blue-50/50', border: 'border-blue-100', badge: 'bg-blue-100 text-brand-navy' },
  'Cozinha Completa': { bg: 'bg-amber-50/50', border: 'border-amber-100', badge: 'bg-amber-100 text-brand-gold-muted' },
  'Segurança & Privacidade': { bg: 'bg-slate-50/50', border: 'border-slate-200', badge: 'bg-slate-100 text-brand-navy-dark' },
};

export const Amenities: React.FC = () => {
  return (
    <section id="lazer" className="py-16 lg:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-navy border border-blue-200/80 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Tudo Incluso — Sem Surpresas e Sem Taxas Ocultas</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
            Comodidades e Infraestrutura
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
            A casa oferece tudo que você e sua família precisam para dias inesquecíveis:
            piscina privativa com cascata, ar split em todos os quartos, cozinha equipada e total privacidade.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {amenitiesList.map((category) => {
            const colors = categoryColors[category.categoria] || categoryColors['Conforto & Tecnologia'];
            const sectionId = category.categoria.includes('Segurança') ? 'seguranca' : undefined;

            return (
              <div
                key={category.categoria}
                id={sectionId}
                className={`${colors.bg} rounded-3xl border ${colors.border} p-6 sm:p-8 transition-all hover:shadow-card`}
              >
                {/* Cabeçalho da Categoria */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${colors.badge} flex items-center justify-center`}>
                    {categoryIcons[category.categoria] || <Sparkles className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-brand-navy">
                      {category.categoria}
                    </h3>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {category.itens.length} itens disponíveis
                    </p>
                  </div>
                </div>

                {/* Lista de Itens */}
                <div className="space-y-4">
                  {category.itens.map((item) => (
                    <div
                      key={item.titulo}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          {item.titulo}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

