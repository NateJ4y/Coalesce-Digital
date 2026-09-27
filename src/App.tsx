import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Instagram,
  Menu,
  Palette,
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

const heroSlides = [
  {
    eyebrow: '01 / BUILD + CONNECT',
    title: <>Build.<br/><span className="text-[#b3de4f]">Connect.</span></>,
    body: 'Build the digital foundation. Connect the pieces. Make every customer touchpoint work together.',
    image: 'https://images.unsplash.com/photo-1649429398909-db7ae841c386?auto=format&fit=crop&w=2000&q=85',
    icon: 'https://img.icons8.com/3d-fluency/94/code.png',
    tags: ['Websites', 'Applications', 'Brand systems'],
  },
  {
    eyebrow: '02 / DIGITAL TRANSFORMATION',
    title: <>Transform<br/><span className="text-[#7dd3fc]">the way you work.</span></>,
    body: 'Turn disconnected tools and manual processes into a digital operating system built around your business.',
    image: 'https://images.unsplash.com/photo-1722316805351-d5a56965f926?auto=format&fit=crop&w=2000&q=85',
    icon: 'https://img.icons8.com/3d-fluency/94/automation.png',
    tags: ['Systems', 'AI', 'Workflows'],
  },
  {
    eyebrow: '03 / WHAT WE OFFER',
    title: <>Four services.<br/><span className="text-[#b3de4f]">One system.</span></>,
    body: 'Web & Apps. Automation. Social Media. Digital Design & Marketing. Choose one or connect them into one growth engine.',
    image: 'https://images.unsplash.com/photo-1706508156658-f246b0c8753c?auto=format&fit=crop&w=2000&q=85',
    icon: 'https://img.icons8.com/3d-fluency/94/web.png',
    tags: ['Web + Apps', 'Automation', 'Social', 'Marketing'],
  },
  {
    eyebrow: '04 / AUTOMATION',
    title: <>Make the work<br/><span className="text-[#c4b5fd]">move itself.</span></>,
    body: 'Capture leads, scrape prospects, trigger follow-ups and automate repetitive work so your team can focus on growth.',
    image: 'https://images.unsplash.com/photo-1722405375190-8d0b2a765840?auto=format&fit=crop&w=2000&q=85',
    icon: 'https://img.icons8.com/3d-fluency/94/robot-2.png',
    tags: ['Lead scraping', 'Acquisition', 'AI agents'],
  },
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
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveHero((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll('button, a');
    nodes.forEach((node) => node.classList.add('float-on-scroll'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-floating'));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-floating');
      else entry.target.classList.remove('is-floating');
    }), { threshold: 0.18 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

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
        <section className="relative min-h-[100svh] flex items-center px-5 sm:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div key={slide.eyebrow} className={`absolute inset-0 transition-opacity duration-1000 ${activeHero === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" />
              <div className="absolute inset-0 bg-black/65" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            </div>
          ))}
          <div className="relative z-10 w-full max-w-[80rem] mx-auto text-white">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 min-w-0">
                <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-7 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className="w-2 h-2 rounded-full bg-[#b3de4f] animate-pulse" /> {heroSlides[activeHero].eyebrow}
                </div>
                <div className="relative min-h-[19rem] sm:min-h-[22rem] lg:min-h-[24rem]">
                  {heroSlides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 transition-all duration-700 ${activeHero === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
                      <h1 className="font-antonio font-bold uppercase text-[15vw] sm:text-[10vw] lg:text-[8.25rem] leading-[0.88] tracking-[-0.045em] max-w-[9.5ch] break-words">{slide.title}</h1>
                      <p className="mt-6 sm:mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed">{slide.body}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
                  <button onClick={() => openContact()} className="float-on-scroll bg-white text-black rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2">Start a project <ArrowRight size={16}/></button>
                  <button onClick={() => go('services')} className="float-on-scroll border border-white/30 bg-white/5 backdrop-blur rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest">Explore services</button>
                </div>
              </div>
              <div className="lg:col-span-4 min-w-0">
                <div className="float-on-scroll rounded-[2rem] p-6 sm:p-7 bg-black/55 backdrop-blur-xl border border-white/15 overflow-hidden">
                  <div className="flex items-start justify-between">
                    <img src={heroSlides[activeHero].icon} alt="" className="w-20 h-20 object-contain drop-shadow-xl" />
                    <span className="font-antonio text-5xl text-white/25">0{activeHero + 1}</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mt-8">Coalesce connects strategy, design, technology and automation into one customer journey.</p>
                  <div className="flex flex-wrap gap-2 mt-6">{heroSlides[activeHero].tags.map(tag => <span key={tag} className="rounded-full bg-white/10 border border-white/10 px-3 py-2 text-[9px] uppercase tracking-widest font-bold">{tag}</span>)}</div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex gap-2">
                {heroSlides.map((slide, index) => <button key={slide.eyebrow} aria-label={`Show slide ${index + 1}`} onClick={() => setActiveHero(index)} className={`h-1.5 rounded-full transition-all duration-500 ${activeHero === index ? 'w-14 bg-[#b3de4f]' : 'w-7 bg-white/30'}`} />)}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">01 — 04 / Digital transformation</div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white py-5 overflow-hidden" aria-label="Coalesce services ticker"><div className="animate-marquee"><div className="flex shrink-0 gap-10 whitespace-nowrap pr-10 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500"><span>Websites</span><span>•</span><span>Applications</span><span>•</span><span>Automation</span><span>•</span><span>Lead Acquisition</span><span>•</span><span>Social Media</span><span>•</span><span>Digital Marketing</span><span>•</span><span>Brand Systems</span><span>•</span><span>AI Workflows</span></div><div className="flex shrink-0 gap-10 whitespace-nowrap pr-10 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500" aria-hidden="true"><span>Websites</span><span>•</span><span>Applications</span><span>•</span><span>Automation</span><span>•</span><span>Lead Acquisition</span><span>•</span><span>Social Media</span><span>•</span><span>Digital Marketing</span><span>•</span><span>Brand Systems</span><span>•</span><span>AI Workflows</span></div></div></section>

        <section id="services" className="px-5 sm:px-8 py-20 sm:py-24 lg:py-28 max-w-[80rem] mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16"><p className="font-satisfy text-xl text-neutral-500">Everything digital, connected.</p><h2 className="font-antonio font-bold uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] mt-2">What we do</h2><p className="mt-6 text-neutral-600 text-lg">You can buy one service. Or we can connect several into a system that moves a customer from discovery to enquiry to sale.</p></div>
          <div className="border-t border-black/20">
            {services.map((item, index) => { const Icon = item.icon; const active = openService === index; return <div key={item.title} className="border-b border-black/15 py-6 sm:py-8 lg:py-9">
              <button className="w-full flex items-center justify-between text-left" onClick={() => setOpenService(active ? -1 : index)}><div className="flex items-center gap-4 sm:gap-7"><span className="text-xs text-neutral-400 font-bold">{item.number}</span><Icon className="hidden sm:block" size={25}/><div><h3 className="font-antonio font-bold uppercase text-3xl sm:text-5xl lg:text-6xl leading-[0.95]">{item.title}</h3><p className="text-sm text-neutral-500 mt-1">{item.short}</p></div></div><ChevronDown className={active ? 'rotate-180 transition-transform' : 'transition-transform'} /></button>
              {active && <div className="grid lg:grid-cols-12 gap-8 pt-7 sm:pt-8 pl-0 sm:pl-14 lg:pl-16"><div className="lg:col-span-7 min-w-0"><p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">{item.description}</p><div className="mt-7 flex flex-wrap gap-2">{item.features.map(f => <span key={f} className="px-3 py-2 rounded-full bg-neutral-100 text-[10px] uppercase tracking-widest font-bold">{f}</span>)}</div><button onClick={() => openContact(item.title)} className="mt-8 bg-black text-white rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-widest">Talk about {item.title} <ArrowUpRight className="inline ml-2" size={14}/></button></div><div className="lg:col-span-5 bg-neutral-100 rounded-3xl p-6 sm:p-7 self-start"><p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Starting investment</p><p className="font-antonio font-bold text-5xl mt-2">{item.price}</p><p className="text-xs text-neutral-500 mt-3">Final scope is quoted around your goals, complexity and growth stage.</p></div></div>}
            </div>})}
          </div>
        </section>

        <section id="journey" className="bg-black text-white px-5 sm:px-8 py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto"><div className="max-w-3xl mb-16"><p className="font-satisfy text-xl text-neutral-400">The Coalesce customer journey</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-2">From stranger<br/><span className="text-neutral-500">to customer.</span></h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">{journey.map(([num,title,desc]) => <div key={num} className="bg-black p-7 min-h-[15rem] sm:min-h-64"><span className="text-[#b3de4f] text-xs font-bold">{num}</span><h3 className="font-antonio font-bold uppercase text-3xl sm:text-4xl mt-12 sm:mt-16 leading-none">{title}</h3><p className="text-sm text-neutral-400 leading-relaxed mt-3">{desc}</p></div>)}</div>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"><p className="text-neutral-400 max-w-xl">This is the difference: we don't sell disconnected digital tasks. We build the pieces around how your customer actually moves.</p><button onClick={() => openContact('Full Digital Growth System')} className="bg-[#b3de4f] text-black rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest">Build my system <ArrowRight className="inline ml-2" size={15}/></button></div>
          </div>
        </section>

        <section id="pricing" className="px-5 sm:px-8 py-20 sm:py-24 lg:py-28 max-w-[80rem] mx-auto"><div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"><div><p className="font-satisfy text-xl text-neutral-500">Clear starting points.</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-2">Pricing</h2></div><p className="max-w-md text-neutral-600">Transparent entry pricing. Custom builds are scoped after we understand your business, audience and objectives.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">{packages.map((pack,index)=><div key={pack.name} className={`rounded-[2rem] p-6 sm:p-7 border h-full flex flex-col ${index===1?'bg-black text-white border-black':'bg-white border-black/10'}`}><div className="flex justify-between items-center"><span className={`text-[10px] uppercase tracking-widest font-bold ${index===1?'text-[#b3de4f]':'text-neutral-500'}`}>{pack.label}</span><span className="text-xs">0{index+1}</span></div><h3 className="font-antonio font-bold uppercase text-5xl mt-10 sm:mt-12">{pack.name}</h3><p className="font-antonio text-4xl mt-2">{pack.price}</p><ul className="mt-8 space-y-3">{pack.items.map(i=><li key={i} className="flex gap-2 text-sm"><Check size={17} className={index===1?'text-[#b3de4f]':'text-black'}/>{i}</li>)}</ul><button onClick={()=>openContact(`${pack.name} Package`)} className={`w-full mt-9 rounded-full py-3.5 text-[11px] font-bold uppercase tracking-widest ${index===1?'bg-white text-black':'bg-black text-white'}`}>Choose {pack.name}</button></div>)}</div>
          <div className="mt-4 sm:mt-5 rounded-3xl bg-neutral-100 p-5 sm:p-6 flex flex-col md:flex-row gap-5 md:items-center justify-between"><div><p className="font-bold">Need something more specific?</p><p className="text-sm text-neutral-500">Ask about standalone branding, campaigns, apps, automations, social management or a full digital transformation.</p></div><button onClick={()=>openContact('Custom Scope')} className="shrink-0 rounded-full border border-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest">Request custom quote</button></div>
        </section>

        <section id="work" className="bg-white border-y border-black/10 px-5 sm:px-8 py-20 sm:py-24 lg:py-28"><div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-7"><p className="font-satisfy text-xl text-neutral-500">Why Coalesce?</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-[0.85] mt-2">One digital<br/>partner.<br/><span className="text-neutral-400">Less chaos.</span></h2></div><div className="lg:col-span-5 space-y-5">{[['Strategy','We start with the business problem, not the tool.'],['Execution','Design and technology are built to work together.'],['Systems','We connect acquisition, conversion and operations.'],['Growth','Every digital asset has a job: attention, trust, action or efficiency.']].map(([a,b])=><div key={a} className="border-b border-black/10 pb-5"><div className="flex gap-3"><Zap size={18}/><div><h3 className="font-bold">{a}</h3><p className="text-sm text-neutral-500 mt-1">{b}</p></div></div></div>)}</div></div></section>

        <section className="px-5 sm:px-8 py-24 max-w-7xl mx-auto"><div className="rounded-[2.5rem] bg-[#b3de4f] p-7 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"><div><p className="text-sm font-bold uppercase tracking-widest">Ready when you are.</p><h2 className="font-antonio font-bold uppercase text-6xl sm:text-8xl leading-none mt-3 max-w-3xl">Stop collecting tools.<br/>Build the system.</h2></div><button onClick={()=>openContact()} className="bg-black text-white rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2">Start the conversation <ArrowRight size={16}/></button></div></section>
      </main>

      <footer className="bg-black text-white px-5 sm:px-8 pt-16 pb-8"><div className="max-w-[80rem] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"><div className="lg:col-span-2"><div className="font-antonio font-bold text-4xl">COALESCE.</div><p className="text-neutral-500 max-w-md mt-4 text-sm leading-relaxed">Digital transformation and business growth through web, automation, social media, design and marketing.</p></div><div><p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4">Services</p><div className="grid gap-2 text-sm text-neutral-300">{services.map(s=><button key={s.title} onClick={()=>openContact(s.title)} className="text-left hover:text-white">{s.title}</button>)}</div></div><div><p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-4">Contact</p><button onClick={()=>openContact()} className="text-sm text-neutral-300 hover:text-white">Start a project →</button></div></div><div className="max-w-[80rem] mx-auto border-t border-white/10 mt-14 pt-5 text-[10px] uppercase tracking-widest text-neutral-600">© {new Date().getFullYear()} Coalesce Digital. Build. Connect. Grow.</div></footer>

      <ContactModal isOpen={contactOpen} onClose={()=>setContactOpen(false)} initialService={service}/>
    </div>
  );
}
