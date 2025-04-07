
import React from 'react';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-all duration-300',
        className
      )}
    >
      <div className="mb-4 p-3 bg-emerald-50 rounded-full transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
