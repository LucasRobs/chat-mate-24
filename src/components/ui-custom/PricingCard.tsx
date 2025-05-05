
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  for?: string;
  features: PricingFeature[];
  isPopular?: boolean;
  className?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  for: forText,
  features,
  isPopular = false,
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 transition-all",
        isPopular 
          ? "bg-white border-2 border-primary shadow-xl" 
          : "bg-white border border-gray-100 shadow-sm",
        "transform hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Mais popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {forText && <p className="text-gray-500 text-sm mb-1">{forText}</p>}
        {description && <p className="text-gray-500 text-sm">{description}</p>}
        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2">/mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <Button
          className={cn(
            "w-full btn-hover",
            isPopular 
              ? "bg-primary hover:bg-primary/90" 
              : "bg-gray-900 hover:bg-gray-800"
          )}
        >
          Ver detalhes
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
