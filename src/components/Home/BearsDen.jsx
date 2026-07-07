import React from 'react';
import bearsDenImg from '../../assets/banner/hero6.jpg';
import hero2 from '../../assets/banner/hero2.jpg';
import hero3 from '../../assets/banner/hero3.jpg';
import hero4 from '../../assets/banner/hero4.jpg';

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
    <section id="bears-den" className="w-full bg-[#161616] select-none text-stone-300 border-t border-stone-900/50">

      {/* Top Collage Row (Gallery) */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 pt-24 pb-12 grid grid-cols-3 gap-3 md:gap-6">
        <div className="overflow-hidden">
          <img
            src={hero2}
            alt="Scenic view"
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={hero3}
            alt="Interior space"
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={hero4}
            alt="Lakeside deck"
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
      </div>

      {/* Main Content Grid (Split-screen Style) */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

        {/* Left Side: Column Span 6 (Typography & Description) */}
        <div className="lg:col-span-6 flex flex-col justify-start pr-0 lg:pr-8">

          <span className="text-stone-500 font-sans text-[10px] tracking-[0.25em] uppercase block mb-3 font-medium">
            property showcase
          </span>

          <h2 className="font-rostex text-3xl md:text-5xl text-stone-100 tracking-normal lowercase leading-none mb-10">
            Bear<span className="font-sans font-light">'</span>s Den
          </h2>

          <div className="space-y-6 font-sans font-light text-stone-400 text-sm md:text-base leading-relaxed">
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

          {/* Underlined Amenities section header */}
          <div className="mt-12">
            <span className="font-serif italic text-stone-100 text-sm md:text-base border-b border-stone-100 pb-1 inline-block hover:text-amber-300 hover:border-amber-300 transition-colors duration-300">
              amenities we are working with
            </span>

            {/* Minimalist Amenities List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-sans font-light text-xs md:text-sm text-stone-450 mt-6 pt-2 border-t border-stone-850/40">
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
            src={bearsDenImg}
            alt="Bear's Den Portrait"
            className="w-full h-[50vh] lg:h-[75vh] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}
