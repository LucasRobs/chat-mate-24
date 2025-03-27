
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
        "bg-white rounded-xl p-6 shadow-sm border border-gray-100",
        "hover:shadow-md hover:border-gray-200 transition-all duration-300 card-hover",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
