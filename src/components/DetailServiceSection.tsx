import { ArrowRight, Check, ChevronRight, LayoutDashboard, Megaphone, MousePointerClick, Sparkles, UserRound, Inbox, Bot, UsersRound, Workflow, Zap } from 'lucide-react';

type Props = { onContact: (service?: string) => void; service: { id: string } };
const A = ({ id }: { id: string }) => <span id={id} className="absolute -top-24" aria-hidden="true" />;

export const detailServices = [
  { id: 'websites' }, { id: 'workflows' }, { id: 'applications' },
  { id: 'content' }, { id: 'brand-systems' }, { id: 'growth' },
];

const automationApps = [
  ['Instagram', 'instagram'], ['WhatsApp', 'whatsapp'], ['Google Calendar', 'googlecalendar'],
  ['Gmail', 'gmail'], ['n8n', 'n8n'], ['Claude', 'anthropic'], ['ChatGPT', 'openai'],
  ['Slack', 'slack'], ['LinkedIn', 'linkedin'], ['Google Maps', 'googlemaps'],
  ['Telegram', 'telegram'], ['Facebook', 'facebook'], ['Google Sheets', 'googlesheets'],
  ['Airtable', 'airtable'], ['Notion', 'notion'],
];

export function DetailServiceSection({ service, onContact }: Props) {
  switch (service.id) {
    case 'websites': return <Website onContact={onContact} />;
    case 'workflows': return <Automation onContact={onContact} />;
    case 'applications': return <Apps onContact={onContact} />;
    case 'content': return <Social onContact={onContact} />;
    case 'brand-systems': return <Brand onContact={onContact} />;
    default: return <Growth onContact={onContact} />;
  }
}

