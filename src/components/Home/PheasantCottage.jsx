import React from 'react';
import pheasantImg from '../../assets/Pheasant/prop1.jpg';

export default function PheasantCottage() {
  const amenities = [
    "2 Bedrooms",
    "1 Bathroom",
    "Kitchen",
    "Private Hot Tub",
    "Private Waterfront",
    "Fire Pit",
    "Heating / Air Conditioning",
  ];

  return (
    <section id="pheasant-cottage" className="w-full bg-[#161616]">
      {/* Section Header */}
      <div className="text-center pt-24 pb-12 bg-[#161616] select-none">
        <h2 className="font-rostex text-2xl md:text-4xl text-stone-100 tracking-[0.3em] uppercase font-light">
          Pheasant cottage 1
        </h2>
        <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4" />
      </div>

      {/* Full Screen Image of Pheasant Cottage */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden group select-none">
        {/* Parallax / scale container */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2s] scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${pheasantImg})` }}
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20" />

        {/* Minimal label overlay */}
        <div className="absolute bottom-10 left-6 md:left-12 z-10">
          <span className="text-white/40 font-sans text-[10px] tracking-[0.3em] uppercase block mb-1">
            Property Showcase
          </span>
          <h3 className="font-serif text-2xl md:text-4xl font-light text-white tracking-[0.1em] uppercase">
            Pheasant
          </h3>
        </div>
      </div>

      {/* Details Section (As requested in screenshot layout) */}
      <div className="py-20 md:py-12 px-6 md:px-16 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 text-stone-300">

        {/* Left Column: Description */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <h2 className="font-nromal  font-semibold text-lg md:text-xl text-stone-100 tracking-wider uppercase mb-8 leading-snug">
            COZY, TWO-BEDROOM CABIN – SLEEPS NINE
          </h2>
          <div className="space-y-6 font-sans font-light text-sm md:text-base leading-relaxed text-stone-400">
            <p>
              Pheasant Cottage is a 2-bedroom, 1-bathroom cottage with fourteen windows providing spectacular views of the lake and surrounding area!
            </p>
            <p>
              A custom futon in the main room allows nine to sleep comfortably.
            </p>
            <p>
              Pheasant Cottage has all the amenities of the other properties, with the exception of a fireplace. Enjoy the outdoor fire pit as weather permits!
            </p>
          </div>
        </div>

        {/* Right Column: Amenities */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:pl-12 lg:border-l lg:border-stone-800/50">
          <h3 className="font-rostex  font-semibold text-lg md:text-xl text-stone-100 tracking-wider uppercase mb-8">
            AMENITIES
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-normal text-sm md:text-base text-stone-300">
            {amenities.map((amenity, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-stone-850/60 pb-3 hover:text-white transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}
