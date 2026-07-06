import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('HOME');
    const [cottagesOpen, setCottagesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setCottagesOpen(false);
        }
    };

    const menuItems = [
        { name: 'HOME', link: '#' },
        {
            name: 'THE COTTAGES',
            link: '#',
            hasDropdown: true,
            subItems: [
                { name: 'PHEASANT COTTAGE', link: '#' },
                { name: 'BEAR\'S DEN', link: '#' },
                { name: 'TALL PINES LODGE', link: '#' }
            ]
        },
        { name: 'POLICIES', link: '#' },
        { name: 'ABOUT US', link: '#' },
        { name: 'CONTACT', link: '#' }
    ];

    // Flatten items when dropdown is expanded so they animate in the same staggered flex stack
    const renderItems = [];
    menuItems.forEach((item) => {
        renderItems.push(item);
        if (item.hasDropdown && cottagesOpen) {
            item.subItems.forEach((sub) => {
                renderItems.push({ ...sub, isSubItem: true });
            });
        }
    });

    return (
        <>
            {/* Top Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/50 to-transparent py-4 md:py-6 px-4 md:px-12 flex items-center justify-between text-white transition-all duration-300">

                {/* Left Side: Menu Toggle Icon (Glassmorphic) */}
                <button
                    onClick={toggleMenu}
                    className="group cursor-pointer flex items-center justify-center p-2 md:p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 focus:outline-none shrink-0"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <X className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                    ) : (
                        <Menu className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-105 transition-transform" />
                    )}
                </button>

                {/* Center: Branding */}
                <div className="text-center flex-1 mx-2 overflow-hidden flex justify-center items-center">
                    <a
                        href="#"
                        className="font-serif text-[10px] min-[375px]:text-xs sm:text-sm md:text-2xl font-light tracking-widest md:tracking-[0.15em] uppercase hover:opacity-80 transition-opacity truncate"
                    >
                        Son Serenity Lake
                    </a>
                </div>

                {/* Right Side: Contact Icons (Glassmorphic) */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <a
                        href="mailto:alisaalicia04@aol.com"
                        className="flex items-center justify-center p-2 md:p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                        title="Email Us"
                    >
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-105 transition-transform" />
                    </a>
                    <a
                        href="tel:(800) 997-9575"
                        className="flex items-center justify-center p-2 md:p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                        title="Call Us"
                    >
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-105 transition-transform" />
                    </a>
                </div>
            </nav>

            {/* Floating Menu Buttons */}
            <div className="fixed top-[72px] md:top-[92px] left-4 md:left-[10px] z-50 flex flex-col gap-2.5 md:gap-3 items-start pointer-events-none max-w-[90vw]">
                {renderItems.map((item, idx) => {
                    const isActive = activeItem === item.name;
                    const isCottagesToggle = item.hasDropdown;

                    const handleClick = (e) => {
                        if (isCottagesToggle) {
                            e.preventDefault();
                            setCottagesOpen(!cottagesOpen);
                        } else {
                            setActiveItem(item.name);
                            setIsOpen(false);
                            setCottagesOpen(false);
                        }
                    };

                    return (
                        <a
                            key={idx}
                            href={item.link}
                            onClick={handleClick}
                            style={{
                                transitionDelay: isOpen ? `${idx * 50}ms` : '0ms'
                            }}
                            className={`pointer-events-auto flex items-center justify-start rounded-full font-sans text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-500 shadow-lg select-none whitespace-nowrap ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                                } ${item.isSubItem
                                    ? isActive
                                        ? 'ml-4 md:ml-6 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-md text-white border border-white/35 shadow-md animate-[fadeIn_0.3s_ease-out]'
                                        : 'ml-4 md:ml-6 px-4 md:px-6 py-2 md:py-3 bg-black/40 backdrop-blur-md text-stone-300 border border-white/10 hover:bg-black/60 hover:text-white hover:border-white/25 hover:translate-x-1 md:hover:translate-x-2 animate-[fadeIn_0.3s_ease-out]'
                                    : isActive || (isCottagesToggle && cottagesOpen)
                                        ? 'px-4 md:px-6 py-2.5 md:py-3 bg-white/20 backdrop-blur-md text-white border border-white/35 hover:bg-white/35 hover:border-white/40'
                                        : 'px-4 md:px-6 py-2.5 md:py-3 bg-black/40 backdrop-blur-md text-stone-300 border border-white/10 hover:bg-black/60 hover:text-white hover:border-white/25 hover:translate-x-1 md:hover:translate-x-2'
                                }`}
                        >
                            <span className="flex items-center gap-1.5 md:gap-2">
                                {(((isActive && !item.isSubItem) || (isCottagesToggle && cottagesOpen))) && (
                                    <span className="text-amber-300 font-sans font-normal animate-pulse">&gt;</span>
                                )}
                                {item.name}
                                {isCottagesToggle && (
                                    <ChevronDown className={`w-3.5 h-3.5 md:w-4 md:h-4 ml-0.5 md:ml-1 transition-transform duration-300 ${cottagesOpen ? 'rotate-180 text-amber-300' : 'rotate-0 text-stone-400 group-hover:text-white'
                                        }`} />
                                )}
                            </span>
                        </a>
                    );
                })}
            </div>
        </>
    );
}