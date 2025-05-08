
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
        "bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100 text-center",
        "hover:shadow-lg hover:border-primary/30 transition-all duration-500 card-hover",
        "group relative overflow-hidden z-10",
        className
      )}
    >
      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      
      {/* Icon with brand element */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mx-auto mb-3 group-hover:from-primary/20 group-hover:to-primary/5 transition-all duration-700">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary/80" />
      </div>
      
      <h3 className="text-sm sm:text-base font-light text-black mb-1 sm:mb-2 group-hover:text-primary/90 transition-colors duration-500">{title}</h3>
      <p className="text-gray-500 font-light text-xs leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
