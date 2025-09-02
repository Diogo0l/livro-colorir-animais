import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferCard from './components/OfferCard';
import Benefits from './components/Benefits';
import Preview from './components/Preview';
import Urgency from './components/Urgency';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const removeFloating = () => {
    document.querySelectorAll('[style*="position: fixed"][style*="bottom: 1rem"][style*="right: 1rem"][style*="z-index: 2147483647"]').forEach(el => el.remove());
};

// executa já no load
removeFloating();

// observa mudanças no DOM
const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50">
      <Header />
      <Hero />
      <OfferCard />
      <Benefits />
      <Preview />
      <Urgency />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;