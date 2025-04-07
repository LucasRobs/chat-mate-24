
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  className?: string;
  videoId?: string;
}

const VideoPlayer = ({ src, poster, className, videoId }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Handle Google Drive links
  useEffect(() => {
    if (src && src.includes('drive.google.com') && !src.includes('uc?export=download')) {
      // Extract file ID from various Google Drive URL formats
      const fileIdMatch = src.match(/[-\w]{25,}/);
      if (fileIdMatch && fileIdMatch[0]) {
        const fileId = fileIdMatch[0];
        const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        if (videoRef.current) {
          videoRef.current.src = directUrl;
        }
      }
    }
  }, [src]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const updateProgress = () => {
      if (!videoElement || !progressBarRef.current) return;
      const percentage = (videoElement.currentTime / videoElement.duration) * 100;
      setProgress(percentage);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    videoElement.addEventListener("timeupdate", updateProgress);
    videoElement.addEventListener("loadeddata", handleLoadedData);
    
    return () => {
      videoElement.removeEventListener("timeupdate", updateProgress);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(e => {
        console.log("Video play error:", e);
      });
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
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
        playsInline
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
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label={isMuted ? "Ativar som" : "Silenciar"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
