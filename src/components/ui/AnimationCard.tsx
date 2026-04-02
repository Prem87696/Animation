import { motion } from 'motion/react';
import { Heart, Download, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimationCardProps {
  key?: React.Key;
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  previewUrl: string;
  likes: number;
  downloads: number;
  price?: 'Free' | 'Premium';
}

export default function AnimationCard({
  id,
  title,
  author,
  previewUrl,
  likes,
  downloads,
  price = 'Free'
}: AnimationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image/Preview Area */}
      <Link to={`/animation/${id}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/20">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {/* Placeholder for actual animation */}
          <img 
            src={previewUrl} 
            alt={title}
            className={cn(
              "w-full h-full object-contain transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 left-3">
          <span className={cn(
            "px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md",
            price === 'Free' 
              ? "bg-white/80 text-neutral-700" 
              : "bg-indigo-500/90 text-white shadow-sm"
          )}>
            {price}
          </span>
        </div>

        {/* Hover Overlay Actions */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4",
          isHovered && "opacity-100"
        )}>
          <div className="flex items-center justify-between w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-900 hover:bg-white hover:scale-105 transition-all shadow-sm">
              <Play className="w-4 h-4 ml-0.5" />
            </button>
            <div className="flex gap-2">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-900 hover:bg-white hover:scale-105 transition-all shadow-sm"
              >
                <Heart className={cn("w-4 h-4 transition-colors", isLiked ? "fill-red-500 text-red-500" : "")} />
              </button>
              <button 
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-900 hover:bg-white hover:scale-105 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Meta Info */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 overflow-hidden">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-6 h-6 rounded-full object-cover bg-neutral-200 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="truncate">
            <h3 className="text-sm font-semibold text-neutral-900 truncate">{title}</h3>
            <p className="text-xs text-neutral-500 truncate">{author.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 text-xs font-medium text-neutral-500">
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5" />
            <span>{downloads}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
