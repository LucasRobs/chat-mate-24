
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
        "bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 text-center",
        "hover:shadow-xl hover:border-primary/30 transition-all duration-500 card-hover",
        "group relative overflow-hidden z-10",
        className
      )}
    >
      {/* Background gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Icon with brand element */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-light text-black mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 font-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
