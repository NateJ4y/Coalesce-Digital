import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-6xl rounded-full bg-white/55 backdrop-blur-2xl border border-white/30 shadow-lg shadow-black/10 px-5 py-2.5" aria-label="Main navigation">
    <div className="flex h-9 items-center justify-center gap-5 sm:gap-8">
      <button type="button" onClick={() => go('top')} className="h-9 inline-flex items-center justify-center shrink-0" aria-label="Coalesce home"><img src="/Coalesce_Logo_BW-removebg-preview.png" alt="Coalesce" className="h-7 sm:h-8 w-auto object-contain" /></button>
      <div className="hidden md:flex h-9 items-center justify-center gap-7 text-[11px] uppercase tracking-[0.14em] font-bold leading-[1]">
        <button type="button" onClick={() => go('services')}>Services</button><button type="button" onClick={() => go('journey')}>How it works</button><button type="button" onClick={() => go('pricing')}>Pricing</button><button type="button" onClick={() => go('work')}>Why Coalesce</button>
      </div>
      <button type="button" onClick={onContact} className="hidden md:inline-flex h-9 items-center justify-center gap-2 bg-black text-white rounded-full px-4 text-[10px] font-bold uppercase tracking-widest leading-[1]">Start a project <ArrowUpRight size={14}/></button>
      <button type="button" className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 h-9 w-9 inline-flex items-center justify-center" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
    {open && <div id="mobile-menu" className="md:hidden pt-5 pb-2 grid justify-items-center gap-4 text-sm font-bold uppercase tracking-widest" role="menu"><button type="button" role="menuitem" onClick={() => go('services')}>Services</button><button type="button" role="menuitem" onClick={() => go('journey')}>How it works</button><button type="button" role="menuitem" onClick={() => go('pricing')}>Pricing</button><button type="button" role="menuitem" onClick={() => { setOpen(false); onContact(); }}>Start a project</button></div>}
  </nav>;
}