export interface ServiceTab {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  items: {
    name: string;
    pages: string;
  }[];
}

export interface CreativeTool {
  id: string;
  name: string;
  percentage: number;
  icon: string;
  category: string;
}

export interface SocialPackage {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  summary: string;
  deliverables: string[];
  client: string;
  year: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  metric?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}
