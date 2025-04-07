
import React from 'react';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  period: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  period,
  features,
  cta,
  isPopular = false,
}) => {
  return (
    <div
      className={`h-full rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
        isPopular
          ? 'bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-500 shadow-xl scale-[1.02]'
          : 'bg-white border border-gray-200 shadow-md'
      }`}
    >
      {isPopular && (
        <div className="bg-emerald-500 text-white text-center py-1 text-sm font-medium">
          Mais popular
        </div>
      )}
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 mb-4 text-center text-sm">{description}</p>
        <div className="text-center mb-6">
          <span className="text-3xl sm:text-4xl font-bold">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto text-center">
          <Button
            className={`w-full ${
              isPopular
                ? 'bg-emerald-500 hover:bg-emerald-600'
                : 'bg-gray-900 hover:bg-gray-800'
            }`}
          >
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
