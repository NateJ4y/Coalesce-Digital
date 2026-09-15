import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';

interface PortfolioShowcaseProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export function PortfolioShowcase({ onSelectItem }: PortfolioShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Branding',
    'Web Development',
    'Social Media',
    'Advertising',
    'Automation',
    'Video & Motion',
    'Strategy',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="w-full bg-[#e9e9e9] py-24 md:py-32 px-4 sm:px-8 border-y border-neutral-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              </div>
              <span className="font-satisfy text-lg md:text-xl text-neutral-600 tracking-wide">
                What we’re good at
              </span>
            </div>

            <h2 className="font-antonio font-bold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-black">
              Find a service That<br />works for you
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-widest text-neutral-500">
            <Sparkles className="w-4 h-4 text-black" />
            <span>{PORTFOLIO_ITEMS.length} Core Creative Capabilities</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-poppins uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showcase Articles List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer bg-white rounded-3xl p-4 sm:p-6 border border-neutral-300/80 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-6"
            >
              {/* Media Container */}
              <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[640px] rounded-2xl overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Index badge top-left */}
                <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center font-antonio font-bold text-sm text-black shadow-sm">
                  0{index + 1}
                </div>
              </div>

              {/* Card Footer Bar with Title, Tags, and Arrow */}
              <div className="bg-[#f3f3f3] group-hover:bg-[#f8f8f8] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-neutral-200 transition-colors">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-poppins font-bold uppercase tracking-widest text-neutral-400 bg-white px-3 py-1 rounded-full border border-neutral-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-poppins text-neutral-500 font-medium">
                      Client: {item.client}
                    </span>
                  </div>

                  <h3 className="font-antonio font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-black group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Tag Pills & Interactive Arrow */}
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-poppins font-medium text-neutral-800 bg-[#e9e9e9] group-hover:bg-white px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      {tag}
                    </span>
                  ))}

                  <div className="w-11 h-11 rounded-full bg-[#e9e9e9] group-hover:bg-black group-hover:text-white flex items-center justify-center ml-2 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
