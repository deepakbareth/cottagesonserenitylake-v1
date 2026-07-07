import React from 'react';
import tallPinesImg from '../../assets/cottage3/cottage3.jpg';

export default function TallPinesLodge() {
  const amenities = [
    "4 Bedrooms",
    "3 Bathroom",
    "Kitchen",
    "Fireplace",
    "Heating / Air Conditioning",
    "Skylights",
    "Private Hot Tub",
    "Private Waterfront",
    "Fire Pit"
  ];

  return (
    <section id="tall-pines-lodge" className="w-full bg-[#161616] border-t border-stone-900/50">

      {/* Section Header */}
      <div className="text-center pt-24 pb-12 bg-[#161616] select-none">
        <h2 className="font-rostex text-2xl md:text-4xl text-stone-100 tracking-[0.3em] uppercase font-light">
          Tall Pines Lodge cottage 3
        </h2>
        <div className="w-12 h-[1px] bg-amber-500/40 mx-auto mt-4" />
      </div>

      {/* Full Screen Image of Tall Pines Lodge */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden group select-none">
        {/* Parallax / scale container */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[2s] scale-100 group-hover:scale-105"
          style={{ backgroundImage: `url(${tallPinesImg})` }}
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20" />

        {/* Minimal label overlay */}
        <div className="absolute bottom-10 left-6 md:left-12 z-10">
          <span className="text-white/40 font-sans text-[10px] tracking-[0.3em] uppercase block mb-1">
            Property Showcase
          </span>
          <h3 className="font-serif text-2xl md:text-4xl font-light text-white tracking-[0.1em] uppercase">
            Tall Pines Lodge
          </h3>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-20 md:py-12 px-6 md:px-16 max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 text-stone-300">

        {/* Left Column: Description */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <h2 className="font-normal font-semibold text-lg md:text-xl text-stone-100 tracking-wider uppercase mb-8 leading-snug">
            Largest Serenity Home – Sleeps Thirty Five
          </h2>
          <div className="space-y-6 font-sans font-light text-sm md:text-base leading-relaxed text-stone-400">
            <p>
              The Tall Pines Lodge is a 2,300 square foot home and is built on the lakefront. In addition to sleeping 35 individuals across four bedrooms, this property includes a huge six-person hot tub right on the front porch!
            </p>
            <p>
              Three main bedrooms with three double, two double, and one single one double beds respectively sit on the first floor along with two full bathrooms. Also on the first floor, the common area serves as living room, dining room and kitchen and includes a custom-built rock fireplace. The fourth bedroom occupies the downstairs level along with a second large common area.
            </p>
            <p>
              There are great views of the native wildlife through the two main bedrooms on the main floor as they overlook the lake, and the ceilings in the upstairs common area are custom wood with skylights to let in a beautiful view of nature. The lodge is spacious enough to feel as if you have the comfort of home during your vacation but removed enough from the other properties to feel properly secluded.
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
