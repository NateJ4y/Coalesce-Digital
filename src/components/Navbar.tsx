import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';

const serviceGroups = [
  { label: 'BUILD & CONVERT', hint: 'Get your business online and turn attention into action.', items: ['Websites', 'Landing Pages', 'eCommerce / Shopify', 'Web Applications'] },
  { label: 'AUTOMATE & CONNECT', hint: 'Remove repetitive work and keep leads moving.', items: ['Lead Scraping', 'Client Acquisition', 'Email & WhatsApp Workflows', 'AI Agents & Chatbots'] },
  { label: 'SHOW UP & GROW', hint: 'Stay visible, consistent and memorable.', items: ['Social Media Management', 'Content Creation', 'Brand Systems', 'Digital Marketing'] },
];

export function Navbar({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => { setOpen(false); setServicesOpen(false); };
  const go = (id: string) => {
    closeMenu();
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
  };

  const serviceTarget = (item: string) => {
    const targets: Record<string, string> = {
      'Websites': 'websites', 'Landing Pages': 'websites', 'eCommerce / Shopify': 'websites',
      'Web Applications': 'applications', 'Lead Scraping': 'lead-capture', 'Client Acquisition': 'lead-capture',
      'Email & WhatsApp Workflows': 'workflows', 'AI Agents & Chatbots': 'ai',
      'Social Media Management': 'social-management', 'Content Creation': 'content',
      'Brand Systems': 'brand-systems', 'Digital Marketing': 'marketing',
    };
    go(targets[item] ?? 'services');
  };

  return <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-6xl bg-transparent px-5 py-2.5 text-white" aria-label="Main navigation">
    <div className="flex h-10 items-center justify-center gap-6 sm:gap-10">
      <button type="button" onClick={() => go('top')} className="h-10 sm:h-12 md:h-14 inline-flex items-center justify-center shrink-0" aria-label="Coalesce home"><img src="/Coalesce_Logo_BW-removebg-preview.png" alt="Coalesce" className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert" /></button>
      <div className="hidden md:flex h-10 items-center justify-center gap-10 lg:gap-12 text-[13px] uppercase tracking-[0.18em] font-bold leading-[1] text-white">
        <button type="button" onClick={() => go('services')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">SERVICES</button>
        <button type="button" onClick={() => go('journey')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">HOW IT WORKS</button>
        <button type="button" onClick={() => go('pricing')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">PRICING</button>
        <button type="button" onClick={() => go('work')} className="transition-transform duration-200 ease-out hover:scale-[1.3]">WHY COALESCE</button>
      </div>
      <button type="button" onClick={onContact} className="hidden md:inline-flex h-10 items-center justify-center gap-2 bg-transparent text-white border border-white/30 rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.16em] leading-[1] transition-transform duration-200 ease-out hover:scale-110">START A PROJECT <ArrowUpRight size={14}/></button>
      <button type="button" className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center text-white" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu"><Menu size={22}/></button>
    </div>

    {open && <div id="mobile-menu" className="fixed inset-0 z-[100] min-h-dvh overflow-y-auto bg-black text-white px-6 pb-10 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="mx-auto flex w-full max-w-xl items-center justify-between">
        <button type="button" onClick={() => go('top')} className="h-12 inline-flex items-center" aria-label="Coalesce home"><img src="/Coalesce_Logo_BW-removebg-preview.png" alt="Coalesce" className="h-12 w-auto object-contain brightness-0 invert" /></button>
        <button type="button" onClick={closeMenu} className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-white/20" aria-label="Close menu"><X size={24}/></button>
      </div>

      <div className="mx-auto mt-12 w-full max-w-xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Navigate</p>
        <div className="mt-5 grid gap-2">
          <button type="button" onClick={() => { setServicesOpen(v => !v); }} className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left" aria-expanded={servicesOpen}>
            <span className="font-antonio text-4xl font-bold uppercase">Services</span>
            <ChevronDown size={24} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {servicesOpen && <div className="pb-4 pt-2 space-y-2">
            {serviceGroups.map((group) => <div key={group.label} className="border-b border-white/10 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">{group.label}</p>
              <p className="mt-1 max-w-sm text-xs leading-relaxed text-white/50">{group.hint}</p>
              <div className="mt-3 grid grid-cols-1 gap-1">
                {group.items.map((item) => <button key={item} type="button" onClick={() => serviceTarget(item)} className="group flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white">
                  <span>{item}</span><ArrowUpRight size={14} className="opacity-30 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>)}
              </div>
            </div>)}
          </div>}

          <button type="button" onClick={() => go('journey')} className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left"><span className="font-antonio text-4xl font-bold uppercase">How It Works</span><ArrowUpRight size={24}/></button>
          <button type="button" onClick={() => go('pricing')} className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left"><span className="font-antonio text-4xl font-bold uppercase">Pricing</span><ArrowUpRight size={24}/></button>
          <button type="button" onClick={() => go('work')} className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left"><span className="font-antonio text-4xl font-bold uppercase">Why Coalesce</span><ArrowUpRight size={24}/></button>
        </div>

        <button type="button" onClick={() => { closeMenu(); onContact(); }} className="mt-8 flex w-full items-center justify-between rounded-full bg-white px-6 py-4 text-left text-black">
          <span className="text-xs font-bold uppercase tracking-[0.18em]">Start a Project</span><ArrowUpRight size={18}/>
        </button>
      </div>
    </div>}
  </nav>;
}
