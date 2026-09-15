import { ArrowUpRight, Mail, Phone, Instagram, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { CoalesceLogoMark } from './CoalesceLogo';

interface FooterCTAProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onNavigate: (sectionId: string) => void;
}

export function FooterCTA({ onOpenContact, onOpenAbout, onNavigate }: FooterCTAProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#111111] text-white pt-24 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Top CTA Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-neutral-800">
          <div>
            <span className="font-satisfy text-xl text-neutral-400 block mb-3">
              Ready to elevate your digital presence?
            </span>
            <h2 className="font-antonio font-bold uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-white">
              Time To<br />Coalesce!
            </h2>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-4 bg-[#f3f3f3] hover:bg-white text-black rounded-full p-2 pl-8 pr-3 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span className="font-poppins text-sm font-bold tracking-[0.16em] uppercase">
                Let's Talk!
              </span>
              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-300">
          {/* Email */}
          <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-white">
              <Mail className="w-4 h-4 text-[#b3de4f]" />
              <h3 className="font-antonio font-semibold uppercase text-base tracking-widest">
                Email Address
              </h3>
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-poppins text-sm md:text-base text-neutral-300 hover:text-white transition-colors break-all"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4 text-[#b3de4f]" />
              <h3 className="font-antonio font-semibold uppercase text-base tracking-widest">
                Call / WhatsApp
              </h3>
            </div>
            <a
              href={`tel:+${CONTACT_INFO.phone}`}
              className="font-poppins text-sm md:text-base text-neutral-300 hover:text-white transition-colors"
            >
              {CONTACT_INFO.phoneFormatted}
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-white">
              <Instagram className="w-4 h-4 text-[#b3de4f]" />
              <h3 className="font-antonio font-semibold uppercase text-base tracking-widest">
                Instagram
              </h3>
            </div>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins text-sm md:text-base text-neutral-300 hover:text-white transition-colors"
            >
              {CONTACT_INFO.instagram}
            </a>
          </div>
        </div>

        {/* Signature MexDot Rounded White Footer Pill Bar */}
        <div className="w-full bg-[#f3f3f3] text-black rounded-3xl md:rounded-full p-6 md:px-10 md:py-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nav links */}
          <nav className="flex items-center gap-6 text-xs font-poppins font-semibold uppercase tracking-widest text-neutral-800">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-black transition-colors"
            >
              Home
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="hover:text-black transition-colors"
            >
              Work
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-black transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Center Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center text-black">
              <CoalesceLogoMark className="w-full h-full text-black" />
            </div>
            <span className="font-poppins font-bold text-sm tracking-[0.16em] uppercase text-black">
              COALESCE DIGITAL
            </span>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-xs font-poppins text-neutral-500 font-medium">
            <span>© 2025 COALESCE DIGITAL</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-black"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
