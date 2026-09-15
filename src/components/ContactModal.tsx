import { useState, useEffect, FormEvent } from 'react';
import { X, CheckCircle, Send, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: 'R 5,000 - R 15,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate high-end submission feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-neutral-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center gap-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-2">
              <CheckCircle className="w-8 h-8 text-[#b3de4f]" />
            </div>
            <h3 className="font-antonio font-bold uppercase text-3xl sm:text-4xl text-black">
              Inquiry Received!
            </h3>
            <p className="font-poppins text-sm text-neutral-600 max-w-md">
              Thank you, <strong className="text-black">{formData.name}</strong>. The Coalesce Digital team will review your project requirements and respond within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-black text-white font-poppins text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-satisfy text-lg text-neutral-500 block mb-1">
                Start a Conversation
              </span>
              <h2 className="font-antonio font-bold uppercase text-4xl sm:text-5xl tracking-tight text-black">
                Let's Build Something Exceptional
              </h2>
              <p className="font-poppins text-xs sm:text-sm text-neutral-500 mt-2">
                Fill out the details below or message us directly via WhatsApp or email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 font-poppins text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Service or Package
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white"
                  >
                    <option value="">Select an Area of Interest...</option>
                    <option value="Website UI/UX Design & Dev">Website UI/UX Design & Dev</option>
                    <option value="Brand Identity & Strategy">Brand Identity & Strategy</option>
                    <option value="Basic Social Package (R 1,500/mo)">Basic Social Package (R 1,500/mo)</option>
                    <option value="Standard Social Package (R 5,000/mo)">Standard Social Package (R 5,000/mo)</option>
                    <option value="Full Social Package (R 10,000/mo)">Full Social Package (R 10,000/mo)</option>
                    <option value="Automation & Intelligent Workflows">Automation & Intelligent Workflows</option>
                    <option value="Video Production & Motion Graphics">Video Production & Motion Graphics</option>
                    <option value="Consulting & Digital Audit">Consulting & Digital Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white"
                  >
                    <option value="Under R 5,000">Under R 5,000</option>
                    <option value="R 5,000 - R 15,000">R 5,000 - R 15,000</option>
                    <option value="R 15,000 - R 35,000">R 15,000 - R 35,000</option>
                    <option value="R 35,000+">R 35,000+ / Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Project Scope & Goals *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your brand, timeline, and what you aim to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-neutral-500 text-xs">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-black transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email Direct
                  </a>
                  <a
                    href={`tel:+${CONTACT_INFO.phone}`}
                    className="hover:text-black transition-colors flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Direct
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-poppins text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
