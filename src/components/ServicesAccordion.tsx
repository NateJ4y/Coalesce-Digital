import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICE_TABS } from '../data';

interface ServicesAccordionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesAccordion({ onSelectService }: ServicesAccordionProps) {
  const [activeTab, setActiveTab] = useState<string>('website-uiux');

  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-16">
        {/* Eyebrow badge with Satisfy script font */}
        <div className="inline-flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-black" />
          </div>
          <span className="font-satisfy text-lg md:text-xl text-neutral-600 tracking-wide">
            Services
          </span>
        </div>

        <h2 className="font-antonio font-bold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black">
          Find a service
        </h2>
      </div>

      {/* Accordion Tabs */}
      <div className="flex flex-col border-t border-neutral-300 divide-y divide-neutral-300">
        {SERVICE_TABS.map((tab) => {
          const isOpen = activeTab === tab.id;

          return (
            <div key={tab.id} className="py-8 md:py-10 transition-colors">
              {/* Tab Header Trigger */}
              <button
                onClick={() => setActiveTab(isOpen ? '' : tab.id)}
                className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-antonio font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide text-black group-hover:translate-x-2 transition-transform duration-300">
                    {tab.title}
                  </span>
                  {tab.subtitle && (
                    <span className="hidden sm:inline font-poppins text-xs uppercase tracking-widest text-neutral-400 font-medium">
                      {tab.subtitle}
                    </span>
                  )}
                </div>

                <div
                  className={`shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-black text-white rotate-45 border-black' : 'bg-neutral-100 text-black group-hover:bg-black group-hover:text-white'
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </button>

              {/* Expandable Tab Content */}
              {isOpen && (
                <div className="mt-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 animate-fadeIn">
                  {/* Left Description */}
                  <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                    <p className="font-poppins text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed uppercase font-medium">
                      {tab.description}
                    </p>

                    <div>
                      <button
                        onClick={() => onSelectService(tab.title)}
                        className="group inline-flex items-center gap-3 bg-black text-white text-xs font-semibold uppercase tracking-[0.16em] font-poppins px-6 py-3 rounded-full hover:bg-neutral-800 transition-all shadow-sm"
                      >
                        <span>Request {tab.title}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Scope Breakdown List */}
                  <div className="lg:col-span-5 bg-[#e9e9e9] rounded-2xl p-6 md:p-8 flex flex-col justify-center border border-neutral-300/80">
                    <span className="text-xs uppercase tracking-[0.18em] font-antonio font-bold text-neutral-500 mb-4">
                      Project Packages & Scope
                    </span>
                    <ul className="flex flex-col gap-3 font-poppins text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-800">
                      {tab.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between py-2 border-b border-neutral-300/60 last:border-0"
                        >
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-black" />
                            <span>{item.name}</span>
                          </span>
                          <span className="font-bold text-neutral-500 bg-white/70 px-2.5 py-1 rounded-md text-[11px]">
                            [{item.pages}]
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
