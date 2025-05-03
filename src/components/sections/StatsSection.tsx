
import { useState, useEffect, useRef } from "react";
import { Flame, Rocket, Heart } from "lucide-react";

const StatsSection = () => {
  const [efficiency, setEfficiency] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const statsRef = useRef(null);
  const animationTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggeredRef.current) {
            animationTriggeredRef.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    animateValue(0, 73, 2500, setEfficiency);
    animateValue(0, 65, 2500, setConversionRate);
    animateValue(0, 88, 2500, setSatisfaction);
  };

  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section ref={statsRef} className="py-10 sm:py-16 bg-white relative overflow-hidden stats-section reveal">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 impulso-pattern"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-12 h-12 rounded-full border-[3px] border-primary/40 opacity-70 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="w-full h-full rounded-full border-[3px] border-primary/40 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-primary/40 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-primary/40 opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="reveal bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center text-primary text-2xl">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Flame className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
              +{efficiency}%
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">de eficiência no atendimento</p>
            <div className="mt-3 space-y-1">
              <p className="text-gray-600 text-sm">Sem precisar acionar um atendente humano</p>
              <p className="text-gray-600 text-sm">Sua equipe foca no que realmente importa.</p>
            </div>
          </div>
          <div className="reveal bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center text-primary text-2xl">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
              +{conversionRate}%
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">mais chances de conversão</p>
            <div className="mt-3 space-y-1">
              <p className="text-gray-600 text-sm">Leads engajados avançam com automações personalizadas</p>
              <p className="text-gray-600 text-sm">Cada conversa vira uma oportunidade real.</p>
            </div>
          </div>
          <div className="reveal bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center text-primary text-2xl">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
              +{satisfaction}%
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">de satisfação do cliente</p>
            <div className="mt-3 space-y-1">
              <p className="text-gray-600 text-sm">Respostas rápidas, atendimento humanizado</p>
              <p className="text-gray-600 text-sm">Quem recebe atenção imediata, volta a comprar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
