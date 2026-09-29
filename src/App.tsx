import { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { ContactModal } from './components/ContactModal';
import { Hero } from './components/Hero';
import { JourneySection } from './components/JourneySection';
import { Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import { ServicesSection } from './components/ServicesSection';
import { WhySection } from './components/WhySection';
import { DetailServiceSection } from './components/DetailServiceSection';

const ticker = ['Websites','Applications','Automation','Lead Acquisition','Social Media','Digital Marketing','Brand Systems','AI Workflows'];

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [service, setService] = useState('');

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    if (!targets.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-in-view'));
      return;
    }

    let lastScrollY = window.scrollY;
    let scrollingDown = false;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY !== lastScrollY) scrollingDown = currentY > lastScrollY;
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Anything already visible on first load starts in its final position.
    const viewportHeight = window.innerHeight;
    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08) {
        target.classList.add('is-in-view');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!scrollingDown) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // One-way reveal: once shown, it is never hidden or animated again.
            entry.target.classList.add('is-in-view');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const openContact = (selected = '') => {
    setService(selected);
    setContactOpen(true);
  };

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen overflow-x-hidden overscroll-x-none bg-[#f3f3f3] font-poppins text-[#111]">
      <Navbar onContact={() => openContact()} />
      <main id="top">
        <Hero onContact={() => openContact()} onExplore={() => go('services')} onTagClick={go} />
        <section data-scroll-reveal="section" className="overflow-hidden border-y border-black/10 bg-white py-5" aria-label="Coalesce services">
          <div data-scroll-reveal="right" className="animate-marquee">
            {[0,1].map((copy) => <div key={copy} className="flex shrink-0 gap-10 whitespace-nowrap pr-10 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500" aria-hidden={copy === 1}>
              {ticker.map((item) => <span key={item} className="flex items-center gap-10"><span>{item}</span><span>•</span></span>)}
            </div>)}
          </div>
        </section>
        <DetailServiceSection service={{ id: 'websites' }} onContact={openContact} />
        <ServicesSection onContact={openContact} />
        <DetailServiceSection service={{ id: 'workflows' }} onContact={openContact} />
        <JourneySection onContact={openContact} />
        <DetailServiceSection service={{ id: 'applications' }} onContact={openContact} />
        <PricingSection onContact={openContact} />
        <DetailServiceSection service={{ id: 'content' }} onContact={openContact} />
        <WhySection onContact={openContact} />
        <DetailServiceSection service={{ id: 'brand-systems' }} onContact={openContact} />
        <DetailServiceSection service={{ id: 'growth' }} onContact={openContact} />
      </main>
      <footer data-scroll-reveal="section" className="bg-black px-5 pt-16 pb-8 text-white sm:px-8">
        <div data-scroll-reveal="up" className="mx-auto grid max-w-[80rem] gap-8 lg:grid-cols-4 lg:gap-10">
          <div><div className="font-antonio text-3xl font-bold">COALESCE<span className="text-neutral-500">.</span></div><p className="mt-4 max-w-xs text-sm text-neutral-400">Digital transformation and business growth for businesses ready to build, connect and grow.</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Explore</p><div className="mt-4 space-y-3 text-sm"><a className="footer-link" href="#services">Services</a><a className="footer-link" href="#journey">How it works</a><a className="footer-link" href="#pricing">Pricing</a><a className="footer-link" href="#work">Why Coalesce</a></div></div>
          <div><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Contact</p><div className="mt-4 space-y-3 text-sm"><a className="footer-link flex items-center gap-2" href="mailto:coalesceuniversity@gmail.com"><Mail size={14}/>coalesceuniversity@gmail.com</a><a className="footer-link flex items-center gap-2" href="tel:+27832492219"><Phone size={14}/>+27 83 249 2219</a></div></div>
          <div><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Availability</p><p className="mt-4 text-sm text-neutral-400">South Africa • Serving worldwide</p><p className="mt-2 text-sm text-neutral-400">Mon–Fri · 08:00–18:00 SAST</p></div>
        </div>
        <div data-scroll-reveal="up" className="mx-auto mt-14 flex max-w-[80rem] flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-neutral-600 sm:flex-row"><span>© {new Date().getFullYear()} Coalesce Digital</span><span>Build. Connect. Grow.</span></div>
      </footer>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} initialService={service} />
    </div>
  );
}