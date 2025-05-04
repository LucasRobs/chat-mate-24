import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui-custom/Dashboard";

// Meta Tech Partner Badge Component (compacto)
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-1.5 bg-white shadow-sm border border-gray-200 rounded-md px-2 py-1 text-xs font-medium text-gray-700 max-w-fit">
    <div className="w-5 h-5 flex items-center justify-center">
      <img 
        src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png" 
        alt="Meta Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-[#0668E1] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
    <span className="text-gray-400 mx-1">|</span>
    <span className="text-[10px] text-gray-500">Powered by WhatsApp Business API</span>
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);

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

        {/* Meta badge centralizado com margem ajustada */}
        <div className="flex justify-center mb-2 mt-4">
          <MetaTechPartnerBadge />
        </div>

        <div className="text-center animate-on-scroll from-bottom animate-in mt-4" style={{ animationDelay: "0.3s" }}>
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
