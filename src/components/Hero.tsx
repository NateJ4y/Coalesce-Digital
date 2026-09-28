import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/site';

type HeroProps = { onContact: () => void; onExplore: () => void };

export function Hero({ onContact, onExplore }: HeroProps) {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];
  // The hero bubbles are owned by the active slide index — never by the global services array.
  const heroTags = [
    ['Websites', 'Applications', 'Conversion'],
    ['Workflows', 'Lead capture', 'AI'],
    ['Content', 'Social management', 'Growth'],
    ['Brand systems', 'Design', 'Marketing'],
  ] as const;
  const visibleTags = heroTags[active] ?? [];

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center px-5 sm:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden" aria-label="Coalesce Digital introduction">
      <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        <img key={slide.image} src={slide.image} alt="" fetchPriority={active === 0 ? 'high' : 'auto'} className="absolute inset-0 block w-full h-full max-w-none object-cover object-center scale-105 animate-hero-image" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      </div>
      <div className="relative z-10 w-full max-w-[80rem] mx-auto text-white text-center">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl min-w-0">
            <div key={slide.eyebrow} className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-7 text-[10px] font-bold uppercase tracking-[0.2em] animate-hero-item">
              <span className="w-2 h-2 rounded-full bg-[#b3de4f] animate-pulse" aria-hidden="true" />{slide.eyebrow}
            </div>
            <div key={active} className="flex min-h-[34rem] sm:min-h-[36rem] lg:min-h-[37rem] flex-col items-center justify-center">
              <div className="flex min-h-[11rem] sm:min-h-[13rem] lg:min-h-[15rem] items-center justify-center">
                <h1 key={slide.eyebrow} className="font-antonio font-bold uppercase text-[15vw] sm:text-[10vw] lg:text-[8.25rem] leading-[0.88] tracking-[-0.045em] max-w-[11ch] break-words animate-hero-content">
                  <span className="block">{slide.title.line1}</span>
                  <span className={`block ${slide.accentClass}`}>{slide.title.line2}</span>
                </h1>
              </div>
              <p key={slide.body} className="mt-6 max-w-3xl text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed animate-hero-content">{slide.body}</p>
              <ul className="mt-6 flex flex-wrap justify-center gap-2.5 max-w-3xl animate-hero-item" aria-label="Capabilities">
                {visibleTags.map((tag) => <li key={tag} className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[10px] uppercase tracking-widest font-bold">{tag}</li>)}
              </ul>
              <div key={slide.eyebrow} className="flex flex-wrap justify-center gap-3 mt-8 animate-hero-item">
                <button type="button" onClick={onContact} className="levitate bg-white text-black rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2">Start a project <ArrowRight size={16} /></button>
                <button type="button" onClick={onExplore} className="levitate border border-white/30 bg-white/5 backdrop-blur rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest">Explore services</button>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3" aria-label="Hero slides">
              {heroSlides.map((item, index) => <button key={item.eyebrow} type="button" onClick={() => setActive(index)} aria-label={`Go to slide ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={`h-1.5 rounded-full transition-all ${active === index ? 'w-10 bg-white' : 'w-5 bg-white/35'}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
