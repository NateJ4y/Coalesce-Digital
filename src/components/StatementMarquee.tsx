import { ArrowUpRight } from 'lucide-react';
import { CLIENT_LOGOS } from '../data';

interface StatementMarqueeProps {
  onOpenAbout: () => void;
}

export function StatementMarquee({ onOpenAbout }: StatementMarqueeProps) {
  return (
    <section id="about-preview" className="w-full bg-[#e9e9e9] py-20 md:py-28 px-4 sm:px-8 border-y border-neutral-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Main Statement & Narrative */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Large Headline */}
          <div className="max-w-3xl">
            <h2 className="font-antonio font-bold uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] tracking-[0.02em] text-neutral-900 drop-shadow-sm">
              <span className="text-black">WE </span>
              <span className="text-neutral-500">CRAFT </span>
              <span className="text-black">WONDERFUL</span>
              <br />
              <span className="bg-gradient-to-r from-black via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                DIGITAL EXPERIENCES
              </span>
              <br />
              <span className="text-neutral-500">FOR </span>
              <span className="text-black">BRANDS</span>
            </h2>
          </div>

          {/* Curving SVG Arrow Accent (Decorative as in reference) */}
          <div className="hidden lg:block absolute right-0 top-4 w-28 h-28 opacity-70 pointer-events-none">
            <svg viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M0 2.25921C0.00159013 1.68519 0.216509 1.13318 0.601316 0.714732C0.986122 0.296279 1.51213 0.0425785 2.07306 0.00489151C2.634 -0.0327949 3.18805 0.148341 3.62324 0.511701C4.05842 0.875058 4.34231 1.39355 4.41754 1.96241C4.55732 3.00687 19.3697 106.781 115.64 122.733C116.223 122.831 116.743 123.158 117.087 123.645C117.431 124.133 117.572 124.74 117.478 125.334C117.383 125.927 117.062 126.458 116.585 126.809C116.107 127.161 115.513 127.305 114.93 127.208C15.3715 110.71 0.161972 3.64351 0.0199725 2.56508C0.00669245 2.46368 1.74694e-05 2.3615 0 2.25921Z"
                fill="black"
              />
              <path
                d="M140.309 126.869C130.356 129.639 117.861 134.777 109.881 140.685L117.139 124.804L112.709 107.887C119.558 115.115 130.983 122.379 140.309 126.869Z"
                fill="black"
              />
            </svg>
          </div>

          {/* Right Column: Statement Paragraph & About Button */}
          <div className="max-w-xl flex flex-col items-start gap-8 lg:mt-8">
            <p className="font-poppins text-neutral-600 text-sm sm:text-base leading-relaxed uppercase tracking-wider font-medium">
              Our expertise is the cornerstone of our success. With years of experience in web design, automation, development, and branding, we've honed our skills to perfection.
            </p>

            <button
              onClick={onOpenAbout}
              className="group inline-flex items-center gap-3 bg-neutral-900 hover:bg-black text-white rounded-full p-1.5 pl-6 pr-2 transition-all duration-300 shadow-sm hover:scale-[1.02]"
            >
              <span className="font-poppins text-xs font-semibold tracking-[0.16em] uppercase">
                About Us
              </span>
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 group-hover:bg-[#b3de4f] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
              </div>
            </button>
          </div>
        </div>

        {/* Brand Slider / Marquee */}
        <div className="pt-10 border-t border-neutral-300 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 overflow-hidden">
          <div className="shrink-0">
            <h3 className="font-antonio font-semibold text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase text-black max-w-[200px] leading-snug">
              Worked with global largest brands
            </h3>
          </div>

          {/* Continuous Ticker */}
          <div className="relative flex-1 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-3 whitespace-nowrap">
              {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((brand, idx) => (
                <span
                  key={`${brand}-${idx}`}
                  className="font-antonio font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.2em] text-neutral-400 hover:text-black transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
