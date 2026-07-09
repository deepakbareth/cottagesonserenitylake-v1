import logo from '../assets/pbw.jpg';
import { Mail, Phone, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-stone-400 pt-20 pb-10 px-6 md:px-16 border-t border-stone-900/50 select-none">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Column 1: Branding & Description (Col Span 4) */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <h3 className="font-rostex text-lg md:text-xl text-stone-100 tracking-[0.2em] uppercase mb-5">
            COTTAGES  <br /> ON SERENITY LAKE
          </h3>
          <p className="font-sans font-light text-stone-500 text-xs md:text-sm leading-relaxed max-w-sm">
            Experience the perfect blend of natural tranquility and premium luxury. Nestled on pristine lakefront shores, our cabins offer private waterfronts, hot tubs, and peaceful getaways designed to help you reconnect with nature.
          </p>
        </div>

        {/* Column 2: Navigation Links (Col Span 2 md:pl-8) */}
        <div className="lg:col-span-2 lg:pl-10">
          <h4 className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-stone-400 font-semibold uppercase mb-5">
            Navigation
          </h4>
          <ul className="space-y-3 font-sans text-xs tracking-wider text-stone-500">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">HOME</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">POLICIES</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">ABOUT US</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">CONTACT</a>
            </li>
          </ul>
        </div>

        {/* Column 3: The Cottages Links (Col Span 3) */}
        <div className="lg:col-span-3 lg:pl-6">
          <h4 className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-stone-400 font-semibold uppercase mb-5">
            The Cottages
          </h4>
          <ul className="space-y-3 font-sans text-xs tracking-wider text-stone-500">
            <li>
              <a href="#pheasant-cottage" className="hover:text-white transition-colors duration-300">THE PHEASANT</a>
            </li>
            <li>
              <a href="#bears-den" className="hover:text-white transition-colors duration-300">THE BEAR'S DEN</a>
            </li>
            <li>
              <a href="#tall-pines-lodge" className="hover:text-white transition-colors duration-300">THE TALL PINES</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Phone (Col Span 3) */}
        <div className="lg:col-span-3">
          <h4 className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-stone-400 font-semibold uppercase mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4 font-sans text-xs tracking-wider text-stone-500">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-stone-600 shrink-0" />
              <a
                href="mailto:alisaalicia04@aol.com"
                className="hover:text-white transition-colors duration-300 block truncate"
              >
                ALISAALICIA04@AOL.COM
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-stone-600 shrink-0" />
              <a
                href="tel:+1(800)997-9575"
                className="hover:text-white transition-colors duration-300 block"
              >
                PH. +1 (800) 997-9575
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-stone-600 shrink-0" />
              <a
                href="tel:+1(520)404-1142"
                className="hover:text-white transition-colors duration-300 block"
              >
                CELL +1 (520) 404-1142
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-8xl mx-auto mt-16 pt-8 border-t border-stone-900/80 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[15px] tracking-[0.2em] text-stone-600 uppercase font-light text-center md:text-left">
        <div>
          © COTTAGES ON SERENITY LAKE . {new Date().getFullYear()} . ALL RIGHTS RESERVED.
        </div>
        <a href="https://premiumbusinesswebsites.com/" className="flex items-center gap-2">
          <p className="text-[15px] font-sans tracking-[0.2em] text-stone-600 uppercase font-light text-center md:text-left">POWERED BY</p>
          <img src={logo} alt="" className="w-30" />
        </a>
      </div>
    </footer>
  );
}
