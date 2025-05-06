import { useState, useEffect } from "react";
import { Clock, DollarSign, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BenefitItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <div
      className="flex flex-col items-center p-4 text-center h-full transition-opacity duration-500 ease-in-out"
      style={{ transitionDelay: ${delay}ms, minHeight: '180px' }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-base font-light text-black mb-2 whitespace-normal leading-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs font-light">{description}</p>
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
      title: "Atendimento 24/7",
      description: "Esteja disponível para seus clientes a qualquer hora do dia, aumentando suas chances de venda."
    },
    {
      icon: DollarSign,
      title: "Redução de custos em 97%",
      description: "Substitua gastos com atendimento humano por uma solução eficiente de apenas R$ 0,44/hora."
    },
    {
      icon: MessageCircle,
      title: "Conversão Inteligente",
      description: "Sistema automatizado que engaja leads e acelera o processo de conversão em vendas."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className={mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}}>
          <h2 className="text-2xl sm:text-3xl font-light text-black">Turbine Suas Vendas</h2>
          <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto font-light">
            Tecnologia de ponta gerando resultados incríveis para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className={flex flex-col items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}}>
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

