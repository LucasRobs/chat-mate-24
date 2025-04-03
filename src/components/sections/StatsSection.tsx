
import { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [companyCount, setCompanyCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [setupTime, setSetupTime] = useState(0);
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
    animateValue(0, 20, 2000, setCompanyCount);
    animateValue(0, 97, 2000, setSatisfactionRate);
    animateValue(0, 5, 2000, setSetupTime);
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
    <section ref={statsRef} className="py-10 sm:py-12 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden stats-section reveal">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 impulso-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center">
          <div className="reveal">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              {companyCount}+
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">Empresas utilizando com sucesso</p>
          </div>
          <div className="reveal">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              {satisfactionRate}%
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">Taxa de satisfação dos clientes</p>
          </div>
          <div className="reveal">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              {setupTime}min
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">Para configuração completa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
