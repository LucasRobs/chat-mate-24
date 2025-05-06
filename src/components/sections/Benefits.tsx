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
      className="flex flex-col items-center p-6 text-center h-full transition-opacity duration-500 ease-in-out bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform"
      style={{ transitionDelay: `${delay}ms`, minHeight: "220px" }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-green-500 flex items-center justify-center mb-4 shadow-lg transition-all duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-medium text-black mb-1 whitespace-normal">{title}</h3>
      {number !== undefined && (
        <p className="text-xl font-semibold text-primary mb-2">
          <CountUp end={number} />
          {title.includes("%") ? "%" : ""}
        </p>
      )}
      <p className="text-sm text-gray-500 leading-relaxed font-light">{description}</p>
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
      number: 97,
      description: "Substitua gastos com atendimento humano por uma solução eficiente de apenas R$ 0,44/hora."
    },
    {
      icon: MessageCircle,
      title: "Conversão Inteligente",
      description: "Sistema automatizado que engaja leads e acelera o processo de conversão em vendas."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`mb-12 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl font-light text-black">Turbine Suas Vendas</h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto font-light">
            Tecnologia de ponta gerando resultados incríveis para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                number={benefit.number}
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
