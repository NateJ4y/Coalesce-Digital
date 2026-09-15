import { useState, useEffect, type FormEvent } from 'react';
import { X, CheckCircle, Send, Mail, Phone, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  website: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: 'R 5,000 - R 15,000',
  message: '',
  website: '',
};

export function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (formData.website.trim()) return;

    const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined;

    if (!webhookUrl) {
      setSubmitError('The contact form is not connected yet. Please email or call us directly while the form is being configured.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          source: 'coalesce-digital-website',
          submittedAt: new Date().toISOString(),
          page: window.location.href,
        }),
      });

      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
      setSubmitted(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError('We could not send your inquiry right now. Please email or call us directly, or try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-neutral-700"
          aria-label="Close contact form"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center gap-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-2">
              <CheckCircle className="w-8 h-8 text-[#b3de4f]" />
            </div>
            <h3 id="contact-modal-title" className="font-antonio font-bold uppercase text-3xl sm:text-4xl text-black">
              Inquiry Received!
            </h3>
            <p className="font-poppins text-sm text-neutral-600 max-w-md">
              Thank you, <strong className="text-black">{formData.name}</strong>. Your project details have been sent to the Coalesce Digital team. We will review them and respond within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData(initialFormData);
                onClose();
              }}
              className="mt-6 px-8 py-3 rounded-full bg-black text-white font-poppins text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              type="button"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-satisfy text-lg text-neutral-500 block mb-1">Start a Conversation</span>
              <h2 id="contact-modal-title" className="font-antonio font-bold uppercase text-4xl sm:text-5xl tracking-tight text-black">
                Let's Build Something Exceptional
              </h2>
              <p className="font-poppins text-xs sm:text-sm text-neutral-500 mt-2">
                Fill out the details below or message us directly via WhatsApp or email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 font-poppins text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">Your Name *</label>
                  <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="e.g. Alex Morgan" value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">Email Address *</label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="alex@company.com" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">Phone / WhatsApp</label>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. +27 67 123 4567" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">Service or Package</label>
                  <select id="contact-service" name="service" value={formData.service} onChange={(e) => updateField('service', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white">
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
              </div>

              <div>
                <label htmlFor="contact-budget" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">Budget Range</label>
                <select id="contact-budget" name="budget" value={formData.budget} onChange={(e) => updateField('budget', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white">
                  <option value="Under R 5,000">Under R 5,000</option>
                  <option value="R 5,000 - R 15,000">R 5,000 - R 15,000</option>
                  <option value="R 15,000 - R 35,000">R 15,000 - R 35,000</option>
                  <option value="R 35,000+">R 35,000+ / Enterprise</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">Project Scope & Goals *</label>
                <textarea id="contact-message" name="message" rows={4} required placeholder="Tell us about your brand, timeline, and what you aim to achieve..." value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-neutral-50 focus:bg-white resize-none" />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={(e) => updateField('website', e.target.value)} />
              </div>

              {submitError && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700" role="alert">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>{submitError}</p>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-neutral-500 text-xs">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-black transition-colors flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> Email Direct</a>
                  <a href={`tel:+${CONTACT_INFO.phone}`} className="hover:text-black transition-colors flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> Call Direct</a>
                </div>
                <button type="submit" disabled={submitting} className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-poppins text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? <span>Sending...</span> : <><span>Send Message</span><Send className="w-3.5 h-3.5" /></>}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
