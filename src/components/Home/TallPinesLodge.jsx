import React from 'react';
import tallPinesImg from '../../assets/cottage3/cottage3.jpg';
import hero2 from '../../assets/cottage3/c1.jpg';
import hero3 from '../../assets/cottage3/c2.jpg';
import hero4 from '../../assets/cottage3/c3.jpg';

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
    <section id="tall-pines-lodge" className="w-full bg-[#161616] select-none text-stone-300 border-t border-stone-900/50">

      {/* Section Header */}
      <div className="text-center pt-24 pb-12 bg-[#161616] select-none">
        <h2 className="font-rostex text-3xl md:text-5xl text-stone-100 tracking-wider uppercase font-light leading-none">
          Tall Pines Lodge
        </h2>
        <div className="w-16 h-[1px] bg-amber-500/40 mx-auto mt-4" />
      </div>

      {/* Top Collage Row (Gallery) */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 pb-12 grid grid-cols-3 gap-3 md:gap-6">
        <div className="overflow-hidden">
          <img
            src={hero3}
            alt="Interior view"
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={hero4}
            alt="Lake view"
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={hero2}
            alt="Lakeside deck"
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
      </div>

      {/* Main Content Grid (Split-screen Style) */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

        {/* Left Side: Column Span 6 (Description) */}
        <div className="lg:col-span-6 flex flex-col justify-start pr-0 lg:pr-8">

          <div className="space-y-6 font-sans font-light text-stone-400 text-sm md:text-base leading-relaxed">
            <h3 className="font-normal font-normal text-base md:text-lg text-stone-200 tracking-wider uppercase mb-6 leading-snug">
              LARGEST SERENITY CABIN – SLEEPING 35
            </h3>
            <p>
              Tall Pines Lodge is our largest serenity home, offering about 2,300 sq. ft. of comfortable living space.
            </p>
            <p>
              It features four bedrooms and three full bathrooms, custom pine walls and ceiling, a beautiful rock fireplace, skylights, and a six-person hot tub on the front porch.
            </p>
            <p>
              This home can comfortably sleep up to 35 people. Beds include 4 queens, 6 fulls, 6 twin bunks, and 2 twin pullout futons.
            </p>
          </div>

          {/* Underlined Amenities section header */}
          <div className="mt-12">
            <span className="font-serif italic text-stone-100 text-sm md:text-base border-b border-stone-100 pb-1 inline-block hover:text-amber-300 hover:border-amber-300 transition-colors duration-300">
              amenities we are working with
            </span>

            {/* Minimalist Amenities List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-sans font-light text-xs md:text-sm text-stone-455 mt-6 pt-2 border-t border-stone-850/40">
              {amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 hover:text-stone-100 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Side: Column Span 6 (Portrait Showcase Image) */}
        <div className="lg:col-span-6 w-full overflow-hidden">
          <img
            src={tallPinesImg}
            alt="Tall Pines Lodge Portrait"
            className="w-full h-[50vh] lg:h-[75vh] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}
