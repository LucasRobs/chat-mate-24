import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui-custom/Dashboard";

// Meta Tech Partner Badge Component
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white shadow-md border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:shadow-lg transition-shadow">
    <div className="w-6 h-6 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96 9.69l-84 48.4v75.82l84 48.4 84-48.4V58.09l-84-48.4z" fill="none"/>
        <path d="M96 9.69l-84 48.4v75.82l84 48.4 84-48.4V58.09l-84-48.4z" fill="none"/>
        <path d="M96 9.69l-84 48.4v75.82l84 48.4 84-48.4V58.09l-84-48.4z" fill="none"/>
        <path d="M168 58.09l-72-41.54-72 41.54v75.82l72 41.54 72-41.54V58.09z" fill="none"/>
        <path d="M95.5 174L41 142.5V79.5L95.5 48l54.5 31.5v63L95.5 174z" fill="none"/>
        <path d="M96 174.5L40 142.29V78.71L96 46.5l56 32.21v63.58L96 174.5z" fill="none"/>
        <path d="M71.46 102.51l-1.43-1.43c-2.97-2.97-4.29-6.37-4.29-10.07 0-3.7 1.32-7.1 4.29-10.07l26.05-26.05 26.05 26.05c2.97 2.97 4.29 6.37 4.29 10.07 0 3.7-1.32 7.1-4.29 10.07l-26.05 26.05-24.62-24.62z" fill="#0080FB"/>
        <path d="M150.18 102.51l-1.43-1.43c-2.97-2.97-4.29-6.37-4.29-10.07 0-3.7 1.32-7.1 4.29-10.07l26.05-26.05 26.05 26.05c2.97 2.97 4.29 6.37 4.29 10.07 0 3.7-1.32 7.1-4.29 10.07l-26.05 26.05-24.62-24.62z" fill="#0080FB" transform="translate(-80 0)"/>
      </svg>
    </div>
    <span className="text-[#1877F2] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
    <span className="text-xs text-gray-500 ml-1">|</span>
    <span className="text-xs text-gray-500">Powered by WhatsApp Business API</span>
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animElements = document.querySelectorAll(".animate-on-scroll");
    animElements.forEach((el) => observer.observe(el));
    
    return () => {
      clearTimeout(timer);
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.followop.com.br/register", "_blank");
    }
  };

  // Fixed data for the activity chart
  const activityData = [
    { name: "5/04", value: 10 },
    { name: "6/04", value: 20 },
    { name: "7/04", value: 15 },
    { name: "8/04", value: 120 },
    { name: "9/04", value: 340 },
    { name: "10/04", value: 50 },
    { name: "11/04", value: 60 },
    { name: "12/04", value: 20 },
    { name: "13/04", value: 40 },
    { name: "14/04", value: 170 },
    { name: "15/04", value: 30 },
    { name: "16/04", value: 350 },
    { name: "17/04", value: 90 },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-10 md:py-14 lg:py-16 mobile-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex justify-center items-center mb-3">
            <div className="animate-on-scroll from-bottom animate-in">
              <MetaTechPartnerBadge />
            </div>
          </div>
        </div>

        <div className="text-center animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3">
            <span className="text-primary">Transforme</span> Seu Whatsapp:
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Venda no automático com <span className="text-primary">inteligência Artificial</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trabalhe de forma mais inteligente sem perder performance<br className="hidden md:inline" />
            aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          <div className="mt-6 flex justify-center">
            <Button 
              onClick={handleButtonClick}
              variant="trial"
              size="sm"
              className="text-xs py-2 flex items-center gap-2 h-auto transform hover:scale-105 transition-all duration-300 button-pulse"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                <ArrowRight size={10} />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-10 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.5s" }}>
          <Dashboard 
            activityData={activityData} 
            isMobile={isMobile} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
