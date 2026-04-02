import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import AnimationCard from '@/components/ui/AnimationCard';

const MOCK_ANIMATIONS = Array.from({ length: 16 }).map((_, i) => ({
  id: `anim-exp-${i}`,
  title: `Creative Animation ${i + 1}`,
  author: {
    name: 'Motion Master',
    avatar: `https://picsum.photos/seed/user${i}/100/100`
  },
  previewUrl: `https://picsum.photos/seed/explore${i}/400/300?blur=2`,
  likes: Math.floor(Math.random() * 2000),
  downloads: Math.floor(Math.random() * 10000),
  price: (i % 4 === 0 ? 'Premium' : 'Free') as 'Premium' | 'Free'
}));

export default function Explore() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen pb-24">
      {/* Header / Search */}
      <div className="bg-white border-b border-neutral-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search thousands of animations..."
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-100 border-transparent focus:bg-white border focus:border-indigo-500 rounded-xl text-sm transition-all outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors outline-none focus:border-indigo-500 cursor-pointer">
                  <option>Trending</option>
                  <option>Newest</option>
                  <option>Most Downloaded</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="pt-4 mt-4 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Price</h4>
                <div className="space-y-2">
                  {['All', 'Free', 'Premium'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Format</h4>
                <div className="space-y-2">
                  {['JSON (Lottie)', 'GIF', 'MP4'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Category</h4>
                <div className="space-y-2">
                  {['UI Elements', 'Characters', 'Icons', 'Loaders'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {MOCK_ANIMATIONS.map((anim) => (
            <AnimationCard 
              key={anim.id} 
              id={anim.id}
              title={anim.title}
              author={anim.author}
              previewUrl={anim.previewUrl}
              likes={anim.likes}
              downloads={anim.downloads}
              price={anim.price}
            />
          ))}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 bg-white border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
