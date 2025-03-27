
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const updateProgress = () => {
      if (!videoElement || !progressBarRef.current) return;
      const percentage = (videoElement.currentTime / videoElement.duration) * 100;
      setProgress(percentage);
    };

    videoElement.addEventListener("timeupdate", updateProgress);
    return () => {
      videoElement.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthPercentage = (x / rect.width) * 100;
    
    const seekTime = (widthPercentage / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-xl", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div
          ref={progressBarRef}
          className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
          onClick={seek}
        >
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
