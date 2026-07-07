import React from 'react';
import bearsDenImg from '../../assets/banner/hero6.jpg';

export default function BearsDen() {
  const amenities = [
    "2 Bedrooms",
    "1 Bathroom",
    "Kitchen",
    "Fireplace",
    "Heating / Air Conditioning",
    "Private Hot Tub",
    "Private Waterfront",
    "Fire Pit"
  ];

  return (
    <section id="bears-den" className="w-full bg-[#161616] border-t border-stone-900/50">

      {/* Section Header */}
      <div className="text-center pt-24 pb-12 bg-[#161616] select-none">
        <h2 className="font-rostex text-2xl md:text-4xl text-stone-100 tracking-[0.3em] uppercase font-light">
          Bear<span className="font-sans font-light">'</span>s Den cottage 2
        </h2>
        <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4" />
      </div>

      {/* Full Screen Image of Bear's Den */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden group select-none">
        {/* Parallax / scale container */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2s] scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${bearsDenImg})` }}
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20" />

        {/* Minimal label overlay */}
        <div className="absolute bottom-10 left-6 md:left-12 z-10">
          <span className="text-white/40 font-sans text-[10px] tracking-[0.3em] uppercase block mb-1">
            Property Showcase
          </span>
          <h3 className="font-serif text-2xl md:text-4xl font-light text-white tracking-[0.1em] uppercase">
            Bear<span className="font-sans font-light">'</span>s Den
          </h3>
        </div>
      </div>      {/* Details Section (Bear's Den specific content matching mockup) */}
      <div className="py-20 md:py-12 px-6 md:px-16 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 text-stone-300">

        {/* Left Column: Description */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <h2 className="font-normal font-semibold text-lg md:text-xl text-stone-100 tracking-wider uppercase mb-8 leading-snug">
            FIVE ROOM CABIN – SLEEPS 10
          </h2>
          <div className="space-y-6 font-sans font-light text-sm md:text-base leading-relaxed text-stone-400">
            <p>
              Bear's Den is a two bedroom, one bathroom single-floor cottage with a spacious floor plan.
            </p>
            <p>
              Some of the amenities and appointments include pine trim, doors, frames, cabinets and ceiling, and a custom fireplace. Bear's Den is handicap-accessible.
            </p>
            <p>
              This cottage sleeps up to 10 persons with both a double bed and a single bunk-bed in each room. For further sleeping arrangements, there is a custom-built log double-futon in the living room.
            </p>
            <p>
              Bear's Den offers an eight-foot front deck, a hot tub, a fire pit and (like all the other properties) its own private shoreline.
            </p>
          </div>
        </div>

        {/* Right Column: Amenities */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:pl-12 lg:border-l lg:border-stone-800/50">
          <h3 className="font-rostex font-semibold text-lg md:text-xl text-stone-100 tracking-wider uppercase mb-8">
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
