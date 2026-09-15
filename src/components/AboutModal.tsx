import { useEffect } from 'react';
import { X, ArrowUpRight, Award, Compass, Layers, Zap } from 'lucide-react';
import { CONTACT_INFO, PERSONAL_HEADER_IMAGE } from '../data';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function AboutModal({ isOpen, onClose, onOpenContact }: AboutModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-neutral-700 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="font-satisfy text-lg text-neutral-500">About Coalesce Digital</span>
        </div>

        <h2 className="font-antonio font-bold uppercase text-4xl sm:text-6xl text-black tracking-tight mb-8">
          Where Design, Code & Strategy Coalesce
        </h2>

        {/* Hero split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          <div className="md:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
            <img
              src={PERSONAL_HEADER_IMAGE}
              alt="Coalesce Digital Agency Identity"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-7 flex flex-col gap-4 font-poppins text-xs sm:text-sm text-neutral-600 leading-relaxed">
            <p>
              <strong className="text-black font-semibold">Coalesce Digital</strong> is a boutique creative studio dedicated to forging world-class digital identities and high-performance web products.
            </p>
            <p>
              We reject formulaic design. Every line of typography, micro-animation, and automated funnel is built with meticulous intent to elevate brands beyond ordinary competition and build durable market authority.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div>
                <span className="font-antonio font-bold text-3xl text-black block">100%</span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Custom Tailored Work</span>
              </div>
              <div>
                <span className="font-antonio font-bold text-3xl text-black block">24/7</span>
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Automated Growth Funnels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#f3f3f3] border border-neutral-200 flex flex-col gap-2">
            <Compass className="w-6 h-6 text-black" />
            <h4 className="font-antonio font-bold uppercase text-base text-black tracking-wide">
              Strategic Vision
            </h4>
            <p className="font-poppins text-xs text-neutral-600">
              Grounding every aesthetic decision in measurable business conversion metrics.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f3f3f3] border border-neutral-200 flex flex-col gap-2">
            <Layers className="w-6 h-6 text-black" />
            <h4 className="font-antonio font-bold uppercase text-base text-black tracking-wide">
              Design Systems
            </h4>
            <p className="font-poppins text-xs text-neutral-600">
              Cohesive typography, palettes, and components engineered for seamless scaling.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f3f3f3] border border-neutral-200 flex flex-col gap-2">
            <Zap className="w-6 h-6 text-black" />
            <h4 className="font-antonio font-bold uppercase text-base text-black tracking-wide">
              Smart Automation
            </h4>
            <p className="font-poppins text-xs text-neutral-600">
              Connecting CRM, emails, and social workflows to eliminate manual drudgery.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f3f3f3] border border-neutral-200 flex flex-col gap-2">
            <Award className="w-6 h-6 text-black" />
            <h4 className="font-antonio font-bold uppercase text-base text-black tracking-wide">
              Flawless Polish
            </h4>
            <p className="font-poppins text-xs text-neutral-600">
              Pixel-perfect responsiveness, 60fps micro-interactions, and instant load speeds.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          <span className="text-xs font-poppins text-neutral-500 font-medium">
            Contact: {CONTACT_INFO.email}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-600 hover:text-black"
            >
              Back to site
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-poppins text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
            >
              <span>Start Collaboration</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
