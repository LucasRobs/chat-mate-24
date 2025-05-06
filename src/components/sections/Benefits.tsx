import { useState, useEffect } from "react";
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

const BenefitItem = ({ emoji, number, title, description, delay }) => (
  <div
    className="flex flex-col items-center px-4 py-6 text-center transition-opacity duration-500 ease-in-out"
    style={{ transitionDelay: `${delay}ms`, minHeight: "200px" }}
  >
    <div className="text-4xl mb-3">{emoji}</div>
    <div className="text-3xl font-extrabold text-green-600 mb-1 leading-none tracking-tight">
      <CountUp end={number} suffix={title.includes("%") ? "%" : ""} />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-base text-gray-600 max-w-xs leading-snug">{description}</p>
  </div>
);

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
      emoji: "🔥",
      number: 24,
      title: "Atendimento 24/7",
      description: "Esteja sempre disponível, mesmo quando sua equipe estiver offline."
    },
    {
      emoji: "🚀",
      number: 97,
      title: "Redução de custos em 97%",
      description: "Economize com atendimento humano e automatize com inteligência."
    },
    {
      emoji: "💬",
      number: 3,
      title: "x mais Conversões",
      description: "Converta leads com muito mais velocidade e eficiência."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className={`mb-14 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl font-light text-black">Turbine Suas Vendas no WhatsApp</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Resultados reais com automação inteligente. Mais leads, menos esforço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <BenefitItem
                emoji={benefit.emoji}
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
