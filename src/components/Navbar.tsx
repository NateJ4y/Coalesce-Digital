import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-6xl bg-transparent px-5 py-2.5 text-white" aria-label="Main navigation">
    <div className="flex h-10 items-center justify-center gap-6 sm:gap-10">
      <button type="button" onClick={() => go('top')} className="h-9 inline-flex items-center justify-center shrink-0" aria-label="Coalesce home"><img src="/Coalesce_Logo_BW-removebg-preview.png" alt="Coalesce" className="h-7 sm:h-8 w-auto object-contain brightness-0 invert" /></button>
      <div className="hidden md:flex h-10 items-center justify-center gap-10 lg:gap-12 text-[13px] uppercase tracking-[0.18em] font-bold leading-[1] text-white">
        <button type="button" onClick={() => go('services')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">Services</button><button type="button" onClick={() => go('journey')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">How it works</button><button type="button" onClick={() => go('pricing')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">Pricing</button><button type="button" onClick={() => go('work')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">Why Coalesce</button>
      </div>
      <button type="button" onClick={onContact} className="hidden md:inline-flex h-10 items-center justify-center gap-2 bg-transparent text-white border border-white/30 rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.16em] leading-[1] transition-transform duration-200 ease-out hover:scale-110">Start a project <ArrowUpRight size={14}/></button>
      <button type="button" className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 h-9 w-9 inline-flex items-center justify-center text-white" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
    {open && <div id="mobile-menu" className="md:hidden pt-5 pb-2 grid justify-items-center gap-4 text-sm font-bold uppercase tracking-widest text-white" role="menu"><button type="button" role="menuitem" onClick={() => go('services')}>Services</button><button type="button" role="menuitem" onClick={() => go('journey')}>How it works</button><button type="button" role="menuitem" onClick={() => go('pricing')}>Pricing</button><button type="button" role="menuitem" onClick={() => { setOpen(false); onContact(); }}>Start a project</button></div>}
  </nav>;
}