import { Code2, Instagram, Palette, Workflow, type LucideIcon } from 'lucide-react';

export type HeroSlide = {
  eyebrow: string;
  title: React.ReactNode;
  accentClass: string;
  body: string;
  image: string;
  tags: string[];
};

export type Service = {
  number: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  price: string;
};

export const heroSlides: HeroSlide[] = [
  { eyebrow: '01 / BUILD + CONNECT', title: <>Build.<br /><span className="text-[#b3de4f]">Connect.</span></>, accentClass: 'text-[#b3de4f]', body: 'Build the digital foundation. Connect the pieces. Make every customer touchpoint work together.', image: 'https://images.unsplash.com/photo-1649429398909-db7ae841c386?auto=format&fit=crop&w=2000&q=85', tags: ['Websites', 'Applications', 'Brand systems'] },
  { eyebrow: '02 / DIGITAL TRANSFORMATION', title: <>Transform<br /><span className="text-[#5b8cff]">the way you work.</span></>, accentClass: 'text-[#5b8cff]', body: 'Turn disconnected tools and manual processes into one digital system that works together.', image: 'https://images.unsplash.com/photo-1722316805351-d5a56965f926?auto=format&fit=crop&w=2000&q=85', tags: ['Systems', 'AI', 'Workflows'] },
  { eyebrow: '03 / WHAT WE OFFER', title: <>Four services.<br /><span className="text-[#b3de4f]">One system.</span></>, accentClass: 'text-[#b3de4f]', body: 'Web, automation, social and digital marketing — connected around the way your business grows.', image: 'https://images.unsplash.com/photo-1706508156658-f246b0c8753c?auto=format&fit=crop&w=2000&q=85', tags: ['Web + Apps', 'Automation', 'Social', 'Marketing'] },
  { eyebrow: '04 / AUTOMATION', title: <>Make the work<br /><span className="text-[#a855f7]">move itself.</span></>, accentClass: 'text-[#a855f7]', body: 'Automate lead capture, follow-up and repetitive operations so your team can focus on growth.', image: 'https://images.unsplash.com/photo-1722405375190-8d0b2a765840?auto=format&fit=crop&w=2000&q=85', tags: ['Lead scraping', 'Acquisition', 'AI agents'] },
];

export const services: Service[] = [
  { number: '01', title: 'Web & Apps', short: 'Build the digital home.', description: 'Websites, landing pages, eCommerce, client portals and web applications designed to turn attention into action.', icon: Code2, features: ['Business websites', 'Landing pages', 'eCommerce / Shopify', 'Web applications', 'UI/UX design', 'WordPress & Elementor'], price: 'From R1,500' },
  { number: '02', title: 'Automation', short: 'Make the work move itself.', description: 'We connect the tools behind your business so leads, tasks, follow-ups and repetitive work keep moving without manual chasing.', icon: Workflow, features: ['Lead scraping', 'Client acquisition systems', 'Email automation', 'WhatsApp workflows', 'AI agents & chatbots', 'Internal task automation'], price: 'From R2,500' },
  { number: '03', title: 'Social Media', short: 'Stay visible. Stay relevant.', description: 'Strategy, content and management built around consistent communication, stronger positioning and measurable growth.', icon: Instagram, features: ['Content strategy', 'Social media management', 'Static & carousel design', 'Short-form content', 'Community management', 'Monthly reporting'], price: 'From R1,500/mo' },
  { number: '04', title: 'Digital Design & Marketing', short: 'Make the brand impossible to ignore.', description: 'Brand systems, creative design and digital marketing that give your business a sharper identity and a clearer route to customers.', icon: Palette, features: ['Brand identity', 'Graphic & content design', 'Digital campaigns', 'Paid media support', 'SEO foundations', 'Marketing strategy'], price: 'From R1,000' },
];

export const journey = [
  ['01', 'Get discovered', 'Digital design + marketing puts your business in front of the right people.'],
  ['02', 'Earn attention', 'Social content and a strong brand make people stop, understand and remember you.'],
  ['03', 'Convert interest', 'A focused website, landing page or application gives prospects somewhere to act.'],
  ['04', 'Capture leads', 'Lead scraping, forms and acquisition workflows bring opportunities into your pipeline.'],
  ['05', 'Automate the follow-up', 'Email, WhatsApp, AI and task workflows reduce the manual work between enquiry and sale.'],
  ['06', 'Grow the machine', 'We measure what is working, improve the system and add the next digital layer.'],
] as const;

export const packages = [
  { name: 'Launch', price: 'R1,500+', label: 'Start here', items: ['One focused website or landing page', 'Mobile responsive design', 'Basic brand direction', 'Lead capture CTA'] },
  { name: 'Growth', price: 'R5,000+', label: 'Most popular', items: ['Professional website', 'Content/design system', 'Conversion-focused structure', 'Lead acquisition setup', 'Automation starter'] },
  { name: 'Scale', price: 'R10,000+', label: 'Build the machine', items: ['Advanced website / application', 'Marketing & content system', 'Lead scraping + acquisition', 'Custom automations', 'AI workflow opportunities'] },
] as const;