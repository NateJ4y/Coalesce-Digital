import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export function BlogSection({ onSelectPost }: BlogSectionProps) {
  return (
    <section id="blog" className="w-full bg-[#e9e9e9] py-24 md:py-32 px-4 sm:px-8 border-y border-neutral-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-black" />
            </div>
            <span className="font-satisfy text-lg md:text-xl text-neutral-600 tracking-wide">
              Our Blog
            </span>
          </div>

          <h2 className="font-antonio font-bold uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black">
            Latest Insights
          </h2>
        </div>

        {/* Articles List */}
        <div className="flex flex-col divide-y divide-neutral-300">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="py-10 sm:py-12 group cursor-pointer flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:bg-white/40 px-4 rounded-3xl transition-all duration-300"
            >
              {/* Left Column: Image Thumbnail */}
              <div className="w-full lg:w-72 h-48 sm:h-56 lg:h-44 rounded-2xl overflow-hidden shrink-0 border border-neutral-300 bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Center Column: Meta & Details */}
              <div className="flex-1 flex flex-col gap-3 min-w-0">
                <div className="flex items-center gap-4 text-xs font-poppins font-medium text-neutral-500 uppercase tracking-wider">
                  <span className="bg-white/80 px-3 py-1 rounded-full border border-neutral-200 text-black font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 hidden sm:flex">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-antonio font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-black group-hover:translate-x-2 transition-transform duration-300">
                  {post.title}
                </h3>

                <p className="font-poppins text-xs sm:text-sm text-neutral-600 line-clamp-2 max-w-2xl leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Right Column: Arrow Button */}
              <div className="shrink-0 self-end lg:self-center">
                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-black group-hover:text-white text-black flex items-center justify-center transition-all duration-300 shadow-sm border border-neutral-200">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
