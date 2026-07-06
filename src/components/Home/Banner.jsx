import React from 'react';
import hero2 from '../../assets/hero2.jpg';

export default function Banner() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-stone-900">
      
      {/* Background Image with Ken Burns Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-[kenburns_40s_ease-out_infinite]"
        style={{ backgroundImage: `url(${hero2})` }}
      />
      
      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 select-none">
        
        {/* Subtitle */}
        <span className="text-stone-300 font-sans text-xs md:text-sm font-light tracking-[0.4em] uppercase mb-4 animate-[fadeInDown_1.2s_ease-out]">
          Welcome to Serenity
        </span>

        {/* Main Title */}
        <h1 className="font-serif text-4xl md:text-7xl text-white font-light tracking-wide leading-tight max-w-4xl mb-8 animate-[fadeIn_1.6s_ease-out]">
          Where Nature Meets Luxury
        </h1>

        {/* Description */}
        <p className="font-sans text-stone-300 text-sm md:text-base font-light tracking-wide max-w-md md:max-w-xl mb-10 leading-relaxed opacity-85 animate-[fadeInUp_1.8s_ease-out]">
          Discover architectural lakeside cabins nestled in deep forest wilderness. Your retreat of quietness and visual delight.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_2s_ease-out]">
          <a
            href="#explore"
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-stone-900 hover:border-white text-white font-sans text-xs md:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
          >
            Explore Cottages
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 z-10 animate-bounce">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-70">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Tailwind Animations injected inline to ensure they work without tailwind.config updates */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.02) translate(0, 0); }
          50% { transform: scale(1.08) translate(-1%, -1%); }
          100% { transform: scale(1.02) translate(0, 0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
