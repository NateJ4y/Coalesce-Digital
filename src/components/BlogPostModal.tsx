import { useEffect } from 'react';
import { X, Calendar, Clock, ArrowUpRight, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export function BlogPostModal({ post, onClose, onInquire }: BlogPostModalProps) {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-200 max-h-[92vh] overflow-y-auto"
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

        {/* Metadata */}
        <div className="flex items-center gap-3 text-xs font-poppins font-medium text-neutral-500 uppercase tracking-wider mb-4">
          <span className="bg-black text-white px-3 py-1 rounded-full font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h2 className="font-antonio font-bold uppercase text-3xl sm:text-5xl text-black tracking-tight mb-6">
          {post.title}
        </h2>

        {/* Featured Image */}
        <div className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden mb-8 bg-neutral-900 border border-neutral-200">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Excerpt Lead */}
        <p className="font-poppins text-base sm:text-lg font-medium text-neutral-800 leading-relaxed mb-6 italic border-l-2 border-black pl-4">
          "{post.excerpt}"
        </p>

        {/* Paragraphs */}
        <div className="flex flex-col gap-4 font-poppins text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
          {post.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: post.excerpt,
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-600 hover:text-black"
          >
            <Share2 className="w-4 h-4" /> Share Article
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-600 hover:text-black"
            >
              Back to Insights
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(`Article Strategy: ${post.title}`);
              }}
              className="px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-poppins text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-md"
            >
              <span>Consult on this Topic</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
