
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
        "relative flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden blur-reveal",
        isVisible && "in-view"
      )}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="relative z-10 text-4xl font-bold mb-3 text-primary">
        <CountUpNumber end={number} suffix={suffix} />
      </div>
      <p className="relative z-10 text-sm text-gray-500 max-w-xs font-light leading-relaxed">{description}</p>
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
    <section ref={sectionRef} id="benefits" className="bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
        <div className={`mb-16 blur-reveal relative z-10`} style={{ transitionDelay: "100ms" }}>
          {/* Decorative smoke effect behind the title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-[50px] rounded-full point-events-none"></div>
          
          <span className="relative bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide animate-pulse">
            O Impacto Real
          </span>
          <h2 className="relative mt-6 text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">Fature com Previsibilidade</h2>
          <p className="relative mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Elimine o desperdício de leads e transforme sua base num ativo que gera dinheiro todos os dias de forma automática.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-10 pb-6 -mx-4 px-4 sm:mx-0 sm:px-6 sm:pb-0 sm:grid sm:grid-cols-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {benefits.map((benefit, index) => (
            <div key={index} className="shrink-0 snap-center w-[85%] sm:w-auto">
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                number={benefit.number}
                suffix={benefit.suffix}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
