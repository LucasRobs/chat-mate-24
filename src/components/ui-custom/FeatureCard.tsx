import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 h-full text-left animate-on-scroll hover:shadow-md transition-shadow duration-300">
      <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-snug">{description}</p>
    </div>
  );
};

export default FeatureCard;
