import { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ServiceDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export function ServiceDetailModal({ item, onClose, onInquire }: ServiceDetailModalProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto"
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

        {/* Header Tag */}
        <div className="mb-4">
          <span className="text-xs font-poppins font-bold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
            {item.category}
          </span>
        </div>

        <h2 className="font-antonio font-bold uppercase text-3xl sm:text-5xl md:text-6xl text-black tracking-tight mb-6">
          {item.title}
        </h2>

        {/* Hero Media Preview */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden mb-8 bg-neutral-900 border border-neutral-200">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 mb-6 border-y border-neutral-200 font-poppins text-xs">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-neutral-400" />
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase">Client</span>
              <span className="font-semibold text-neutral-800">{item.client}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-neutral-400" />
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase">Year</span>
              <span className="font-semibold text-neutral-800">{item.year}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <Tag className="w-4 h-4 text-neutral-400" />
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase">Focus</span>
              <span className="font-semibold text-neutral-800">{item.tags.slice(0, 2).join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Summary Description */}
        <div className="mb-8">
          <h3 className="font-antonio font-bold uppercase text-xl text-black tracking-wider mb-2">
            Service Overview & Impact
          </h3>
          <p className="font-poppins text-sm md:text-base text-neutral-600 leading-relaxed">
            {item.summary}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-8 bg-[#f3f3f3] rounded-2xl p-6 border border-neutral-200">
          <h3 className="font-antonio font-bold uppercase text-lg text-black tracking-wider mb-4">
            Included Deliverables & Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-poppins text-xs sm:text-sm text-neutral-700">
            {item.deliverables.map((del, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-poppins font-medium text-neutral-700 bg-neutral-100 px-3.5 py-1.5 rounded-full border border-neutral-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-neutral-200">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-600 hover:text-black"
          >
            Close View
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(item.title);
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-poppins text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Inquire About This Capability</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
