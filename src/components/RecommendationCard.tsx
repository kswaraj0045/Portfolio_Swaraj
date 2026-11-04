import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Music2, User } from 'lucide-react';
import { RecommendationItem } from '../types/recommendations';

interface Props {
  item: RecommendationItem;
  isAdmin?: boolean;
  onEdit?: (item: RecommendationItem) => void;
  onDelete?: (id: string) => void;
}

export const RecommendationCard: React.FC<Props> = ({ 
  item,
  isAdmin = false,
  onEdit,
  onDelete
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isMovie = item.type === 'movie';

  // Fallback placeholder images if the provided link is broken
  const fallbackImage = isMovie
    ? 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
    : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl bg-[#17191D] border border-[#35383F]/70 hover:border-[#B32635]/80 overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(179,38,53,0.18)] flex flex-col"
    >
      {/* Visual Poster / Artwork Container */}
      <div className={`relative w-full overflow-hidden bg-[#111317] ${isMovie ? 'aspect-[2/3]' : 'aspect-square'}`}>
        {/* Loading shimmer placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#17191D] via-[#202329] to-[#17191D] animate-pulse" />
        )}

        <img
          src={imageError ? fallbackImage : item.imageUrl}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle Dark Vignette at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17191D] via-[#17191D]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Media Type Identifier Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#090A0C]/80 backdrop-blur-md border border-[#35383F]/80 text-[10px] font-mono uppercase tracking-wider text-[#C5C8CE]">
          {isMovie ? (
            <>
              <Film className="w-3 h-3 text-[#B32635]" />
              <span>Movie</span>
            </>
          ) : (
            <>
              <Music2 className="w-3 h-3 text-[#527DAA]" />
              <span>Music</span>
            </>
          )}
        </div>

        {/* Admin Quick Action Controls */}
        {isAdmin && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-[#090A0C]/90 p-1 rounded-lg border border-[#35383F]">
            {onEdit && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(item);
                }}
                className="px-2 py-1 text-[10px] font-mono text-[#F5F5F5] hover:text-[#B32635] transition-colors cursor-pointer"
                title="Edit item"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(item.id);
                }}
                className="px-2 py-1 text-[10px] font-mono text-[#D13A49] hover:underline transition-colors cursor-pointer"
                title="Remove item"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>

      {/* Card Information: Title and Contributor */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-[#17191D]">
        <h3 className="font-heading font-semibold text-sm sm:text-base text-[#F5F5F5] line-clamp-2 leading-snug group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Optional Community Contributor Name */}
        {item.source === 'community' && item.submittedBy && (
          <div className="mt-2.5 pt-2.5 border-t border-[#35383F]/50 flex items-center justify-between text-xs text-[#858992]">
            <div className="flex items-center gap-1.5 truncate">
              <User className="w-3 h-3 text-[#C5C8CE] shrink-0" />
              <span className="font-sans text-[11px] truncate">
                by <span className="text-[#C5C8CE] font-medium">{item.submittedBy}</span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#527DAA] px-1.5 py-0.5 rounded bg-[#527DAA]/10 border border-[#527DAA]/20">
              Community
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

