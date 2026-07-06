import React from 'react';
import hero2 from '../../assets/hero2.jpg';
import hero1 from '../../assets/banner/hero6.jpg';

export default function Hero() {
  return (
    <div className="relative w-full md:h-screen h-[80vh]  overflow-hidden bg-stone-900">

      {/* Background Image with Ken Burns Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-[kenburns_40s_ease-out_infinite]"
        style={{ backgroundImage: `url(${hero1})` }}
      />

      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />




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
