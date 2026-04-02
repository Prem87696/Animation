import { motion } from 'motion/react';
import { Search, ArrowRight, Sparkles, Zap, Layout, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationCard from '@/components/ui/AnimationCard';

const CATEGORIES = [
  { name: 'UI Elements', icon: Layout, count: '2.4k' },
  { name: 'Loaders', icon: Zap, count: '1.8k' },
  { name: 'Illustrations', icon: Sparkles, count: '3.2k' },
  { name: 'Icons', icon: Box, count: '5.1k' },
];

const MOCK_ANIMATIONS = Array.from({ length: 8 }).map((_, i) => ({
  id: `anim-${i}`,
  title: `Abstract Loader ${i + 1}`,
  author: {
    name: 'Design Studio',
    avatar: `https://picsum.photos/seed/avatar${i}/100/100`
  },
  previewUrl: `https://picsum.photos/seed/anim${i}/400/300?blur=2`,
  likes: Math.floor(Math.random() * 1000),
  downloads: Math.floor(Math.random() * 5000),
  price: (i % 3 === 0 ? 'Premium' : 'Free') as 'Premium' | 'Free'
}));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-neutral-50 to-neutral-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Introducing Premium Animations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Bring your ideas to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">motion</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover thousands of free and premium animations for your next project. Ready to use in React, Vue, iOS, Android, and more.
            </p>

            <div className="relative max-w-2xl mx-auto mt-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-20" />
              <div className="relative flex items-center bg-white rounded-full border border-neutral-200 shadow-lg p-2">
                <Search className="w-5 h-5 text-neutral-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for 'loading spinner'..."
                  className="flex-1 bg-transparent border-none focus:outline-none px-4 py-3 text-neutral-900 placeholder:text-neutral-400"
                />
                <button className="bg-neutral-900 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-sm text-neutral-500">
              <span>Popular:</span>
              {['Loading', 'Success', 'Error', 'Confetti', 'Arrows'].map((tag) => (
                <Link key={tag} to={`/explore?q=${tag}`} className="px-3 py-1 rounded-full bg-white border border-neutral-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white border-y border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/explore?category=${cat.name}`} className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-200 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group bg-neutral-50/50 hover:bg-white">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors shadow-sm">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{cat.name}</h3>
                    <p className="text-sm text-neutral-500">{cat.count} assets</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-900">Trending Now</h2>
              <p className="text-neutral-600 mt-2">The most popular animations this week</p>
            </div>
            <Link to="/explore" className="hidden sm:flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

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
          
          <div className="mt-10 sm:hidden flex justify-center">
            <Link to="/explore" className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 font-medium hover:bg-neutral-50 transition-colors">
              View all animations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold">Featured Creators</h2>
              <p className="text-neutral-400 mt-2">Top motion designers on AnimHub</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-neutral-800 rounded-3xl p-6 border border-neutral-700 text-center group hover:border-indigo-500/50 transition-colors">
                <img 
                  src={`https://picsum.photos/seed/creator${i}/150/150`} 
                  alt="Creator" 
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-neutral-700 group-hover:border-indigo-500 transition-colors"
                  referrerPolicy="no-referrer"
                />
                <h3 className="font-semibold text-lg">Creator {i + 1}</h3>
                <p className="text-sm text-neutral-400 mb-4">Pro Motion Designer</p>
                <div className="flex items-center justify-center gap-4 text-sm text-neutral-300 mb-6">
                  <div><span className="font-bold text-white">1.2k</span> followers</div>
                  <div><span className="font-bold text-white">45</span> animations</div>
                </div>
                <button className="w-full py-2.5 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-200 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-neutral-900 px-8 py-16 md:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Join the community</h2>
              <p className="text-lg text-neutral-300">
                Create an account to save your favorite animations, follow creators, and upload your own work to share with the world.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
                  Get Started for Free
                </Link>
                <Link to="/upload" className="w-full sm:w-auto px-8 py-4 bg-neutral-800 text-white rounded-full font-semibold hover:bg-neutral-700 transition-colors">
                  Upload Animation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
