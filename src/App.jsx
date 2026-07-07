import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './components/Home/Hero';
import PheasantCottage from './components/Home/PheasantCottage';
import BearsDen from './components/Home/BearsDen';
import TallPinesLodge from './components/Home/TallPinesLodge';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#161616] font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      
      {/* Premium Navbar */}
      <Navbar />

      {/* Hero Banner Section */}
      <header id="home">
        <Hero />
      </header>

      {/* Cottages Showcase Sections */}
      <main>
        <PheasantCottage />
        <BearsDen />
        <TallPinesLodge />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
