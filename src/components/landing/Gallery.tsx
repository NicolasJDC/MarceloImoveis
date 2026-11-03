import React, { useState } from 'react';
import { Camera, Search } from 'lucide-react';
import { propertyImages, type PropertyImage } from '../../data/houseData';
import { LightboxModal } from './LightboxModal';

type CategoryFilter = 'todos' | PropertyImage['category'];

const categories: { key: CategoryFilter; label: string; count: number }[] = [
  { key: 'todos', label: 'Todas', count: propertyImages.length },
  { key: 'piscina', label: 'Piscina', count: propertyImages.filter((i) => i.category === 'piscina').length },
  { key: 'quartos', label: 'Quartos', count: propertyImages.filter((i) => i.category === 'quartos').length },
  { key: 'salas', label: 'Salas', count: propertyImages.filter((i) => i.category === 'salas').length },
  { key: 'cozinha', label: 'Cozinha', count: propertyImages.filter((i) => i.category === 'cozinha').length },
  { key: 'banheiros', label: 'Banheiros', count: propertyImages.filter((i) => i.category === 'banheiros').length },
  { key: 'seguranca', label: 'Segurança', count: propertyImages.filter((i) => i.category === 'seguranca').length },
];

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('todos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeFilter === 'todos'
      ? propertyImages
      : propertyImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-navy border border-blue-200/80 text-xs font-semibold mb-4">
            <Camera className="w-3.5 h-3.5 text-brand-gold" />
            <span>Galeria Completa — 21 Fotos Reais do Imóvel</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy">
            Conheça Cada Cantinho da Casa
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            Todas as fotos são reais e atuais. Nenhuma surpresa ao chegar: o que você vê é exatamente o que vai encontrar.
          </p>
        </div>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeFilter === cat.key
                  ? 'bg-brand-navy text-white border-brand-navy shadow-md shadow-brand-navy/20'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-navy/30 hover:text-brand-navy'
              }`}
            >
              {cat.label}
              <span
                className={`ml-1.5 text-[10px] font-mono ${
                  activeFilter === cat.key ? 'text-brand-gold' : 'text-gray-400'
                }`}
              >
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredImages.map((img, index) => (
            <button
              key={img.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-navy/40 focus:ring-offset-2 transition-shadow hover:shadow-xl"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay no Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                <h4 className="text-white text-xs sm:text-sm font-bold font-montserrat leading-tight">
                  {img.title}
                </h4>
                <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5 line-clamp-2">
                  {img.description}
                </p>
              </div>
              {/* Ícone de Zoom */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/30">
                <Search className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
};

