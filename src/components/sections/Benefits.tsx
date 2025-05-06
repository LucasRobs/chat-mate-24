
import { useState, useEffect } from "react";
import { Flame, Rocket, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
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

  return <span>{count}{suffix}</span>;
};

const BenefitItem = ({ icon: Icon, title, description, number, delay }) => {
  return (
    <div
      className="flex flex-col items-center p-6 text-center h-full transition-opacity duration-500 ease-in-out bg-white rounded-xl shadow-md hover:shadow-xl"
      style={{ transitionDelay: `${delay}ms`, minHeight: '180px' }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-3xl font-bold text-primary mb-2">
        <CountUp end={number} suffix={title.includes("%") ? "%" : ""} />
      </div>
      <h3 className="text-base font-medium text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("benefits");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Flame,
      number: 24,
      title: "Horas de Atendimento",
      description: "Atendimento ininterrupto que não dorme nem nos finais de semana, aumentando suas vendas."
    },
    {
      icon: Rocket,
      number: 97,
      title: "% de Economia",
      description: "Reduza drasticamente seu custo de atendimento para apenas R$ 0,44/hora. Transforme seu negócio agora!"
    },
    {
      icon: MessageSquare,
      number: 300,
      title: "% Mais Conversões",
      description: "Aumente sua taxa de conversão com respostas instantâneas que não deixam o cliente esperando."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className={`mb-12 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            <span className="text-primary">Resultados</span> Surpreendentes
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa tecnologia transforma seu atendimento e potencializa seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                number={benefit.number}
                delay={index * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
