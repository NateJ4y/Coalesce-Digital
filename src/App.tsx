import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Instagram,
  Megaphone,
  Menu,
  MousePointer2,
  Palette,
  Search,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { ContactModal } from './components/ContactModal';

const services = [
  {
    number: '01',
    title: 'Web & Apps',
    short: 'Build the digital home.',
    description: 'Websites, landing pages, eCommerce, client portals and web applications designed to turn attention into action.',
    icon: Code2,
    features: ['Business websites', 'Landing pages', 'eCommerce / Shopify', 'Web applications', 'UI/UX design', 'WordPress & Elementor'],
    price: 'From R1,500',
  },
  {
    number: '02',
    title: 'Automation',
    short: 'Make the work move itself.',
    description: 'We connect the tools behind your business so leads, tasks, follow-ups and repetitive work keep moving without manual chasing.',
    icon: Workflow,
    features: ['Lead scraping', 'Client acquisition systems', 'Email automation', 'WhatsApp workflows', 'AI agents & chatbots', 'Internal task automation'],
    price: 'From R2,500',
  },
  {
    number: '03',
    title: 'Social Media',
    short: 'Stay visible. Stay relevant.',
    description: 'Strategy, content and management built around consistent communication, stronger positioning and measurable growth.',
    icon: Instagram,
    features: ['Content strategy', 'Social media management', 'Static & carousel design', 'Short-form content', 'Community management', 'Monthly reporting'],
    price: 'From R1,500/mo',
  },
  {
    number: '04',
    title: 'Digital Design & Marketing',
    short: 'Make the brand impossible to ignore.',
    description: 'Brand systems, creative design and digital marketing that give your business a sharper identity and a clearer route to customers.',
    icon: Palette,
    features: ['Brand identity', 'Graphic & content design', 'Digital campaigns', 'Paid media support', 'SEO foundations', 'Marketing strategy'],
    price: 'From R1,000',
  },
];

const journey = [
  ['01', 'Get discovered', 'Digital design + marketing puts your business in front of the right people.'],
  ['02', 'Earn attention', 'Social content and a strong brand make people stop, understand and remember you.'],
  ['03', 'Convert interest', 'A focused website, landing page or application gives prospects somewhere to act.'],
  ['04', 'Capture leads', 'Lead scraping, forms and acquisition workflows bring opportunities into your pipeline.'],
  ['05', 'Automate the follow-up', 'Email, WhatsApp, AI and task workflows reduce the manual work between enquiry and sale.'],
  ['06', 'Grow the machine', 'We measure what is working, improve the system and add the next digital layer.'],
];

