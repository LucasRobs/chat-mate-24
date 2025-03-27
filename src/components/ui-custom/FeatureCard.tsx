
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
        "bg-white rounded-xl p-8 shadow-sm border border-gray-100",
        "hover:shadow-lg hover:border-gray-200 transition-all duration-500 card-hover",
        "group relative overflow-hidden z-10",
        className
      )}
    >
      {/* Background gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
