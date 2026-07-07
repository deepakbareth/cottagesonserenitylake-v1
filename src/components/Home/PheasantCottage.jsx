import React from 'react';
import pheasantImg from '../../assets/Pheasant/prop1.jpg';
import hero3 from '../../assets/Pheasant/prop4.jpg';
import hero4 from '../../assets/Pheasant/prop2.jpg';
import hero2 from '../../assets/Pheasant/prop3.jpg';

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
    <section id="pheasant-cottage" className="w-full bg-white select-none text-stone-800">
      
      {/* Section Header */}
      <div className="text-center pt-24 pb-12 bg-white select-none">
        <h2 className="font-rostex text-3xl md:text-5xl text-stone-900 tracking-wider uppercase font-light leading-none">
          Pheasant
        </h2>
        <div className="w-16 h-[1px] bg-amber-600/40 mx-auto mt-4" />
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
            alt="Scenic view" 
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <img 
            src={hero2} 
            alt="Lakeside view" 
            className="w-full h-[25vh] md:h-[40vh] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
          />
        </div>
      </div>

      {/* Main Content Grid (Split-screen Style) */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Column Span 6 (Description) */}
        <div className="lg:col-span-6 flex flex-col justify-start pr-0 lg:pr-8">
          
          <div className="space-y-6 font-sans font-light text-stone-600 text-sm md:text-base leading-relaxed">
            <h3 className="font-sans font-normal text-base md:text-lg text-stone-850 tracking-wider uppercase mb-6 leading-snug">
              COZY, TWO-BEDROOM CABIN – SLEEPS NINE
            </h3>
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

          {/* Underlined Amenities section header */}
          <div className="mt-12">
            <span className="font-serif italic text-stone-900 text-sm md:text-base border-b border-stone-900 pb-1 inline-block hover:text-amber-700 hover:border-amber-700 transition-colors duration-300">
              amenities
            </span>
            
            {/* Minimalist Amenities List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-sans font-light text-xs md:text-sm text-stone-500 mt-6 pt-2 border-t border-stone-200">
              {amenities.map((amenity, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2.5 hover:text-stone-900 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600/70 shrink-0" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Side: Column Span 6 (Portrait Showcase Image) */}
        <div className="lg:col-span-6 w-full overflow-hidden">
          <img 
            src={pheasantImg} 
            alt="Pheasant Cottage Portrait" 
            className="w-full h-[50vh] lg:h-[75vh] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}
