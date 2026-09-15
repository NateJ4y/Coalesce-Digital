import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-neutral-300 shadow-sm flex flex-col items-center text-center">
        {/* Decorative Quote Mark */}
        <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-black mb-8">
          <Quote className="w-6 h-6" />
        </div>

        {/* Client Avatar Media */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden mb-8 shadow-md border-2 border-white">
          <img
            src={current.image}
            alt={current.author}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {current.metric && (
            <div className="absolute bottom-1 right-1 bg-black text-white text-[10px] font-bold font-poppins px-2 py-0.5 rounded-full">
              {current.metric}
            </div>
          )}
        </div>

        {/* Big Impact Quote */}
        <div className="max-w-3xl min-h-[140px] flex items-center justify-center">
          <h3 className="font-antonio font-bold uppercase text-3xl sm:text-5xl md:text-6xl leading-[1.1] text-black tracking-tight transition-all duration-300">
            {current.quote}
          </h3>
        </div>

        {/* Author & Role */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <h4 className="font-antonio font-semibold uppercase text-xl sm:text-2xl text-black tracking-wider">
            {current.author}
          </h4>
          <span className="font-poppins text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-widest">
            {current.role}
          </span>
        </div>

        {/* Carousel Navigation Buttons & Pagination */}
        <div className="mt-12 flex items-center justify-between w-full max-w-md pt-6 border-t border-neutral-200">
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-black' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
