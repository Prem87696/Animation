import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Download, Share2, Code, Play, Pause, Repeat, Maximize2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimationCard from '@/components/ui/AnimationCard';

export default function AnimationDetail() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* Top Section */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Player Area */}
            <div className="flex-1">
              <div className="relative aspect-video bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 shadow-inner flex items-center justify-center group">
                <img 
                  src={`https://picsum.photos/seed/${id}/800/600?blur=2`} 
                  alt="Animation Preview"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Player Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <div className="w-px h-4 bg-neutral-300 mx-1" />
                  <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                    <Repeat className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="w-full lg:w-96 flex flex-col gap-6">
              <div>
                <h1 className="text-2xl font-display font-bold text-neutral-900 mb-2">Awesome Loading Spinner</h1>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  A smooth, elegant loading spinner perfect for modern web applications. Built with Lottie for optimal performance.
                </p>
              </div>

              {/* Author Card */}
              <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://picsum.photos/seed/author1/100/100" 
                    alt="Author" 
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-900">Motion Master</h3>
                    <p className="text-xs text-neutral-500">Pro Creator</p>
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors">
                  Follow
                </button>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={cn(
                    "flex items-center justify-center gap-2 py-3 rounded-xl border font-medium transition-all",
                    isLiked 
                      ? "bg-red-50 border-red-200 text-red-600" 
                      : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  )}
                >
                  <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-xl font-medium hover:bg-neutral-50 transition-all">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              {/* Download Section */}
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20">
                  <Download className="w-4 h-4" />
                  Download JSON
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-neutral-200 text-neutral-700 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors">
                    GIF
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-white border border-neutral-200 text-neutral-700 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors">
                    MP4
                  </button>
                </div>
              </div>

              {/* Embed */}
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700">Embed Code</span>
                  <button 
                    onClick={handleCopy}
                    className="text-xs text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-700"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Code className="w-3 h-3" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="p-3 bg-neutral-900 rounded-xl overflow-hidden">
                  <code className="text-xs text-neutral-300 font-mono break-all line-clamp-2">
                    &lt;script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"&gt;&lt;/script&gt;
                  </code>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                {['UI', 'Loading', 'Spinner', 'Minimal', 'Web'].map(tag => (
                  <Link key={tag} to={`/explore?q=${tag}`} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-lg text-xs font-medium hover:bg-neutral-200 transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8">More like this</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <AnimationCard 
              key={i}
              id={`related-${i}`}
              title={`Similar Animation ${i + 1}`}
              author={{ name: 'Creator', avatar: `https://picsum.photos/seed/rel${i}/100/100` }}
              previewUrl={`https://picsum.photos/seed/relanim${i}/400/300?blur=2`}
              likes={120}
              downloads={450}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
