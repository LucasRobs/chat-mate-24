
import React from 'react';
import { Play } from 'lucide-react';

interface VideoThumbnailProps {
  thumbnailSrc: string;
  videoId: string;
  onPlay: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ thumbnailSrc, videoId, onPlay }) => {
  return (
    <div 
      className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
      onClick={onPlay}
      aria-label="Play video"
    >
      <img 
        src={thumbnailSrc} 
        alt="Video thumbnail" 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110">
          <Play size={24} className="text-white fill-white ml-1" />
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
