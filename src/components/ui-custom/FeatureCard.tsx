
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-sm border border-gray-100 text-center",
        "hover:shadow-xl hover:border-primary/30 transition-all duration-500 card-hover",
        "group relative z-10",
        className
      )}
    >
      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      
      {/* Icon with brand element */}
      <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:from-primary/20 group-hover:to-primary/5 transition-all duration-700">
        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary/80" />
      </div>
      
      <h3 className="text-xs sm:text-base font-light text-black mb-1 sm:mb-2 group-hover:text-primary/90 transition-colors duration-500">{title}</h3>
      <p className="text-[10px] sm:text-xs text-gray-500 font-light line-clamp-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
