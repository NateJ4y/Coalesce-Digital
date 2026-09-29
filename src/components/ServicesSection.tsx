import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { services } from '../data/site';

export function ServicesSection({ onContact }: { onContact: (service?: string) => void }) {
  const [open, setOpen] = useState<number | null>(null);
  return <section id="services" className="px-5 sm:px-8 py-20 sm:py-24 lg:py-28 max-w-[80rem] mx-auto" aria-labelledby="services-title">
    <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
      <p className="font-satisfy text-xl text-neutral-500">Everything digital, connected.</p>
      <h2 id="services-title" className="font-antonio font-bold uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] mt-2">What we do</h2>
      <p className="mt-6 text-neutral-600 text-lg">You can buy one service. Or we can connect several into a system that moves a customer from discovery to enquiry to sale.</p>
    </div>
    <div className="border-t border-black/20">{services.map((item,index)=>{const Icon=item.icon;const active=open===index;const imageFirst=index%2===1;return <article key={item.title} data-service-card={index} className="border-b border-black/15 py-6 sm:py-8 lg:py-9" data-scroll-reveal="up">
      <button type="button" className="group w-full flex items-center justify-between text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4" onClick={()=>setOpen(active?null:index)} aria-expanded={active} aria-controls={`service-panel-${index}`}><span className="sr-only">{active ? "Close" : "Open"} {item.title}</span>
        <span className="flex items-center gap-4 sm:gap-7"><span className="text-xs text-neutral-400 font-bold">{item.number}</span><Icon className="hidden sm:block" size={25} aria-hidden="true" /><span><span className="font-antonio font-bold uppercase text-3xl sm:text-5xl lg:text-6xl leading-[0.95] block transition-transform duration-300 origin-left group-hover:translate-x-1">{item.title}</span><span className="text-sm text-neutral-500 mt-1 block">{item.short}</span></span></span>
        <span aria-hidden="true" className={`ml-5 shrink-0 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-black/15 bg-neutral-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-black group-hover:text-white group-hover:border-black ${active ? 'rotate-180 bg-black text-white border-black' : ''}`}><ChevronDown size={20} className="transition-transform duration-300" /></span>
      </button>
      {active && <div id={`service-panel-${index}`} className="grid lg:grid-cols-12 gap-8 pt-7 sm:pt-8 pl-0 sm:pl-14 lg:pl-16 items-center animate-[service-panel-in_350ms_ease-out]">
        <div className={`lg:col-span-7 min-w-0 ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">{item.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">{item.features.map(f=><span key={f} className="px-3 py-2 rounded-full bg-neutral-100 text-[10px] uppercase tracking-widest font-bold">{f}</span>)}</div>
          <button type="button" onClick={()=>onContact(item.title)} className="levitate mt-8 bg-black text-white rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-widest">Talk about {item.title} <ArrowUpRight className="inline ml-2" size={14} /></button>
        </div>
        <div className={`lg:col-span-5 ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
          {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} project preview`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 rounded-3xl">
            <div className="relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[16/10] shadow-sm">
              <img src={item.image} alt={item.imageAlt} loading="lazy" className="block w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-black/80 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                <span>View project</span><ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </div>
          </a> : <div className="overflow-hidden rounded-3xl bg-neutral-100 aspect-[16/10] shadow-sm">
            <img src={item.image} alt={item.imageAlt} loading="lazy" className="block w-full h-full object-cover object-center" />
          </div>}
          <div className="mt-5 rounded-3xl bg-neutral-100 p-6 sm:p-7">
            <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Starting investment</p>
            <p className="font-antonio font-bold text-5xl mt-2">{item.price}</p>
            <p className="text-xs text-neutral-500 mt-3">Final scope is quoted around your goals, complexity and growth stage.</p>
          </div>
        </div>
      </div>}
    </article>})}</div>
  </section>;
}
