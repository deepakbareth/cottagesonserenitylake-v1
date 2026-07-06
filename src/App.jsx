import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './components/Home/Hero';
import PheasantCottage from './components/Home/PheasantCottage';

function App() {
  return (
    <div className="relative min-h-screen bg-[#161616] font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      
      {/* Premium Navbar */}
      <Navbar />

      {/* Hero Banner Section */}
      <header id="home">
        <Hero />
      </header>

      {/* Pheasant Cottage Section */}
      <main>
        <PheasantCottage />
      </main>

    </div>
  );
}

export default App;
