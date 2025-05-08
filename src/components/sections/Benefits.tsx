
import { useState, useEffect, useRef } from "react";
import { Flame, MessageCircle, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const CountUpNumber = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    let animationFrameId;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const BenefitItem = ({ icon: Icon, title, description, number, suffix, index, isVisible }) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center p-4 text-center h-full bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-500 ease-in-out hover-card",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ 
        minHeight: '180px',
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-base font-light text-black mb-2 whitespace-normal leading-tight">
        {title}
      </h3>
      <div className="text-2xl font-bold mb-1 text-primary">
        <CountUpNumber end={number} suffix={suffix} />
      </div>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs font-light">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Rocket,
      title: "Atendimento 24/7",
      description: "Esteja disponível para seus clientes a qualquer hora do dia, aumentando suas chances de venda.",
      number: 100,
      suffix: "%"
    },
    {
      icon: Flame,
      title: "Redução de custos",
      description: "Substitua gastos com atendimento humano por uma solução eficiente de apenas R$ 0,44/hora.",
      number: 97,
      suffix: "%"
    },
    {
      icon: MessageCircle,
      title: "Conversão Inteligente",
      description: "Sistema automatizado que engaja leads e acelera o processo de conversão em vendas.",
      number: 300,
      suffix: "%"
    }
  ];

  return (
    <section ref={sectionRef} id="benefits" className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
        <div className={`mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Benefícios
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-light text-black">Turbine Suas Vendas</h2>
          <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto font-light">
            Tecnologia de ponta gerando resultados incríveis para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              number={benefit.number}
              suffix={benefit.suffix}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
