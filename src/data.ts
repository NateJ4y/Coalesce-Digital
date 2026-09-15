import { ServiceTab, CreativeTool, SocialPackage, PortfolioItem, Testimonial, BlogPost } from './types';

export const HERO_IMAGE = "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-17917cf7eea47b9544fb61211d4df6c6278ad1ee/public";
export const PERSONAL_HEADER_IMAGE = "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-30b87fdb45980c391ce3969da3f174ebf29b6de2/public";
export const LOGO_IMAGE = "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-17917cf7eea47b9544fb61211d4df6c6278ad1ee/w=160";

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "website-uiux",
    title: "WEBSITE UI/UX",
    subtitle: "Custom Interfaces & Full-Stack Development",
    description: "High-end, performance-driven websites crafted with intention. We build modern, responsive websites designed to elevate your brand, enhance user experience and convert visitors into clients. Clean interfaces, fast load speeds, seamless interactions — all executed with precision.",
    items: [
      { name: "SIMPLE SITE", pages: "1-3pg" },
      { name: "BROCHURE SITE", pages: "4-6PG" },
      { name: "STANDARD SITE", pages: "6-10pg" },
      { name: "PREMIUM SITE", pages: "10+ pg" }
    ]
  },
  {
    id: "brand",
    title: "Brand",
    subtitle: "Identity, Tone & Distinctive Language",
    description: "Strategic visual identities designed to differentiate and resonate. From bespoke typography systems and memorable logomarks to brand strategy guides that give your business authority and timeless presence across all mediums.",
    items: [
      { name: "LOGO & ESSENTIALS", pages: "Mark + Colors" },
      { name: "FULL BRAND SYSTEM", pages: "Full Identity" },
      { name: "PACKAGING & COLLATERAL", pages: "Print + Digital" },
      { name: "BRAND REFRESH & AUDIT", pages: "Modernization" }
    ]
  },
  {
    id: "animation",
    title: "Animation",
    subtitle: "Motion Graphics & Interactive Experiences",
    description: "Dynamic micro-interactions, kinetic typography, and fluid transitions that elevate digital experiences from ordinary to unforgettable. Captivate attention and make every customer touchpoint feel alive.",
    items: [
      { name: "WEB MICRO-INTERACTIONS", pages: "UI Motion" },
      { name: "BRAND REELS & PROMOS", pages: "15-60s" },
      { name: "EXPLAINER SEQUENCES", pages: "2D/Motion" },
      { name: "3D & LOGO STINGERS", pages: "Intro/Outro" }
    ]
  }
];

export const CREATIVE_TOOLS: CreativeTool[] = [
  {
    id: "photoshop",
    name: "ADOBE PHOTOSHOP",
    percentage: 84,
    icon: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-b1caf268b93a45451698437b6b084987d9a428cd/public",
    category: "Raster Design & Retouching"
  },
  {
    id: "figma",
    name: "Figma",
    percentage: 90,
    icon: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-f0b8ee26181f73b2786671886e29d19b52908870/public",
    category: "Interface & Systems Design"
  },
  {
    id: "webflow",
    name: "webflow",
    percentage: 92,
    icon: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-0160b2eb9cb8b0cf6eac9b0d2d85be42e1cc0f38/public",
    category: "Visual Development & CMS"
  },
  {
    id: "slack",
    name: "Slack Technologies",
    percentage: 77,
    icon: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-e455924d4544d563ba98fdc22bc12511ff31b4ed/public",
    category: "Workflow & Team Collaboration"
  }
];