const packages = [
  { name: 'Launch', price: 'R1,500+', label: 'Start here', items: ['One focused website or landing page', 'Mobile responsive design', 'Basic brand direction', 'Lead capture CTA'] },
  { name: 'Growth', price: 'R5,000+', label: 'Most popular', items: ['Professional website', 'Content/design system', 'Conversion-focused structure', 'Lead acquisition setup', 'Automation starter'] },
  { name: 'Scale', price: 'R10,000+', label: 'Build the machine', items: ['Advanced website / application', 'Marketing & content system', 'Lead scraping + acquisition', 'Custom automations', 'AI workflow opportunities'] },
];

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [service, setService] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState(0);

  const openContact = (selected = '') => {
    setService(selected);
    setContactOpen(true);
    setMenuOpen(false);
  };

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#111] font-poppins overflow-x-hidden">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-6xl rounded-full bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg px-5 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => go('top')} className="font-antonio font-bold text-2xl tracking-tight">COALESCE<span className="text-neutral-400">.</span></button>
          <div className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.14em] font-bold">
            <button onClick={() => go('services')}>Services</button>
            <button onClick={() => go('journey')}>How it works</button>
            <button onClick={() => go('pricing')}>Pricing</button>
            <button onClick={() => go('work')}>Why Coalesce</button>
          </div>
          <button onClick={() => openContact()} className="hidden md:flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest">Start a project <ArrowUpRight size={14}/></button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <div className="md:hidden pt-5 pb-2 grid gap-4 text-sm font-bold uppercase tracking-widest"><button onClick={() => go('services')}>Services</button><button onClick={() => go('journey')}>How it works</button><button onClick={() => go('pricing')}>Pricing</button><button onClick={() => openContact()}>Start a project</button></div>}
      </nav>

      <main id="top">
        <section className="min-h-[92vh] flex items-center px-5 sm:px-8 pt-32 pb-20 max-w-7xl mx-auto">
          <div className="w-full grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 border border-black/15 rounded-full px-4 py-2 mb-7 text-[10px] font-bold uppercase tracking-[0.2em]"><span className="w-2 h-2 rounded-full bg-[#b3de4f]"/> Digital transformation + growth</div>
              <h1 className="font-antonio font-bold uppercase text-[17vw] sm:text-[12vw] lg:text-[9.5rem] leading-[0.78] tracking-[-0.05em]">Build.<br/><span className="text-neutral-400">Connect.</span><br/>Grow.</h1>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl text-neutral-600 leading-relaxed">Coalesce Digital brings <strong className="text-black">web, automation, social media, design and marketing</strong> into one connected growth system — so your business does not just look digital. It operates digitally.</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <button onClick={() => openContact()} className="bg-black text-white rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2">Start a project <ArrowRight size={16}/></button>
                <button onClick={() => go('services')} className="border border-black/20 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest">Explore services</button>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <div className="bg-black text-white rounded-[2rem] p-7 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border border-white/20"/><div className="absolute right-6 top-6 w-20 h-20 rounded-full border border-[#b3de4f]/50"/>
                <Sparkles className="text-[#b3de4f] mb-12" size={28}/>
                <p className="text-sm text-neutral-300 leading-relaxed">One partner. Four digital disciplines. One customer journey.</p>
                <div className="mt-8 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-widest font-bold"><span className="bg-white/10 rounded-xl p-3">Web + Apps</span><span className="bg-white/10 rounded-xl p-3">Automation</span><span className="bg-white/10 rounded-xl p-3">Social</span><span className="bg-white/10 rounded-xl p-3">Design + Marketing</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white py-5 overflow-hidden"><div className="flex gap-10 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500"><span>Websites</span><span>•</span><span>Applications</span><span>•</span><span>Automation</span><span>•</span><span>Lead Acquisition</span><span>•</span><span>Social Media</span><span>•</span><span>Digital Marketing</span><span>•</span><span>Brand Systems</span><span>•</span><span>AI Workflows</span></div></section>

        <section id="services" className="px-5 sm:px-8 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16"><p className="font-satisfy text-xl text-neutral-500">Everything digital, connected.</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-2">What we do</h2><p className="mt-6 text-neutral-600 text-lg">You can buy one service. Or we can connect several into a system that moves a customer from discovery to enquiry to sale.</p></div>
          <div className="border-t border-black/20">
            {services.map((item, index) => { const Icon = item.icon; const active = openService === index; return <div key={item.title} className="border-b border-black/15 py-7 sm:py-9">
              <button className="w-full flex items-center justify-between text-left" onClick={() => setOpenService(active ? -1 : index)}><div className="flex items-center gap-4 sm:gap-7"><span className="text-xs text-neutral-400 font-bold">{item.number}</span><Icon className="hidden sm:block" size={25}/><div><h3 className="font-antonio font-bold uppercase text-4xl sm:text-6xl">{item.title}</h3><p className="text-sm text-neutral-500 mt-1">{item.short}</p></div></div><ChevronDown className={active ? 'rotate-180 transition-transform' : 'transition-transform'} /></button>
              {active && <div className="grid lg:grid-cols-12 gap-8 pt-8 pl-8 sm:pl-16"><div className="lg:col-span-7"><p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">{item.description}</p><div className="mt-7 flex flex-wrap gap-2">{item.features.map(f => <span key={f} className="px-3 py-2 rounded-full bg-neutral-100 text-[10px] uppercase tracking-widest font-bold">{f}</span>)}</div><button onClick={() => openContact(item.title)} className="mt-8 bg-black text-white rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-widest">Talk about {item.title} <ArrowUpRight className="inline ml-2" size={14}/></button></div><div className="lg:col-span-5 bg-neutral-100 rounded-3xl p-7"><p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Starting investment</p><p className="font-antonio font-bold text-5xl mt-2">{item.price}</p><p className="text-xs text-neutral-500 mt-3">Final scope is quoted around your goals, complexity and growth stage.</p></div></div>}
            </div>})}
          </div>
        </section>

        <section id="journey" className="bg-black text-white px-5 sm:px-8 py-24">
          <div className="max-w-7xl mx-auto"><div className="max-w-3xl mb-16"><p className="font-satisfy text-xl text-neutral-400">The Coalesce customer journey</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-2">From stranger<br/><span className="text-neutral-500">to customer.</span></h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">{journey.map(([num,title,desc]) => <div key={num} className="bg-black p-7 min-h-64"><span className="text-[#b3de4f] text-xs font-bold">{num}</span><h3 className="font-antonio font-bold uppercase text-3xl mt-16">{title}</h3><p className="text-sm text-neutral-400 leading-relaxed mt-3">{desc}</p></div>)}</div>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"><p className="text-neutral-400 max-w-xl">This is the difference: we don't sell disconnected digital tasks. We build the pieces around how your customer actually moves.</p><button onClick={() => openContact('Full Digital Growth System')} className="bg-[#b3de4f] text-black rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest">Build my system <ArrowRight className="inline ml-2" size={15}/></button></div>
          </div>
        </section>

        <section id="pricing" className="px-5 sm:px-8 py-24 max-w-7xl mx-auto"><div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"><div><p className="font-satisfy text-xl text-neutral-500">Clear starting points.</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-2">Pricing</h2></div><p className="max-w-md text-neutral-600">Transparent entry pricing. Custom builds are scoped after we understand your business, audience and objectives.</p></div>
          <div className="grid lg:grid-cols-3 gap-4">{packages.map((pack,index)=><div key={pack.name} className={`rounded-[2rem] p-7 border ${index===1?'bg-black text-white border-black':'bg-white border-black/10'}`}><div className="flex justify-between items-center"><span className={`text-[10px] uppercase tracking-widest font-bold ${index===1?'text-[#b3de4f]':'text-neutral-500'}`}>{pack.label}</span><span className="text-xs">0{index+1}</span></div><h3 className="font-antonio font-bold uppercase text-5xl mt-12">{pack.name}</h3><p className="font-antonio text-4xl mt-2">{pack.price}</p><ul className="mt-8 space-y-3">{pack.items.map(i=><li key={i} className="flex gap-2 text-sm"><Check size={17} className={index===1?'text-[#b3de4f]':'text-black'}/>{i}</li>)}</ul><button onClick={()=>openContact(`${pack.name} Package`)} className={`w-full mt-9 rounded-full py-3.5 text-[11px] font-bold uppercase tracking-widest ${index===1?'bg-white text-black':'bg-black text-white'}`}>Choose {pack.name}</button></div>)}</div>
          <div className="mt-5 rounded-3xl bg-neutral-100 p-6 flex flex-col md:flex-row gap-5 md:items-center justify-between"><div><p className="font-bold">Need something more specific?</p><p className="text-sm text-neutral-500">Ask about standalone branding, campaigns, apps, automations, social management or a full digital transformation.</p></div><button onClick={()=>openContact('Custom Scope')} className="shrink-0 rounded-full border border-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest">Request custom quote</button></div>
        </section>

        <section id="work" className="bg-white border-y border-black/10 px-5 sm:px-8 py-24"><div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-7"><p className="font-satisfy text-xl text-neutral-500">Why Coalesce?</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-[0.85] mt-2">One digital<br/>partner.<br/><span className="text-neutral-400">Less chaos.</span></h2></div><div className="lg:col-span-5 space-y-5">{[['Strategy','We start with the business problem, not the tool.'],['Execution','Design and technology are built to work together.'],['Systems','We connect acquisition, conversion and operations.'],['Growth','Every digital asset has a job: attention, trust, action or efficiency.']].map(([a,b])=><div key={a} className="border-b border-black/10 pb-5"><div className="flex gap-3"><Zap size={18}/><div><h3 className="font-bold">{a}</h3><p className="text-sm text-neutral-500 mt-1">{b}</p></div></div></div>)}</div></div></section>

        <section className="px-5 sm:px-8 py-24 max-w-7xl mx-auto"><div className="rounded-[2.5rem] bg-[#b3de4f] p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"><div><p className="text-sm font-bold uppercase tracking-widest">Ready when you are.</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-3 max-w-3xl">Stop collecting tools.<br/>Build the system.</h2></div><button onClick={()=>openContact()} className="bg-black text-white rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2">Start the conversation <ArrowRight size={16}/></button></div></section>
      </main>

      <footer className="bg-black text-white px-5 sm:px-8 pt-16 pb-8"><div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10"><div className="lg:col-span-2"><div className="font-antonio font-bold text-4xl">COALESCE.</div><p className="text-neutral-500 max-w-md mt-4 text-sm leading-relaxed">Digital transformation and business growth through web, automation, social media, design and marketing.</p></div><div><p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4">Services</p><div className="grid gap-2 text-sm text-neutral-300">{services.map(s=><button key={s.title} onClick={()=>openContact(s.title)} className="text-left hover:text-white">{s.title}</button>)}</div></div><div><p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4">Contact</p><button onClick={()=>openContact()} className="text-sm text-neutral-300 hover:text-white">Start a project →</button></div></div><div className="max-w-7xl mx-auto border-t border-white/10 mt-14 pt-5 text-[10px] uppercase tracking-widest text-neutral-600">© {new Date().getFullYear()} Coalesce Digital. Build. Connect. Grow.</div></footer>

      <ContactModal isOpen={contactOpen} onClose={()=>setContactOpen(false)} initialService={service}/>
    </div>
  );
}
