import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PERSONAL_HEADER_IMAGE, SOCIAL_PACKAGES } from '../data';

interface SocialPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export function SocialPackages({ onSelectPackage }: SocialPackagesProps) {
  const [selectedPkg, setSelectedPkg] = useState<string>('standard');

  return (
    <section id="packages" className="py-24 md:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Visual Asset Image */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-300 max-h-[720px] aspect-[3/4] group">
            <img
              src={PERSONAL_HEADER_IMAGE}
              alt="Coalesce Digital Agency Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="font-satisfy text-xl text-neutral-300">Coalesce Agency</span>
              <h3 className="font-antonio font-bold text-3xl uppercase tracking-wider">
                Full-Spectrum Social Growth
              </h3>
              <p className="font-poppins text-xs text-neutral-300 uppercase tracking-widest mt-1">
                Strategic • Data-Driven • High Engagement
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing Tiers & Packages */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              </div>
              <span className="font-satisfy text-lg md:text-xl text-neutral-600 tracking-wide">
                Packages
              </span>
            </div>

            <h2 className="font-antonio font-bold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight bg-gradient-to-r from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
              Social Media
            </h2>
          </div>

          {/* Packages List */}
          <div className="flex flex-col gap-6">
            {SOCIAL_PACKAGES.map((pkg) => {
              const isSelected = selectedPkg === pkg.id;

              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-black shadow-lg ring-1 ring-black'
                      : 'bg-[#f3f3f3] border-neutral-300/80 hover:bg-white hover:border-neutral-400'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-neutral-200">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-antonio font-bold text-2xl sm:text-3xl uppercase tracking-wide text-black">
                          {pkg.title}
                        </h3>
                        {pkg.popular && (
                          <span className="px-3 py-0.5 rounded-full bg-black text-white text-[10px] font-poppins font-bold uppercase tracking-widest">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-baseline gap-1.5 shrink-0">
                      <span className="font-poppins font-extrabold text-2xl sm:text-3xl text-black">
                        {pkg.price}
                      </span>
                      <span className="font-poppins text-xs font-semibold text-neutral-500 uppercase">
                        / {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 grid grid-cols-1 gap-3 font-poppins text-xs sm:text-sm text-neutral-700">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Action */}
                  <div className="mt-6 pt-4 flex items-center justify-between">
                    <span className="text-xs font-poppins font-medium text-neutral-500">
                      {isSelected ? '✓ Currently Selected' : 'Click to select'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPackage(pkg.title);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-poppins py-2 px-5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors"
                    >
                      <span>Choose Plan</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Direct CTA */}
          <div className="flex justify-end pt-4">
            <button
              onClick={() => {
                const pkg = SOCIAL_PACKAGES.find((p) => p.id === selectedPkg);
                onSelectPackage(pkg ? pkg.title : 'Social Media Custom Package');
              }}
              className="group inline-flex items-center gap-3 bg-neutral-900 hover:bg-black text-white rounded-full p-2 pl-7 pr-2.5 transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <span className="font-poppins text-xs md:text-sm font-semibold tracking-[0.16em] uppercase">
                Contact Me About Packages
              </span>
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 group-hover:bg-[#b3de4f] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
