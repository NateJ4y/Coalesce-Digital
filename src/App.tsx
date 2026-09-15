import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatementMarquee } from './components/StatementMarquee';
import { ServicesAccordion } from './components/ServicesAccordion';
import { ToolsGrid } from './components/ToolsGrid';
import { SocialPackages } from './components/SocialPackages';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { TestimonialsSlider } from './components/TestimonialsSlider';
import { BlogSection } from './components/BlogSection';
import { FooterCTA } from './components/FooterCTA';
import { ContactModal } from './components/ContactModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutModal } from './components/AboutModal';
import { BlogPostModal } from './components/BlogPostModal';
import { PortfolioItem, BlogPost } from './types';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  const handleOpenContactWithService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    setContactModalOpen(true);
  };

  const handleGeneralContact = () => {
    setSelectedServiceForInquiry('');
    setContactModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f3f3f3] text-[#171717] selection:bg-black selection:text-white font-poppins overflow-x-hidden">
      {/* Signature MexDot Interactive Cursor */}
      <CustomCursor />

      {/* Floating Pill Glassmorphic Header */}
      <Navbar
        onOpenContact={handleGeneralContact}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreServices={() => scrollToSection('services')}
        onOpenContact={handleGeneralContact}
        onScrollDown={() => scrollToSection('about-preview')}
      />

      {/* Statement & Client Brand Marquee */}
      <StatementMarquee onOpenAbout={() => setAboutModalOpen(true)} />

      {/* Interactive Services & Scope Accordion */}
      <ServicesAccordion onSelectService={handleOpenContactWithService} />

      {/* Creative Tools Proficiency Grid */}
      <ToolsGrid />

      {/* Social Media Packages with Rand Pricing */}
      <SocialPackages onSelectPackage={handleOpenContactWithService} />

      {/* Capabilities & Work Portfolio Showcase */}
      <PortfolioShowcase onSelectItem={(item) => setSelectedPortfolioItem(item)} />

      {/* Testimonials Slider */}
      <TestimonialsSlider />

      {/* Insights & Blog Section */}
      <BlogSection onSelectPost={(post) => setSelectedBlogPost(post)} />

      {/* Call to Action & Rounded Footer */}
      <FooterCTA
        onOpenContact={handleGeneralContact}
        onOpenAbout={() => setAboutModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedServiceForInquiry}
      />

      <ServiceDetailModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onInquire={(title) => {
          setSelectedPortfolioItem(null);
          handleOpenContactWithService(title);
        }}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenContact={() => {
          setAboutModalOpen(false);
          handleGeneralContact();
        }}
      />

      <BlogPostModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onInquire={(title) => {
          setSelectedBlogPost(null);
          handleOpenContactWithService(title);
        }}
      />
    </div>
  );
}
