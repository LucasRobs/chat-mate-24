
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

const BenefitItem = ({ number, icon: Icon, title, description, delay }) => {
  return (
    <div
      className="flex flex-col items-center px-3 py-4 text-center transition-opacity duration-500 ease-in-out"
      style={{ transitionDelay: `${delay}ms`, minHeight: "160px" }}
    >
      <div className="text-primary mb-2">
        <Icon className="w-7 h-7" />
      </div>
      <div className="text-2xl font-bold text-primary mb-1">
        <CountUp end={number} suffix={title.includes("%") ? "%" : ""} />
      </div>
      <h3 className="text-base font-medium text-black mb-1">{title}</h3>
      <p className="text-sm text-gray-500 max-w-xs">{description}</p>
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
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const benefits = [
    {
      icon: Flame,
      number: 24,
      title: "Atendimento 24/7",
      description: "Esteja disponível a qualquer hora, mesmo fora do expediente."
    },
    {
      icon: Rocket,
      number: 97,
      title: "Redução de custos em 97%",
      description: "Automatize e pague apenas R$ 0,44 por hora de operação."
    },
    {
      icon: MessageSquare,
      number: 3,
      title: "× mais Conversões",
      description: "Transforme leads em clientes com automação inteligente."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`mb-12 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl font-light text-black">Turbine Suas Vendas</h2>
          <p className="mt-2 text-base text-gray-500 max-w-2xl mx-auto font-light">
            Resultados reais com atendimento automatizado no WhatsApp.
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
