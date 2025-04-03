import { useState, useEffect } from "react";
import { Clock, DollarSign, MessageCircle, Headphones, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BenefitItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center h-full transition-opacity duration-500 ease-in-out" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-normal">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed max-w-xs">{description}</p>
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
      icon: Clock,
      title: "Atendimento Sem Pausas",
      description: "Disponibilidade completa, 24 horas por dia, todos os dias da semana."
    },
    {
      icon: DollarSign,
      title: "Custo Drasticamente Reduzido",
      description: "Apenas R$ 0,44 por hora, contra R$ 14,55 de um SDR humano."
    },
    {
      icon: MessageCircle,
      title: "Follow-up Inteligente",
      description: "Sistema automatizado que aumenta suas taxas de conversão."
    },
    {
      icon: Headphones,
      title: "Atendimento Preciso e Ágil",
      description: "A IA responde com alta precisão e rapidez, garantindo interações eficientes e satisfatórias para seus clientes."
    },
    {
      icon: Zap,
      title: "Integração Simples e Rápida",
      description: "Configure com seu WhatsApp em poucos minutos."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className={`mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900">Benefícios da followop</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia avançada com resultados imediatos para seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> 
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