export const SOCIAL_PACKAGES: SocialPackage[] = [
  {
    id: "basic",
    title: "Basic Social Package",
    price: "R 1,500",
    period: "month",
    features: [
      "Single-platform management (e.g. Instagram or Facebook)",
      "4–6 posts/month (1–2 per week)",
      "Basic profile setup / optimization",
      "Brand-aligned visual templates",
      "Essential monthly overview"
    ]
  },
  {
    id: "standard",
    title: "Standard Social Package",
    price: "R 5,000",
    period: "month",
    popular: true,
    features: [
      "1–3 platforms management (e.g. Instagram, Facebook, TikTok)",
      "8–12 posts/month (2–3 per week)",
      "1–2 curated stories / reels monthly",
      "Basic community management (responding to comments & messages)",
      "Graphic/post design + scheduling",
      "Monthly analytics (reporting + basic engagement tracking)",
      "Optional small extras (cover update, promo boost setup)"
    ]
  },
  {
    id: "full",
    title: "Full Social Package",
    price: "R 10,000",
    period: "month",
    features: [
      "Multi-platform (2–4 platforms) or high-frequency content",
      "15–25 posts/month (+ stories/reels + occasional video/reels)",
      "Full community management & active audience engagement",
      "Monthly analytics (performance reporting, insights + strategy tweaks)",
      "Rich content variety (graphics, videos, campaign assets)",
      "Marketing strategy (basic ad-boost optimisation & growth deliverables)"
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "brand-identity",
    title: "Brand Identity & Graphic Design",
    category: "Branding",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-8ab31fb4d352d869dc93c409923bf89043dbd979/public",
    tags: ["Brand Kit", "Flyer / Poster", "Logo", "Company Profile", "Banner"],
    summary: "Comprehensive brand ecosystem development from core vectors to tactile print collateral. We engineer identities that project confidence and distinctiveness.",
    deliverables: ["Primary & Secondary Logomarks", "Typography Scale & Color Palette", "Print Collateral & Marketing Kits", "Brand Guidelines Book"],
    client: "Horizon Venture Studio",
    year: "2025"
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    category: "Web Development",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-2e342c66f728a46dc6b974d8df3a4532f9b0ce98/public",
    tags: ["Website", "e-Commerce", "Portfolio", "UX / UI", "Landing Page", "Web Software"],
    summary: "Responsive, ultra-fast web architectures engineered for high-converting customer experiences. Seamless interaction models built with modern web technologies.",
    deliverables: ["Custom Responsive Layouts", "Interactive Design System", "E-Commerce / CMS Integration", "Core Web Vitals Optimization"],
    client: "Aether Lifestyle Goods",
    year: "2025"
  },
  {
    id: "social-media",
    title: "Social Media Content & Management",
    category: "Social Media",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-716981697835529132f2232f0970e854b1e80e11/public",
    tags: ["Content Scheduling", "Reels", "Strategy", "Page Setup", "Iconography"],
    summary: "Consistent, visually elevated social presence that engages communities and expands organic reach through curated multi-format assets.",
    deliverables: ["Monthly Content Calendar", "High-Engagement Short-form Video", "Community Management Systems", "Analytical Growth Audits"],
    client: "Verve Urban Hospitality",
    year: "2024"
  },
  {
    id: "advertising",
    title: "Advertising & Marketing Assets",
    category: "Advertising",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-d220a08cf6a240617b9577e0c3dda85a49801eb6/public",
    tags: ["Ad Creatives", "Promo Graphics", "TikTok Campaign", "Banner Ads"],
    summary: "High-CTR ad creatives, kinetic promo assets, and targeted digital collateral built specifically to lower CAC and maximize conversion rates.",
    deliverables: ["Meta & TikTok Ad Variations", "Programmatic Display Banners", "A/B Testing Creatives", "Campaign Retargeting Assets"],
    client: "Nordic Pulse Gear",
    year: "2024"
  },
  {
    id: "automation",
    title: "Automation & Intelligent Workflows",
    category: "Automation",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-f340968e4a65f36f0a90e308d2dab0a99fe09d93/public",
    tags: ["Email Automation", "AI Systems", "Funnels", "Workflow"],
    summary: "Automated client onboarding, smart email nurture funnels, and AI-assisted workflow pipelines that save hundreds of operational hours.",
    deliverables: ["CRM & Pipeline Synchronization", "Lifecycle Email Sequences", "Lead Qualification Bots", "Zapier & Custom API Pipelines"],
    client: "Apex Consulting Group",
    year: "2025"
  },
  {
    id: "video-motion",
    title: "Video Production & Motion Graphics",
    category: "Video & Motion",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-cf8a3988ea0f226e0d97c510a717c2b76fe64358/public",
    tags: ["Intro Videos", "Explainers", "Video Editing", "Motion Design"],
    summary: "Dynamic video editing and motion graphics that communicate complex product values with kinetic pacing and crystal clarity.",
    deliverables: ["Brand Anthem Teaser", "SaaS Explainer Animations", "Social Micro-Cuts", "Sound Design & Grading"],
    client: "Kroma Audio Lab",
    year: "2024"
  },
  {
    id: "consulting",
    title: "Consulting, Strategy & Support",
    category: "Strategy",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-6092c9f3225d033224219955cabb377378b5ada4/public",
    tags: ["Brand Strategy", "Digital Audit", "Optimization", "Setup Support"],
    summary: "Direct advisory on digital positioning, user flow bottlenecks, tech stack selection, and revenue-focused brand pivots.",
    deliverables: ["Comprehensive UX & Brand Audit", "Strategic Growth Roadmap", "Tech Stack Architecture Guide", "Ongoing Fractional Advisory"],
    client: "Solari Clean Tech",
    year: "2025"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "“COALESCE HELPED US DOUBLE SALES IN ONE YEAR”",
    author: "MTL Graphic",
    role: "Envato User & Studio Director",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-e6f09188491f8bace7acfd18b5647e851787e47a/public",
    metric: "+120% Revenue"
  },
  {
    id: "2",
    quote: "“THE REBRANDING AND WEBSITE ELEVATED OUR ENTIRE MARKET POSITION”",
    author: "Elena Rostova",
    role: "Founder, Aether Goods",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-17917cf7eea47b9544fb61211d4df6c6278ad1ee/public",
    metric: "3.4x Conversion"
  },
  {
    id: "3",
    quote: "“THE SOCIAL MEDIA WORKFLOWS AND AUTOMATIONS SAVE US 25 HOURS EVERY WEEK”",
    author: "David Chen",
    role: "Head of Growth, Apex Global",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-30b87fdb45980c391ce3969da3f174ebf29b6de2/public",
    metric: "25+ Hrs Saved/Wk"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "How to Connect with Your Brand Audience",
    category: "Marketing",
    date: "12.21.2023",
    readTime: "4 min read",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-0489723bcbfab07e8055937d47c225597d8e6278/public",
    excerpt: "With each project, I embark on a journey to weave a unique narrative, carefully curating experiences that transcend the ordinary.",
    content: [
      "In a crowded digital landscape, generic messaging gets filtered out instantly. True connection requires understanding the emotional pulse of your customer.",
      "By identifying the exact tension your brand resolves and speaking in an authentic, distinct tone of voice, your brand transitions from a commodity into an identity.",
      "Consistency across your visual language, digital interactions, and customer support compounds over time, building an unshakeable moat of trust."
    ]
  },
  {
    id: "post-2",
    title: "The Anatomy of High-Converting Web Design",
    category: "UI / UX Design",
    date: "01.15.2024",
    readTime: "6 min read",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-bb05b8131538e3bfe6f49f476dd5b6f07a8f79b1/public",
    excerpt: "Why beautiful aesthetics alone aren't enough: balancing cognitive load, optical hierarchy, and rapid conversion pathways.",
    content: [
      "Great design isn't just decoration; it's visual engineering. When a user lands on your site, they decide within 50 milliseconds whether to stay or bounce.",
      "Effective layouts balance strong visual tension with generous negative space. Every section must have a single primary action that guides the visitor naturally toward commitment.",
      "Micro-animations and tactile feedback communicate responsiveness and credibility, turning passive browsing into confident action."
    ]
  },
  {
    id: "post-3",
    title: "Automating Client Acquisition in 2025",
    category: "Automation",
    date: "02.04.2024",
    readTime: "5 min read",
    image: "https://dorita-paagbhxhb5.figweb.site/cdn-cgi/imagedelivery/s-dfVpmPR-aKHmwFNwAgnQ/dorita-paagbhxhb5.figweb.site-bb75b5e38a0824efc9bab5a71d8b110af5651642/public",
    excerpt: "How modern agencies and brands leverage intelligent automated funnels to convert cold visitors into committed contracts on autopilot.",
    content: [
      "Manual follow-ups and fragmented spreadsheets are the biggest bottlenecks in modern agency operations.",
      "By integrating intelligent lead qualification with dynamic CRM triggers and personalized email journeys, your response time drops from hours to seconds.",
      "Discover the specific blueprint we use to build high-converting inbound capture systems for creative businesses."
    ]
  }
];

export const CLIENT_LOGOS = [
  "NEXTGEN",
  "AURORA LABS",
  "MONOLITH",
  "KINETIC DIGITAL",
  "PULSE STUDIO",
  "VALENCE CO.",
  "STRATA DESIGN",
  "VORTEX AI"
];

export const CONTACT_INFO = {
  email: "coalesceuniversity@gmail.com",
  phone: "27 60 348 9176",
  phoneFormatted: "+27 60 348 9176",
  instagram: "@COA_DIGITAL",
  instagramUrl: "https://instagram.com/COA_DIGITAL",
  location: "Cape Town / Johannesburg, South Africa • Serving Worldwide",
  hours: "Mon - Fri: 08:00 - 18:00 (SAST)"
};
