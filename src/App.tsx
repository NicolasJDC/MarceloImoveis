import React from 'react';
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { Gallery } from './components/landing/Gallery';
import { RoomCards } from './components/landing/RoomCards';
import { Amenities } from './components/landing/Amenities';
import { PriceSimulator } from './components/landing/PriceSimulator';
import { Footer } from './components/landing/Footer';
import { FloatingWhatsApp } from './components/landing/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col selection:bg-brand-gold-light selection:text-brand-navy">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <RoomCards />
        <Amenities />
        <PriceSimulator />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