function Website({ onContact }: Omit<Props,'service'>) {
  return <section data-scroll-reveal="section" id="websites" className="relative bg-black px-5 py-20 text-white sm:px-8 sm:py-28">
    <A id="applications"/><A id="conversion"/>
    <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-12 lg:items-end scroll-stagger">
      <div data-scroll-reveal="left" className="lg:col-span-7"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#b3de4f]">01 / Web & Apps</p>
        <h2 className="mt-4 font-antonio text-6xl font-bold uppercase leading-[.84] sm:text-8xl lg:text-[8.5rem]">Turn clicks<br/><span className="text-[#b3de4f]">into customers.</span></h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">Your website is often the first salesperson your business has. We build it to explain what you do, create trust and make the next step obvious.</p>
        <div className="mt-8 flex flex-wrap gap-2">{['Mobile-first','Conversion-focused','Built around your offer'].map(x=><span key={x} className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70">{x}</span>)}</div>
        <div className="mt-9 flex flex-wrap items-center gap-5"><span className="font-antonio text-4xl font-bold">From R1,500</span><button onClick={()=>onContact('Websites')} className="levitate rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-black">Build my website <ArrowRight className="ml-2 inline" size={14}/></button></div>
      </div>
      <div data-scroll-reveal="right" className="lg:col-span-5"><div className="overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=85" alt="Modern website interface" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"/></div>
        <div className="mt-4 grid grid-cols-2 gap-3 scroll-stagger"><div data-scroll-reveal="up" className="rounded-2xl bg-white/10 p-5"><MousePointerClick size={18}/><p className="mt-5 text-xs font-bold uppercase tracking-wider">Clear next step</p></div><div data-scroll-reveal="up" className="rounded-2xl bg-[#b3de4f] p-5 text-black"><LayoutDashboard size={18}/><p className="mt-5 text-xs font-bold uppercase tracking-wider">Built to grow</p></div></div>
      </div>
    </div>
  </section>;
}

function Automation({ onContact }: Omit<Props,'service'>) {
  const steps = [
    ['01','Customer enquiries','A form, WhatsApp message or booking starts the process.', UserRound],
    ['02','Lead is captured','The right information lands where your team needs it.', Inbox],
    ['03','System responds','Notifications, email or AI can handle the next step.', Bot],
    ['04','Team follows through','People focus on decisions and relationships, not admin.', UsersRound],
  ] as const;

  return <section data-scroll-reveal="section" id="workflows" className="relative border-y border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-28">
    <A id="lead-capture"/><A id="ai"/>
    <div className="mx-auto max-w-[80rem]">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div data-scroll-reveal="left" className="lg:col-span-7">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#5b8cff]">02 / Automation</p>
          <h2 className="mt-3 font-antonio text-6xl font-bold uppercase leading-[.88] sm:text-8xl">Stop doing<br/><span className="text-[#5b8cff]">the same work twice.</span></h2>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:text-xl">Automation means the right thing happens without someone having to remember to make it happen.</p>
        </div>
        <div data-scroll-reveal="right" className="lg:col-span-5 lg:justify-self-end">
          <p className="mb-4 text-right text-[10px] font-bold uppercase tracking-[.25em] text-neutral-400">Connect your stack</p>
          <div className="flex max-w-xl flex-wrap justify-end gap-2.5 sm:gap-3">
            {automationApps.map(([name, icon]) => (
              <div key={name} title={name} className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white p-2.5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105 sm:h-14 sm:w-14 sm:p-3">
                <img src={`https://cdn.simpleicons.org/${icon}`} alt={`${name} logo`} loading="lazy" className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div data-scroll-reveal="up" className="relative mt-14 grid gap-3 lg:grid-cols-4 scroll-stagger">
        <div aria-hidden="true" className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-gradient-to-r from-black/15 via-black/40 to-black/5 lg:block" />
        {steps.map(([n,t,d,Icon], i) => (
          <div key={n} data-scroll-reveal="up" className={`relative z-10 rounded-3xl p-6 sm:p-7 ${['bg-neutral-950 text-white','bg-neutral-800 text-white','bg-neutral-500 text-white','bg-neutral-200 text-black'][i]}`}>
            <div className="flex items-start justify-between gap-4">
              <span className={`text-[10px] font-bold tracking-widest ${i < 3 ? 'text-white/45' : 'text-black/40'}`}>{n}</span>
              <Icon size={42} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h3 className="mt-12 font-antonio text-3xl font-bold uppercase leading-none sm:text-4xl">{t}</h3>
            <p className={`mt-4 text-sm leading-relaxed ${i < 3 ? 'text-white/60' : 'text-black/60'}`}>{d}</p>
            {i < steps.length - 1 && <ChevronRight className={`absolute -right-3 top-1/2 z-20 hidden lg:block ${i < 3 ? 'text-neutral-500' : 'text-neutral-300'}`} size={22} strokeWidth={2.5} aria-hidden="true" />}
          </div>
        ))}
      </div>

      <div data-scroll-reveal="scale" className="mt-5 flex flex-col justify-between gap-6 rounded-3xl bg-black p-7 text-white sm:p-9 lg:flex-row lg:items-center"><div><p className="text-[10px] font-bold uppercase tracking-widest text-[#5b8cff]">Workflows • Lead Capture • AI</p><p className="mt-3 max-w-2xl font-antonio text-3xl font-bold uppercase sm:text-4xl">Connect the moving parts. Let the system carry the repetition.</p></div><div className="shrink-0"><p className="font-antonio text-4xl font-bold">From R1,500</p><button onClick={()=>onContact('Automation')} className="levitate mt-4 rounded-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-black">Automate a process <ArrowRight className="ml-2 inline" size={14}/></button></div></div>
    </div>
  </section>;
}

function Apps({ onContact }: Omit<Props,'service'>) {
  return <section data-scroll-reveal="section" id="apps-section" className="relative px-5 py-20 sm:px-8 sm:py-28"><A id="conversion"/>
    <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-12 lg:items-center scroll-stagger"><div data-scroll-reveal="left" className="lg:col-span-5"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#5b8cff]">03 / Digital Products</p><h2 className="mt-4 font-antonio text-6xl font-bold uppercase leading-[.86] sm:text-8xl">More than<br/><span className="text-[#5b8cff]">a website.</span></h2><p className="mt-7 text-lg leading-relaxed text-neutral-600">Sometimes your business needs a tool, not another page. We build focused web applications around a real customer or team problem.</p>
      <div className="mt-8 space-y-3">{['Client portals','Bookings & calculators','Dashboards & internal tools','Custom customer journeys'].map(x=><div key={x} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><Check size={16}/><span className="text-sm font-bold">{x}</span></div>)}</div><button onClick={()=>onContact('Applications')} className="levitate mt-8 rounded-full bg-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white">Build a digital tool <ArrowRight className="ml-2 inline" size={14}/></button></div>
      <div data-scroll-reveal="right" className="lg:col-span-7"><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[2rem] bg-black p-7 text-white sm:translate-y-10"><LayoutDashboard size={22}/><p className="mt-16 font-antonio text-4xl font-bold uppercase">Dashboard</p><p className="mt-2 text-sm text-white/50">See what matters in one place.</p></div><div className="overflow-hidden rounded-[2rem] bg-neutral-200"><img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85" alt="Web application interface" loading="lazy" className="h-full min-h-64 w-full object-cover"/></div></div><div className="mt-4 rounded-[2rem] bg-[#5b8cff] p-7 text-white"><p className="text-[10px] font-bold uppercase tracking-widest">Conversion</p><p className="mt-2 font-antonio text-4xl font-bold uppercase">Less friction. More action.</p><p className="mt-2 text-sm text-white/75">Sharper calls-to-action and clearer journeys make the next step easier to understand.</p><p className="mt-6 font-antonio text-3xl font-bold">From R1,500</p></div></div>
    </div>
  </section>;
}

function Social({ onContact }: Omit<Props,'service'>) {
  return <section data-scroll-reveal="section" id="content" className="relative border-y border-black/10 bg-[#e9e9e9] px-5 py-20 sm:px-8 sm:py-28"><A id="social-management"/><A id="growth"/>
    <div className="mx-auto max-w-[80rem]"><div data-scroll-reveal="left" className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-neutral-500">04 / Social</p><h2 className="mt-3 font-antonio text-6xl font-bold uppercase leading-[.86] sm:text-8xl">Get seen.<br/><span className="text-neutral-500">Stay remembered.</span></h2></div><p className="max-w-md text-lg leading-relaxed text-neutral-600">Content and social management work better together: one creates the message, the other keeps the brand present.</p></div>
      <div data-scroll-reveal="up" className="mt-12 grid gap-4 lg:grid-cols-3 scroll-stagger">
        <div data-scroll-reveal="left" className="overflow-hidden rounded-[2rem] bg-white lg:col-span-2"><img src="https://images.pexels.com/photos/15097793/pexels-photo-15097793/free-photo-of-laptop-and-a-smart-phone-on-the-table.jpeg?auto=compress&dpr=1&w=1800" alt="Laptop and smartphone displaying an Instagram profile for social media engagement" loading="lazy" className="aspect-[16/8] w-full object-cover"/></div>
        <div data-scroll-reveal="right" className="rounded-[2rem] bg-black p-7 text-white"><Megaphone size={20}/><p className="mt-16 font-antonio text-4xl font-bold uppercase">Content</p><p className="mt-2 text-sm text-white/50">Strategy, creative direction and reusable content.</p></div>
        <div data-scroll-reveal="up" className="rounded-[2rem] bg-white p-7"><Sparkles size={20}/><p className="mt-16 font-antonio text-4xl font-bold uppercase">Management</p><p className="mt-2 text-sm text-neutral-500">Planning, publishing, community and reporting.</p></div>
        <div data-scroll-reveal="down" className="rounded-[2rem] bg-[#b3de4f] p-7"><Zap size={20}/><p className="mt-16 font-antonio text-4xl font-bold uppercase">Growth</p><p className="mt-2 text-sm">Use attention, leads and performance to improve the next move.</p></div>
      </div>
      <div data-scroll-reveal="scale" className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-black/10 bg-white p-6 sm:p-8"><p className="font-antonio text-3xl font-bold uppercase">A social presence people can recognize.</p><div className="flex items-center gap-5"><span className="font-antonio text-3xl font-bold">From R1,000</span><button onClick={()=>onContact('Social Media')} className="levitate rounded-full bg-black px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white">Build the system <ArrowRight className="ml-2 inline" size={14}/></button></div></div>
    </div>
  </section>;
}

function Brand({ onContact }: Omit<Props,'service'>) {
  return <section data-scroll-reveal="section" id="brand-systems" className="relative bg-white px-5 py-20 sm:px-8 sm:py-28"><A id="design"/><A id="marketing"/>
    <div className="mx-auto grid max-w-[80rem] gap-12 lg:grid-cols-12 lg:items-center"><div data-scroll-reveal="left" className="lg:col-span-6"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#a855f7]">05 / Brand + Marketing</p><h2 className="mt-3 font-antonio text-6xl font-bold uppercase leading-[.86] sm:text-8xl">Look like<br/><span className="text-[#a855f7]">the business you want.</span></h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600">Your logo is only one piece. We bring visual identity, content, design and marketing together so the business feels deliberate wherever customers find it.</p><div data-scroll-reveal="up" className="mt-8 grid gap-3 sm:grid-cols-3 scroll-stagger">{['Brand systems','Graphic design','Digital marketing'].map((x,i)=><div key={x} data-scroll-reveal="up" className="rounded-2xl border border-black/10 p-5"><span className="text-[10px] font-bold text-neutral-400">0{i+1}</span><p className="mt-8 text-xs font-bold uppercase tracking-wider">{x}</p></div>)}</div><button onClick={()=>onContact('Brand & Marketing')} className="levitate mt-8 rounded-full bg-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white">Sharpen the brand <ArrowRight className="ml-2 inline" size={14}/></button></div>
      <div data-scroll-reveal="right" className="lg:col-span-6"><div className="overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85" alt="Brand identity and graphic design materials" loading="lazy" className="aspect-[5/4] w-full object-cover"/></div><div className="mt-4 flex items-center justify-between rounded-3xl bg-[#f3f3f3] p-6"><div><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Design + marketing</p><p className="mt-2 font-antonio text-3xl font-bold uppercase">From R600</p></div><Sparkles size={28}/></div></div>
    </div>
  </section>;
}

function Growth({ onContact }: Omit<Props,'service'>) {
  return <section data-scroll-reveal="section" id="growth-system" className="relative bg-black px-5 py-20 text-white sm:px-8 sm:py-28"><div className="mx-auto max-w-[80rem]"><p data-scroll-reveal="left" className="text-[10px] font-bold uppercase tracking-[.25em] text-[#b3de4f]">06 / The bigger picture</p><div data-scroll-reveal="up" className="mt-4 grid gap-12 lg:grid-cols-12 lg:items-end"><h2 className="font-antonio text-6xl font-bold uppercase leading-[.84] sm:text-8xl lg:col-span-8 lg:text-[8.5rem]">Don't build<br/><span className="text-[#b3de4f]">in pieces.</span></h2><p className="text-lg leading-relaxed text-white/55 lg:col-span-4">Your website, content, marketing, lead capture and automation should work together. That is where digital starts becoming a growth system.</p></div><div data-scroll-reveal="up" className="mt-14 grid gap-3 md:grid-cols-5 scroll-stagger">{['Attention','Interest','Lead','Conversion','Follow-up'].map((x,i)=><div key={x} data-scroll-reveal="down" className="rounded-2xl border border-white/10 p-5"><span className="text-[10px] text-white/35">0{i+1}</span><p className="mt-10 font-antonio text-3xl font-bold uppercase">{x}</p>{i<4&&<ChevronRight className="mt-5 hidden md:block text-[#b3de4f]" size={18}/>}</div>)}</div><div data-scroll-reveal="scale" className="mt-5 flex flex-col justify-between gap-6 rounded-3xl bg-[#b3de4f] p-7 text-black sm:p-9 lg:flex-row lg:items-center"><div><p className="text-[10px] font-bold uppercase tracking-widest">Growth systems</p><p className="mt-2 font-antonio text-4xl font-bold uppercase">Start with the layer your business needs next.</p></div><div><p className="font-antonio text-4xl font-bold">From R2,500</p><button onClick={()=>onContact('Digital Growth')} className="levitate mt-4 rounded-full bg-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white">Plan the next move <ArrowRight className="ml-2 inline" size={14}/></button></div></div></div></section>;
}
