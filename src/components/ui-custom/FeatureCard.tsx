
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
        "bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100 text-center",
        "hover:shadow-xl hover:border-primary/30 transition-all duration-500 card-hover",
        "group relative overflow-hidden z-10",
        className
      )}
    >
      {/* Background pattern with concentric circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"15\" stroke=\"%23cafae7\" stroke-width=\"2\" fill=\"none\"/%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"10\" stroke=\"%23cafae7\" stroke-width=\"2\" fill=\"none\"/%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"5\" stroke=\"%23cafae7\" stroke-width=\"2\" fill=\"none\"/%3E%3C/svg%3E')", 
          backgroundSize: "80px",
          opacity: 0.1
        }}></div>
      </div>
      
      {/* Background gradient effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-500">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
