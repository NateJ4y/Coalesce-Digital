import { Code2, Instagram, Palette, Workflow, type LucideIcon } from 'lucide-react';

export type HeroSlide = {
  eyebrow: string;
  title: { line1: string; line2: string };
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
  image: string;
  imageAlt: string;
  link?: string;
};

export const heroSlides: HeroSlide[] = [
  { eyebrow: '01 / WEB DEVELOPMENT', title: { line1: 'Turn Clicks', line2: 'Into Customers.' }, accentClass: 'text-[#b3de4f]', body: 'Your website should build trust, explain your value and move the right people to action.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=90', tags: ['Websites', 'Applications', 'Conversion'], },
  { eyebrow: '02 / AUTOMATION', title: { line1: 'Make Your Business', line2: 'Run Smarter.' }, accentClass: 'text-[#5b8cff]', body: 'Automate repetitive work, capture leads and connect the systems that keep your business moving.', image: 'https://images.unsplash.com/photo-1722316805351-d5a56965f926?auto=format&fit=crop&w=2000&q=85', tags: ['Workflows', 'Lead capture', 'AI'], },
  { eyebrow: '03 / SOCIAL MEDIA', title: { line1: 'Get Seen.', line2: 'Stay Remembered.' }, accentClass: 'text-[#b3de4f]', body: 'Turn your social presence into a consistent system for attention, trust and customer acquisition.', image: 'https://images.unsplash.com/photo-1706508156658-f246b0c8753c?auto=format&fit=crop&w=2000&q=85', tags: ['Content', 'Social management', 'Growth'], },
  { eyebrow: '04 / DIGITAL DESIGN + MARKETING', title: { line1: 'Look Like', line2: 'The Business You Want.' }, accentClass: 'text-[#a855f7]', body: 'Build a visual identity that makes your business feel credible, memorable and worth choosing.', image: 'https://images.unsplash.com/photo-1722405375190-8d0b2a765840?auto=format&fit=crop&w=2000&q=85', tags: ['Brand systems', 'Design', 'Marketing'], },
];

export const services: Service[] = [
  { number: '01', title: 'Web & Apps', short: 'Build the digital home.', description: 'Websites, landing pages, eCommerce, client portals and web applications designed to turn attention into action.', icon: Code2, features: ['Business websites', 'Landing pages', 'eCommerce / Shopify', 'Web applications', 'UI/UX design', 'WordPress & Elementor'], price: 'From R1,500', image: 'https://lifestyleseatcovers.com/images/WhatsApp%20Image%202026-09-16%20at%208.32.12%20AM%20%281%29.jpeg', imageAlt: 'Lifestyle Seat Covers website project preview', link: 'https://lifestyleseatcovers.vercel.app/' },
  { number: '02', title: 'Automation', short: 'Make the work move itself.', description: 'We connect the tools behind your business so leads, tasks, follow-ups and repetitive work keep moving without manual chasing.', icon: Workflow, features: ['Lead scraping', 'Client acquisition systems', 'Email automation', 'WhatsApp workflows', 'AI agents & chatbots', 'Internal task automation'], price: 'From R2,500', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85', imageAlt: 'Automation and workflow systems on a laptop' },
  { number: '03', title: 'Social Media', short: 'Stay visible. Stay relevant.', description: 'Strategy, content and management built around consistent communication, stronger positioning and measurable growth.', icon: Instagram, features: ['Content strategy', 'Social media management', 'Static & carousel design', 'Short-form content', 'Community management', 'Monthly reporting'], price: 'From R1,500/mo', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85', imageAlt: 'Social media content and publishing interface' },
  { number: '04', title: 'Digital Design & Marketing', short: 'Make the brand impossible to ignore.', description: 'Brand systems, creative design and digital marketing that give your business a sharper identity and a clearer route to customers.', icon: Palette, features: ['Brand identity', 'Graphic & content design', 'Digital campaigns', 'Paid media support', 'SEO foundations', 'Marketing strategy'], price: 'From R1,000', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85', imageAlt: 'Digital design and brand identity work on a creative desk' },
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
