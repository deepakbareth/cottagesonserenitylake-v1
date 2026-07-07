import React from 'react';
import heroVideo from '../../assets/heroved2.mp4';
import posterImg from '../../assets/banner/hero8.jpg';

export default function Hero() {
  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-stone-950">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterImg}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-100"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/55" />




      {/* Tailwind Animations injected inline */}
      <style>{`
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
