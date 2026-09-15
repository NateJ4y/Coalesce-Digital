import { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CoalesceLogoMark } from './CoalesceLogo';

interface HeroProps {
  onExploreServices: () => void;
  onOpenContact: () => void;
  onScrollDown: () => void;
}

export function Hero({ onExploreServices, onOpenContact, onScrollDown }: HeroProps) {
  const [exploreHovered, setExploreHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [scrollHovered, setScrollHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 max-w-7xl mx-auto select-none"
    >
      {/* Central Hero Block */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto w-full">
        {/* Massive Brand Headline with Logo Mark all on ONE single line */}
        <div className="w-full flex items-center justify-center overflow-hidden py-4">
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 whitespace-nowrap leading-none select-none max-w-full">
            <h1 className="font-antonio font-bold uppercase tracking-[-0.01em] md:tracking-[0.02em] text-[9.5vw] sm:text-[8.5vw] md:text-[8vw] lg:text-[7.6vw] xl:text-[102px] text-black transition-transform duration-300">
              COALESCE
            </h1>

            {/* Central Coalesce Digital Logo Emblem */}
            <div
              className="flex items-center justify-center flex-shrink-0 group cursor-default"
              title="Coalesce Digital"
            >
              <div className="w-7 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-7 sm:h-12 md:h-16 lg:h-20 xl:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <CoalesceLogoMark className="w-full h-full text-black drop-shadow-sm" />
              </div>
            </div>

            <span className="font-antonio font-bold uppercase tracking-[-0.01em] md:tracking-[0.02em] text-[9.5vw] sm:text-[8.5vw] md:text-[8vw] lg:text-[7.6vw] xl:text-[102px] text-black transition-transform duration-300">
              DIGITAL
            </span>
          </div>
        </div>

        {/* Subtitle Statement */}
        <div className="mt-6 md:mt-10 max-w-xl">
          <p className="font-poppins text-base sm:text-lg md:text-xl font-medium text-neutral-600 tracking-wide">
            Premium Web Design. Smart Brand Identity.
          </p>
        </div>

        {/* Primary Explore Button */}
        <div className="mt-8 md:mt-10">
          <button
            onClick={onExploreServices}
            onMouseEnter={() => setExploreHovered(true)}
            onMouseLeave={() => setExploreHovered(false)}
            className="group inline-flex items-center gap-3 bg-neutral-900 hover:bg-black text-white rounded-full p-1.5 pl-7 pr-2.5 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
            aria-label="Explore Services"
          >
            <span className="font-poppins text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-white">
              Explore Services
            </span>
            <div
              className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${
                exploreHovered ? 'rotate-45 bg-[#b3de4f] text-black' : 'text-white'
              }`}
            >
              <ArrowUpRight className={`w-5 h-5 transition-colors ${exploreHovered ? 'text-black' : 'text-white'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Hero Bottom Floating Controls Bar */}
      <div className="w-full flex flex-row items-center justify-between pt-6 border-t border-neutral-300/60 text-xs font-poppins uppercase tracking-[0.14em] font-medium text-neutral-700">
        {/* Scroll Down trigger */}
        <button
          onClick={onScrollDown}
          onMouseEnter={() => setScrollHovered(true)}
          onMouseLeave={() => setScrollHovered(false)}
          className="group flex items-center gap-3 hover:text-black transition-colors"
        >
          <div
            className={`w-9 h-9 rounded-full bg-neutral-200/80 flex items-center justify-center transition-transform duration-300 ${
              scrollHovered ? 'translate-y-1 bg-black text-white' : 'text-neutral-800'
            }`}
          >
            <ArrowDown className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline">Scroll Down</span>
        </button>

        {/* Brand Tagline or Coordinates */}
        <div className="text-center font-satisfy normal-case text-neutral-400 text-sm hidden lg:block">
          Precision crafted digital experiences
        </div>

        {/* Contact CTA */}
        <button
          onClick={onOpenContact}
          onMouseEnter={() => setContactHovered(true)}
          onMouseLeave={() => setContactHovered(false)}
          className="group flex items-center gap-3 hover:text-black transition-colors"
        >
          <span>Contact Us</span>
          <div
            className={`w-9 h-9 rounded-full bg-neutral-200/80 flex items-center justify-center transition-transform duration-300 ${
              contactHovered ? 'rotate-45 bg-black text-white' : 'text-neutral-800'
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>
  );
}
