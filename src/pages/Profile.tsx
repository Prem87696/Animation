import { useState } from 'react';
import { Settings, MapPin, Link as LinkIcon, Twitter, Grid, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimationCard from '@/components/ui/AnimationCard';

const MOCK_UPLOADS = Array.from({ length: 6 }).map((_, i) => ({
  id: `up-${i}`,
  title: `My Animation ${i + 1}`,
  author: {
    name: 'Alex Designer',
    avatar: `https://picsum.photos/seed/alex/100/100`
  },
  previewUrl: `https://picsum.photos/seed/up${i}/400/300?blur=2`,
  likes: Math.floor(Math.random() * 500),
  downloads: Math.floor(Math.random() * 1000),
}));

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'uploads' | 'likes'>('uploads');

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* Cover & Profile Info */}
      <div className="bg-white border-b border-neutral-200">
        <div className="h-48 md:h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pb-8">
            {/* Avatar */}
            <div className="absolute -top-16 md:-top-20">
              <img 
                src="https://picsum.photos/seed/alex/200/200" 
                alt="Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end pt-4 mb-8 md:mb-0">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors shadow-sm">
                <Settings className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            {/* Info */}
            <div className="mt-16 md:mt-4 max-w-2xl">
              <h1 className="text-3xl font-display font-bold text-neutral-900">Alex Designer</h1>
              <p className="text-neutral-500 mt-1">@alexdesign</p>
              
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Motion designer and UI developer. Creating smooth, delightful micro-interactions for the modern web. Available for freelance work.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-1.5">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="hover:text-indigo-600 transition-colors">alexdesign.co</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Twitter className="w-4 h-4" />
                  <a href="#" className="hover:text-indigo-600 transition-colors">@alexdesign</a>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-neutral-100">
                <div>
                  <div className="text-2xl font-bold text-neutral-900">24</div>
                  <div className="text-sm text-neutral-500">Uploads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">12.5k</div>
                  <div className="text-sm text-neutral-500">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">48.2k</div>
                  <div className="text-sm text-neutral-500">Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-6 border-b border-neutral-200 mb-8">
          <button 
            onClick={() => setActiveTab('uploads')}
            className={cn(
              "flex items-center gap-2 pb-4 text-sm font-medium border-b-2 transition-colors",
              activeTab === 'uploads' 
                ? "border-indigo-600 text-indigo-600" 
                : "border-transparent text-neutral-500 hover:text-neutral-700"
            )}
          >
            <Grid className="w-4 h-4" />
            Uploads
          </button>
          <button 
            onClick={() => setActiveTab('likes')}
            className={cn(
              "flex items-center gap-2 pb-4 text-sm font-medium border-b-2 transition-colors",
              activeTab === 'likes' 
                ? "border-indigo-600 text-indigo-600" 
                : "border-transparent text-neutral-500 hover:text-neutral-700"
            )}
          >
            <Heart className="w-4 h-4" />
            Likes
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {MOCK_UPLOADS.map((anim) => (
            <AnimationCard 
              key={anim.id} 
              id={anim.id}
              title={anim.title}
              author={anim.author}
              previewUrl={anim.previewUrl}
              likes={anim.likes}
              downloads={anim.downloads}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
