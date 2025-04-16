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
    animateValue(0, 73, 5000, setEfficiency);
    animateValue(0, 65, 5000, setConversionRate);
    animateValue(0, 88, 5000, setSatisfaction);
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
    <section ref={statsRef} className="py-10 sm:py-12 bg-white relative overflow-hidden stats-section reveal">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 impulso-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="reveal">
            <div className="flex items-center justify-center text-green-500 text-2xl">
              <Flame className="w-8 h-8 mr-2" />
            </div>
            <h3 className="text-green-500 text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              +{efficiency}%
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">de eficiência no atendimento</p>
            <p className="text-gray-700 text-sm sm:text-base">Sem precisar acionar um atendente humano</p>
            <p className="text-gray-700 text-sm sm:text-base">Sua equipe foca no que realmente importa.</p>
          </div>
          <div className="reveal">
            <div className="flex items-center justify-center text-green-500 text-2xl">
              <Rocket className="w-8 h-8 mr-2" />
            </div>
            <h3 className="text-green-500 text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              +{conversionRate}%
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">mais chances de conversão</p>
            <p className="text-gray-700 text-sm sm:text-base">Leads engajados avançam com automações personalizadas</p>
            <p className="text-gray-700 text-sm sm:text-base">Cada conversa vira uma oportunidade real.</p>
          </div>
          <div className="reveal">
            <div className="flex items-center justify-center text-green-500 text-2xl">
              <Heart className="w-8 h-8 mr-2" />
            </div>
            <h3 className="text-green-500 text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              +{satisfaction}%
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">de satisfação do cliente</p>
            <p className="text-gray-700 text-sm sm:text-base">Respostas rápidas, atendimento humanizado</p>
            <p className="text-gray-700 text-sm sm:text-base">Quem recebe atenção imediata, volta a comprar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
