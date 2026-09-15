import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CoalesceLogoMark } from './CoalesceLogo';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
}

export function Navbar({ onOpenContact, onOpenAbout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about-preview', 'services', 'tools', 'packages', 'portfolio', 'testimonials', 'blog'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div
        id="site_menu_header"
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 rounded-full px-5 py-3 md:px-8 md:py-3.5 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-lg shadow-black/5 border border-neutral-200/80 backdrop-blur-md'
            : 'bg-white/75 shadow-sm border border-neutral-200/60 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo with Official Emblem */}
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Coalesce Digital Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-black">
            <CoalesceLogoMark className="w-full h-full text-black group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-poppins font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-black">
              COALESCE
            </span>
            <span className="font-poppins font-medium text-[7px] sm:text-[8px] tracking-[0.32em] uppercase text-neutral-500">
              DIGITAL
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs lg:text-[13px] font-medium tracking-[0.12em] uppercase font-poppins text-neutral-800">
          <button
            onClick={() => scrollTo('home')}
            className={`px-3 py-1.5 rounded-full transition-colors hover:text-black hover:bg-neutral-100 ${
              activeSection === 'home' ? 'text-black font-semibold bg-neutral-100' : 'text-neutral-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('services')}
            className={`px-3 py-1.5 rounded-full transition-colors hover:text-black hover:bg-neutral-100 ${
              activeSection === 'services' ? 'text-black font-semibold bg-neutral-100' : 'text-neutral-600'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('packages')}
            className={`px-3 py-1.5 rounded-full transition-colors hover:text-black hover:bg-neutral-100 ${
              activeSection === 'packages' ? 'text-black font-semibold bg-neutral-100' : 'text-neutral-600'
            }`}
          >
            Packages
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className={`px-3 py-1.5 rounded-full transition-colors hover:text-black hover:bg-neutral-100 ${
              activeSection === 'portfolio' ? 'text-black font-semibold bg-neutral-100' : 'text-neutral-600'
            }`}
          >
            Works
          </button>
          <button
            onClick={() => scrollTo('blog')}
            className={`px-3 py-1.5 rounded-full transition-colors hover:text-black hover:bg-neutral-100 ${
              activeSection === 'blog' ? 'text-black font-semibold bg-neutral-100' : 'text-neutral-600'
            }`}
          >
            Insights
          </button>
          <button
            onClick={onOpenAbout}
            className="px-3 py-1.5 rounded-full transition-colors text-neutral-600 hover:text-black hover:bg-neutral-100"
          >
            About
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2 bg-black text-white text-xs font-semibold uppercase tracking-[0.14em] font-poppins px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-sm"
          >
            <span>Let's talk</span>
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-800 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-lg border border-neutral-200 rounded-3xl p-6 shadow-xl flex flex-col gap-3 font-poppins uppercase text-sm tracking-wider md:hidden">
          <button
            onClick={() => scrollTo('home')}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            Services & Scope
          </button>
          <button
            onClick={() => scrollTo('tools')}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            Creative Tools
          </button>
          <button
            onClick={() => scrollTo('packages')}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            Social Media Packages
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            Selected Works
          </button>
          <button
            onClick={() => scrollTo('blog')}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            Blog & Insights
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAbout();
            }}
            className="text-left py-2 border-b border-neutral-100 font-medium text-neutral-800 hover:text-black"
          >
            About Coalesce
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="mt-2 w-full py-3 rounded-full bg-black text-white text-center font-semibold tracking-widest text-xs flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
