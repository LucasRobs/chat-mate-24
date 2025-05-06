
import { useState, useEffect } from "react";
import { Clock, DollarSign, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.round(start));
    }, 20);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}</span>;
};

const BenefitItem = ({ icon: Icon, title, description, number, delay }) => {
  return (
    <div
      className="flex flex-col items-center p-6 text-center h-full transition-opacity duration-500 ease-in-out bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105"
      style={{ opacity: 0, animationDelay: `${delay}ms` }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative mb-6">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-sm opacity-70"></div>
        <div className="bg-white p-4 rounded-full relative">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 mb-4">
        <CountUp end={number} />
        <span className="text-3xl font-bold text-primary">+</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const benefitItems = document.querySelectorAll('[data-aos]');
    
    benefitItems.forEach((item) => {
      item.classList.add('animate-fade-in');
    });
  }, []);
  
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and focus on what matters most.",
      number: 40,
      delay: 100,
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Cut operational expenses and maximize your resources.",
      number: 25,
      delay: 300,
    },
    {
      icon: MessageCircle,
      title: "Improve Communication",
      description: "Keep your team aligned with real-time updates.",
      number: 85,
      delay: 500,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefits That <span className="text-primary">Make a Difference</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              number={benefit.number}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
