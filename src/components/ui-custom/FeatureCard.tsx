
import React from 'react';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300',
        className
      )}
    >
      <div className="mb-4 p-3 bg-emerald-50 rounded-full transition-transform duration-300 group-hover:scale-110">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
