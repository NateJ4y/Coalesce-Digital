import { ArrowRight, Check, Sparkles } from 'lucide-react';

export type DetailService = {
  id: string;
  title: string;
  price: string;
  description: string;
  value: string[];
  image: string;
  accent: string;
};

export const detailServices: DetailService[] = [
  { id: 'websites', title: 'Websites', price: 'From R1,500', description: 'A high-trust digital home that answers the questions your customer has before they ever call you.', value: ['Mobile-first experience', 'Clear conversion paths', 'Fast, credible presentation'], image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#b3de4f]' },
  { id: 'applications', title: 'Applications', price: 'From R5,000', description: 'Turn a website into a useful product with portals, calculators, dashboards, bookings or custom workflows.', value: ['Purpose-built user journeys', 'Responsive interfaces', 'Built around your process'], image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#5b8cff]' },
  { id: 'conversion', title: 'Conversion', price: 'From R1,500', description: 'Remove friction between attention and action so more of the people who visit know exactly what to do next.', value: ['Sharper CTAs', 'Trust-building structure', 'Less confusion, more action'], image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#b3de4f]' },
  { id: 'workflows', title: 'Workflows', price: 'From R2,500', description: 'Connect the moving parts of your business so information, tasks and follow-ups flow without constant manual chasing.', value: ['Connected tools', 'Automated handoffs', 'Fewer repetitive tasks'], image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#5b8cff]' },
  { id: 'lead-capture', title: 'Lead Capture', price: 'From R1,500', description: 'Give interested people a frictionless path to enquire, book, call or start a conversation.', value: ['Smart forms', 'WhatsApp-ready CTAs', 'Lead routing'], image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#b3de4f]' },
  { id: 'ai', title: 'AI', price: 'From R2,500', description: 'Use AI where it creates leverage — answering questions, organizing information and helping repetitive work move faster.', value: ['AI assistants', 'Knowledge-based agents', 'Human-approved automation'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#a855f7]' },
  { id: 'content', title: 'Content', price: 'From R1,000', description: 'Create a consistent stream of useful, recognizable content that gives people a reason to stop, understand and remember you.', value: ['Content direction', 'Social creatives', 'Reusable content systems'], image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#b3de4f]' },
  { id: 'social-management', title: 'Social Management', price: 'From R1,500/mo', description: 'Keep your brand active and intentional without making you the person who has to remember every post.', value: ['Planning & publishing', 'Community touchpoints', 'Monthly reporting'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#5b8cff]' },
  { id: 'growth', title: 'Growth', price: 'From R2,500', description: 'Build a digital growth loop where visibility, leads, conversion and follow-up improve together instead of in isolation.', value: ['Growth opportunities', 'Performance feedback', 'Connected digital systems'], image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#b3de4f]' },
  { id: 'brand-systems', title: 'Brand Systems', price: 'From R1,000', description: 'Turn scattered visuals into a recognizable system that makes your business look deliberate, consistent and ready for the next level.', value: ['Visual direction', 'Brand consistency', 'Reusable guidelines'], image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#a855f7]' },
  { id: 'design', title: 'Design', price: 'From R600', description: 'Make the message easier to understand and harder to ignore with sharp creative built for the platform it lives on.', value: ['Campaign graphics', 'Presentations & collateral', 'Digital-first creative'], image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#5b8cff]' },
  { id: 'marketing', title: 'Marketing', price: 'From R1,000', description: 'Put your offer in the right places with a clearer message, stronger creative and a digital route toward customers.', value: ['Campaign strategy', 'SEO foundations', 'Digital acquisition support'], image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=85', accent: 'text-[#b3de4f]' },
];

export function DetailServiceSection({ service, onContact }: { service: DetailService; onContact: (name?: string) => void }) {
  return <section id={service.id} className="scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
    <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${service.accent}`}>Coalesce / {service.title}</p>
        <h2 className="mt-3 max-w-3xl font-antonio text-5xl font-bold uppercase leading-[0.9] sm:text-7xl">{service.title}<span className="text-neutral-300">.</span></h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">{service.description}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {service.value.map(point => <div key={point} className="rounded-2xl border border-black/10 bg-white p-4"><Check size={16} className="mb-3" aria-hidden="true" /><p className="text-xs font-bold uppercase tracking-wider">{point}</p></div>)}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="font-antonio text-4xl font-bold">{service.price}</span>
          <button type="button" onClick={() => onContact(service.title)} className="levitate inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white">Make this happen <ArrowRight size={14} /></button>
        </div>
      </div>
      <div className="relative lg:col-span-5">
        <div className="overflow-hidden rounded-[2rem] bg-neutral-200 shadow-sm">
          <img src={service.image} alt={service.title} loading="lazy" className="block aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
        </div>
        <div className="absolute -bottom-5 -left-3 rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:-left-5">
          <Sparkles size={16} aria-hidden="true" />
          <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-neutral-500">Built for action</p>
        </div>
      </div>
    </div>
  </section>;
}
